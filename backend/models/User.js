const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    bio: {
      type: String
    },
    profileImageUrl: {
      type: String,
      // required: true //temporarily commented out for testing
    },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);
