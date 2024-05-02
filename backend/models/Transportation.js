const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportationSchema = new Schema({
    transportationTitle: String,
    startLocation: String,
    endLocation: String,
    startTime: String,
    endTime: String,
    startDate: Date, // corrected to startDate
    endDate: Date,
    description: String,
    cost: String
})

module.exports = mongoose.model('Transportation', transportationSchema);
