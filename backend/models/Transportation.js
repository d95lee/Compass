const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportationSchema = new Schema({
    transportationSchemaTitle: String,
    startLocation: String,
    endLocation: String,
    startTime: Date,
    endTime: Date, 
    description: String,
    cost: Number
})

module.exports = mongoose.model('Transportation', transportationSchema);