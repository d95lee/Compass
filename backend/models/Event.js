const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventTitle: String,
    startTime: String,
    endTime: String,
    date: Date,
    location: String,
    description: String,
    category: String,
    cost: String
})

module.exports = mongoose.model('Event', eventSchema);