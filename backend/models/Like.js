const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    itinerary: {
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    }
})

module.exports = mongoose.model('Like', likeSchema);
