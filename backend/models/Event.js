const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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