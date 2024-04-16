const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const validate = require('mongoose-validator');    // Need to import mongoose -validator to use this

// const timeValidator = [
//     validate({
//         validator: 'matches',
//         arguments: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
//         message: 'Time should be in format HH:MM'
//     })
// ];

// eventTitle: String,
// startTime: {
//     type: String, // was Date
//     validate: timeValidator
// },
// endTime: {
//     type: String, // was Date
//     validate: timeValidator
// },

const eventSchema = new Schema({
    eventTitle: String,
    startTime: String,
    endTime: String,
    location: String,
    description: String,
    category: String,
    cost: Number
})

module.exports = mongoose.model('Event', eventSchema);