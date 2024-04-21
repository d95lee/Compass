const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');


const DEFAULT_PROFILE_IMAGE_URL = 'https://mern-travel.s3.us-west-1.amazonaws.com/joe.png'

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    initializeImages();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

// Initialize image fields in db
const initializeImages = async () => {
  console.log("Initializing profile avatars...");
  await User.updateMany({}, { profileImageUrl: DEFAULT_PROFILE_IMAGE_URL });
    
//   console.log("Initializing Tweet image URLs...");
//   await Tweet.updateMany({}, { imageUrls: [] });

  console.log("Done!");
  mongoose.disconnect();
}