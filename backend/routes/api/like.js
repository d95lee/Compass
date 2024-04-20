const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Like = mongoose.model('Like')
const User = mongoose.model('User')
const Itinerary = mongoose.model('Itinerary')
const { requireUser } = require('../../config/passport');


router.post('/', requireUser, async (req, res, next) =>{
    try {
        const itinerary = await Itinerary.findById(req.body.itineraryId)
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
            user: req.user._id,
            itinerary: req.body.itineraryId
        });
        await newLike.save();
        await Itinerary.findByIdAndUpdate(req.body.itineraryId, { $inc: { likes: 1 } });
        await User.findByIdAndUpdate(req.user._id, { $addToSet: { likes: req.body.itineraryId } })
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
        await User.findByIdAndUpdate(req.user._id, { $pull: { likes: like.itinerary } });
        await Itinerary.findByIdAndUpdate(like.itinerary, { $inc: { likes: -1 } })
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: "An error occurred while deleting the like." });
    }
});


module.exports = router;
