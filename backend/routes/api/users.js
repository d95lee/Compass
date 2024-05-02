var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
const { loginUser, restoreUser, requireUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');
const { singleFileUpload, singleMulterUpload } = require("../../awsS3");

const DEFAULT_PROFILE_IMAGE_URL = 'https://mern-travel.s3.us-west-1.amazonaws.com/default_profile_pic.jpg'


router.post('/register', singleMulterUpload("image"), validateRegisterInput, async (req, res, next) =>{
  const user = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }]
  });

  if (user) {
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }
    if (user.username === req.body.username) {
      errors.username = "A user has already registered with this username";
    }
    err.errors = errors;
    return next(err);
  }
  const profileImageUrl = req.file ?
    await singleFileUpload({ file: req.file, isPublic: true }) :
    DEFAULT_PROFILE_IMAGE_URL;
  const newUser = new User({
    username: req.body.username,
    profileImageUrl,
    email: req.body.email
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user));
      }
      catch(err) {
        next(err);
      }
    })
  });
});

router.post('/login', singleMulterUpload(""), validateLoginInput, async (req, res, next) => {
  passport.authenticate('local', async function(err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 400;
      err.errors = { email: "Invalid credentials" };
      return next(err);
    }
    return res.json(await loginUser(user));
  })(req, res, next);
});

router.get('/current', restoreUser, (req, res) => {
  if (!isProduction) {
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  if (!req.user) return res.json(null);
  res.json({
    _id: req.user._id,
    username: req.user.username,
    profileImageUrl: req.user.profileImageUrl,
    email: req.user.email
  });
});

router.patch('/:userId/bio', requireUser, async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.userId,
      { bio: req.body.bio}, { new: true })
      let user = await updateUser.save()
      return res.json(user)
  }
  catch (err) {
    const error = new Error('User not found');
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
}
})

router.get('/', async (req, res) =>{
  try{
    const users = await User.find({},{username: 1, bio: 1, profileImageUrl: 1, likes: 1})
                            .populate('likes', '_id itinerary')
    return res.json(users)
  }
  catch(err){
    return res.json([])
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    const user = await User.findById(req.params.id,{username: 1, bio: 1, profileImageUrl: 1, likes: 1})
                            .populate('likes', '_id itinerary')
    return res.json(user)
  }
  catch(err){
    const error = new Error('User not found');
      error.statusCode = 404;
      error.errors = { message: "No User found with that id" };
      return next(error);
  }
})

module.exports = router;
