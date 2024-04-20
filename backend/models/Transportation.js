const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportationSchema = new Schema({
    transportationTitle: String,
    startLocation: String,
    endLocation: String,
    startTime: String,
    endTime: String,
    startdate: Date,
    endDate: Date,
    description: String,
    cost: Number
})

module.exports = mongoose.model('Transportation', transportationSchema);
