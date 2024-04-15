const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Itinerary = mongoose.model('Itinerary');
const { requireUser } = require('../../config/passport');


router.get('/', async (req, res) => {
    try {
      const itineraries = await Itinerary.find()
                                .populate("author", "_id username")
                                .sort({ createdAt: -1 });
      return res.json(itineraries);
    }
    catch(err) {
      return res.json([]);
    }
  });


  router.get('/user/:userId', async (req, res, next) => {
    let user;
    try {
      user = await User.findById(req.params.userId);
    } catch(err) {
      const error = new Error('User not found');
      error.statusCode = 404;
      error.errors = { message: "No user found with that id" };
      return next(error);
    }
    try {
      const itineraries = await Itinerary.find({ author: user._id })
                                .sort({ createdAt: -1 })
                                .populate("author", "_id username");
      return res.json(itineraries);
    }
    catch(err) {
      return res.json([]);
    }
  })


  router.get('/:id', async (req, res, next) => {
    try {
      const itinerary = await Itinerary.findById(req.params.id)
                               .populate("author", "_id username");
      return res.json(itinerary);
    }
    catch(err) {
      const error = new Error('Itinerary not found');
      error.statusCode = 404;
      error.errors = { message: "No itinerary found with that id" };
      return next(error);
    }
  });


  router.post('/', requireUser, async (req, res, next) => {
    try {
      const newItinerary = new Itinerary({
        author: req.user._id,
        title: req.body.title,
        description: req.body.description
      });
  
      let itinerary = await newItinerary.save();
      itinerary = await itinerary.populate('author', '_id username');
      return res.json(itinerary);
    }
    catch(err) {
      next(err);
    }
  });


  router.patch('/:id/events', requireUser, async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id)
        res.json(itinerary);
      }
      catch(err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = { message: "No itinerary found with that id" };
        return next(error);
      }
  });


