const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Event= mongoose.model('Event');
const Living = mongoose.model('Living');
const Transportation = mongoose.model('Transportation')
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
        const updateItinerary = await Itinerary.findById(req.params.id)
        const newEvent = new Event({
          eventTitle: req.body.eventTitle,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          location: req.body.location,
          description: req.body.description,
          category: req.body.category,
          cost: req.body.cost
        })
        updateItinerary.events.push(newEvent)
        try{
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username');
          return res.json(itinerary)

        }
        catch(err){
          next(err)
        }
      }
      catch(err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = { message: "No itinerary found with that id" };
        return next(error);
      }


  });

  router.patch('/:id/livings', requireUser, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id)
        const newLiving = new Living({
          livingTitle: req.body.livingTitle,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          location: req.body.location,
          description: req.body.description,
          cost: req.body.cost
        })
        updateItinerary.livings.push(newLiving)
        try{
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username');
          return res.json(itinerary)

        }
        catch(err){
          next(err)
        }
      }
      catch(err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = { message: "No itinerary found with that id" };
        return next(error);
      }


  });
  router.patch('/:id/transportations', requireUser, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id)
        const newTransportation = new Transportation({
          transportationTitle: req.body.transportationTitle,
          startLocation: req.body.startLocation,
          endLocation: req.body.endLocation,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          description: req.body.description,
          cost: req.body.cost
        })
        updateItinerary.transportations.push(newTransportation)
        try{
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username');
          return res.json(itinerary)

        }
        catch(err){
          next(err)
        }
      }
      catch(err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = { message: "No itinerary found with that id" };
        return next(error);
      }


  });


  router.patch('/:id/events/:eventsId', requireUser, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id)
        const updateEvent = await Event.findById(req.params.eventsId)

        if (!updateItinerary || !updateEvent) {
            throw new Error("Itinerary or Event not found!");
        }

        if (req.body.eventTitle) {
            updateEvent.eventTitle = req.body.eventTitle
        }

        if (req.body.startTime) {
            updateEvent.startTime = req.body.startTime
        }

        if (req.body.endTime) {
            updateEvent.endTime = req.body.endTime
        }

        if (req.body.location) {
            updateEvent.location = req.body.location
        }

        if (req.body.description) {
            updateEvent.description = req.body.description
        }

        if (req.body.category) {
            updateEvent.category = req.body.category
        }

        if (req.body.cost) {
            updateEvent.cost = req.body.cost
        }

        await updateEvent.save();
        res.send(updateEvent);
    } catch (error) {
        res.status(404).send({ error: "Itinerary or Event doesn't exist!" });
    }
});
//         const newEvent = new Event({
//           eventTitle: req.body.eventTitle,
//           startTime: req.body.startTime,
//           endTime: req.body.endTime,
//           location: req.body.location,
//           description: req.body.description,
//           category: req.body.category,
//           cost: req.body.cost
//         })
//         updateItinerary.events.push(newEvent)
//         try{
//           let itinerary = await updateItinerary.save()
//           itinerary = await itinerary.populate('author', '_id username');
//           return res.json(itinerary)

//         }
//         catch(err){
//           next(err)
//         }
//       }
//       catch(err) {
//         const error = new Error('Itinerary not found');
//         error.statusCode = 404;
//         error.errors = { message: "No itinerary found with that id" };
//         return next(error);
//       }


//   });


  router.delete('/:id/events/:eventsId', requireUser, async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.eventsId);
        if (!event) {
            res.status(404).send({ error: "Event doesn't exist!" });
            return;
        }

        await Event.deleteOne({ _id: req.params.eventsId });
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: "An error occurred while deleting the event." });
    }
});

  module.exports = router;
