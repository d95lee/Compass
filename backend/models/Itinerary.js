const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./Event');
require('./Living');
require('./Transportation');

const eventSchema = mongoose.model('Event').schema
const transportationSchema = mongoose.model('Transportation').schema
const livingSchema = mongoose.model('Living').schema

const itinerarySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    events:[eventSchema],
    transportations:[transportationSchema],
    livings:[livingSchema],
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Itinerary', itinerarySchema);
