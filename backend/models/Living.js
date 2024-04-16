const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const livingSchema = new Schema({
    livingTitle: String,
    startTime: String,
    endTime: String,
    location: String,
    description: String,
    cost: Number
})

module.exports = mongoose.model('Living', livingSchema);