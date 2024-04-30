const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Event= mongoose.model('Event');
const Living = mongoose.model('Living');
const Transportation = mongoose.model('Transportation')
const Itinerary = mongoose.model('Itinerary');
const { requireUser } = require('../../config/passport');
const {findObjById} = require('../../utils/itineraryHelper')
const validateEventInput = require('../../validations/event');
const validateTransportationInput = require('../../validations/transportation');
const validateLivingInput = require('../../validations/living');


router.get('/', async (req, res) => {
    try {
      const itineraries = await Itinerary.find()
                                .populate("author", "_id username profileImageUrl")
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
                                .populate("author", "_id username profileImageUrl");
      return res.json(itineraries);
    }
    catch(err) {
      return res.json([]);
    }
  })


  router.get('/:id', async (req, res, next) => {
    try {
      const itinerary = await Itinerary.findById(req.params.id)
                               .populate("author", "_id username profileImageUrl");
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
        description: req.body.description,
        country: req.body.country
      });

      let itinerary = await newItinerary.save();
      itinerary = await itinerary.populate('author', '_id username profileImageUrl');
      return res.json(itinerary);
    }
    catch(err) {
      next(err);
    }
  });

  // Creating an event
  router.patch('/:id/events', requireUser, validateEventInput, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id)
        const newEvent = new Event({
          eventTitle: req.body.eventTitle,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          date: req.body.date,
          location: req.body.location,
          description: req.body.description,
          category: req.body.category,
          cost: req.body.cost
        })
        updateItinerary.events.push(newEvent)
        try{
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username profileImageUrl');
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


   // Creating livings
  router.patch('/:id/livings', requireUser, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id)
        const newLiving = new Living({
          livingTitle: req.body.livingTitle,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          location: req.body.location,
          description: req.body.description,
          cost: req.body.cost
        })
        updateItinerary.livings.push(newLiving)
        try{
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username profileImageUrl');
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


   // Creating transportations
  router.patch('/:id/transportations', requireUser, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id)
        const newTransportation = new Transportation({
          transportationTitle: req.body.transportationTitle,
          startLocation: req.body.startLocation,
          endLocation: req.body.endLocation,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          description: req.body.description,
          cost: req.body.cost
        })
        updateItinerary.transportations.push(newTransportation)
        try{
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username profileImageUrl');
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

  // Updating the meta data (title and description of the outermost itinerary object)
  router.patch('/:id', requireUser, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findByIdAndUpdate(req.params.id,
            { title: req.body.title, description: req.body.description, country: req.body.country }, { new: true })
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username profileImageUrl');
          return res.json(itinerary)
        }
        catch (err) {
            const error = new Error('Itinerary not found');
            error.statusCode = 404;
            error.errors = { message: "No itinerary found with that id" };
            return next(error);
        }
    })

    // This is the actual EDIT for the event
  router.patch('/:id/events/:eventsId', requireUser, validateEventInput, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id);
        const index = findObjById(updateItinerary.events, req.params.eventsId)
        if(index === undefined){
          const error = new Error('Event is not found');
          error.statusCode = 404;
          error.errors = { message: "No Event found with that id in the itinerary" };
          return next(error);
        }
        try{
          const updateEvent = updateItinerary.events[index]
          updateItinerary.events[index] = {...updateEvent,
            eventTitle: req.body.eventTitle,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            date: req.body.date,
            location: req.body.location,
            description: req.body.description,
            category: req.body.category,
            cost: req.body.cost};
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username profileImageUrl');
          return res.json(itinerary)
        } catch(err){
          next(err)
        }
    } catch (err) {
      const error = new Error('Itinerary not found');
      error.statusCode = 404;
      error.errors = { message: "No itinerary found with that id" };
      return next(error);
    }
});


// This is the actual EDIT for the transportation
router.patch('/:id/transportations/:transportationsId', requireUser, validateTransportationInput, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id);
        const index = findObjById(updateItinerary.transportations, req.params.transportationsId)
        if(index === undefined){
          const error = new Error('Event is not found');
          error.statusCode = 404;
          error.errors = { message: "No Event found with that id in the itinerary" };
          return next(error);
        }
        try{
          const updateTransportation = updateItinerary.transportations[index]
          updateItinerary.transportations[index] = {...updateTransportation,
            transportationTitle: req.body.transportationTitle,
            startLocation: req.body.startLocation,
            endLocation: req.body.endLocation,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            description: req.body.description,
            cost: req.body.cost };
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username profileImageUrl');
          return res.json(itinerary)
        } catch(err){
          next(err)
        }
    } catch (err) {
      const error = new Error('Itinerary not found');
      error.statusCode = 404;
      error.errors = { message: "No itinerary found with that id" };
      return next(error);
    }
});


// This is the actual EDIT for the living
router.patch('/:id/livings/:livingsId', requireUser, validateLivingInput, async (req, res, next) => {
    try {
        const updateItinerary = await Itinerary.findById(req.params.id);
        const index = findObjById(updateItinerary.livings, req.params.livingsId)
        if(index === undefined){
          const error = new Error('Living is not found');
          error.statusCode = 404;
          error.errors = { message: "No Living found with that id in the itinerary" };
          return next(error);
        }
        try{
          const updateLiving = updateItinerary.livings[index]
          updateItinerary.livings[index] = {...updateLiving,
            livingTitle: req.body.livingTitle,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            location: req.body.location,
            description: req.body.description,
            cost: req.body.cost };
          let itinerary = await updateItinerary.save()
          itinerary = await itinerary.populate('author', '_id username profileImageUrl');
          return res.json(itinerary)
        } catch(err){
          next(err)
        }
    } catch (err) {
      const error = new Error('Itinerary not found');
      error.statusCode = 404;
      error.errors = { message: "No itinerary found with that id" };
      return next(error);
    }
});


// Delete the ENTIRE itinerary
  router.delete('/:id', requireUser, async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            res.status(404).send({ error: "Itinerary doesn't exist!" });
            return;
        }

        await Itinerary.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: "An error occurred while deleting the itinerary." });
    }
});


// Deleting INDIVIDUAL events
router.patch('/:id/events/:eventsId/delete', requireUser, async (req, res, next) => {
    try {
        let itinerary = await Itinerary.findById(req.params.id);
        const index = findObjById(itinerary.events, req.params.eventsId)
        if(index === undefined){
          const error = new Error('Event is not found');
          error.statusCode = 404;
          error.errors = { message: "No Event found with that id in the itinerary" };
          return next(error);
        }
        itinerary.events.splice(index, 1)
        itinerary.save()
        itinerary = await itinerary.populate('author', '_id username profileImageUrl');
        return res.json(itinerary)
    }
    catch (err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = { message: "No itinerary found with that id" };
        return next(error);
    }
})


// Deleting INDIVIDUAL living
  router.patch('/:id/livings/:livingsId/delete', requireUser, async (req, res, next) => {
    try {
        let itinerary = await Itinerary.findById(req.params.id);
        const index = findObjById(itinerary.livings, req.params.livingsId)
        if(index === undefined){
          const error = new Error('Livings is not found');
          error.statusCode = 404;
          error.errors = { message: "No Livings found with that id in the itinerary" };
          return next(error);
        }
        itinerary.livings.splice(index, 1)
        itinerary.save()
        itinerary = await itinerary.populate('author', '_id username profileImageUrl');
        return res.json(itinerary)
    }
    catch (err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = { message: "No itinerary found with that id" };
        return next(error);
    }
})


// Deleting INDIVIDUAL transportation
router.patch('/:id/transportations/:transportationsId/delete', requireUser, async (req, res, next) => {
    try {
        let itinerary = await Itinerary.findById(req.params.id);
        const index = findObjById(itinerary.transportations, req.params.transportationsId)
        if(index === undefined){
          const error = new Error('transportations is not found');
          error.statusCode = 404;
          error.errors = { message: "No transportations found with that id in the itinerary" };
          return next(error);
        }
        itinerary.transportations.splice(index, 1)
        itinerary.save()
        itinerary = await itinerary.populate('author', '_id username profileImageUrl');
        return res.json(itinerary)
    }
    catch (err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = { message: "No itinerary found with that id" };
        return next(error);
    }
})

  module.exports = router;
