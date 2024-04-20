const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Like = mongoose.model('Like')
const User = mongoose.model('User')
const Itinerary = mongoose.model('Itinerary')
const { requireUser } = require('../../config/passport');


router.post('/', requireUser, async (req, res, next) =>{
    let itinerary;
    const user = await User.findById(req.user._id)
    try {
        itinerary = await Itinerary.findById(req.body.itineraryId)
    }catch(err){
    const error = new Error('itinerary not found');
      error.statusCode = 404;
      error.errors = { message: "No itinerary found with that id" };
      return next(error);
    }
    try {
        const existingLike = await Like.findOne({ user: req.user._id, itinerary: req.body.itineraryId });
        if (existingLike) {
            return res.status(400).json({ message: 'User has already liked this itinerary' });
        }
        const newLike = new Like({
            user: user._id,
            itinerary: itinerary._id
        });
        await newLike.save();
        await Itinerary.findByIdAndUpdate(req.body.itineraryId, { $inc: { likes: 1 } });
        await User.findByIdAndUpdate(req.user._id, { $addToSet: { likes: newLike._id } })
        return res.status(201).json("liked")
    }catch(err){
        next(err)
    }
});

router.delete('/:id', requireUser, async (req, res, next) =>{
    try {
        const like = await Like.findById(req.params.id);
        if (!like) {
            return res.status(404).send({ error: "Like doesn't exist!" });
        }
        if (like.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'You do not have permission to delete this like' });
        }

        await Like.deleteOne({ _id: req.params.id });
        try{

            await User.findByIdAndUpdate(req.user._id, { $pull: { likes: like._id } });
        }catch(err){
            res.status(404).json({ message: 'user update fail'})
        }
        try{

            await Itinerary.findByIdAndUpdate(like.itinerary, { $inc: { likes: -1 } })
        }catch(err){
            res.status(404).json({ message: 'itinerary update fail'})
        }
        res.status(204).send();
    } catch (err) {
        next(err)
    }
});


module.exports = router;
