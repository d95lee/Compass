const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { faker } = require('@faker-js/faker');
const Itinerary = require("../models/Itinerary.js");
const Event = require("../models/Event.js");
const Transportation = require("../models/Transportation.js");
const Living = require("../models/Living.js");


const users = [];

users.push(
    new User ({
      username: 'demo-user',
      email: 'demo-user@appacademy.io',
      hashedPassword: bcrypt.hashSync('starwars', 10)
    })
  )


  for (let i = 1; i < NUM_SEED_USERS; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    users.push(
      new User ({
        username: faker.internet.userName({ firstName, lastName }),
        email: faker.internet.email({ firstName, lastName }),
        hashedPassword: bcrypt.hashSync(faker.internet.password(), 10)
      })
    )
  }


const itineraries = []

// itineraries.push(
//     new Itinerary ({
//         author: users[Math.floor(Math.random() * NUM_SEED_USERS)]._id,
//         title: faker.hacker.phrase(),
//         description: faker.hacker.phrase()
        


// })) 


const seedData = {
    author: 'user_id', // Replace 'user_id' with the actual user ID
    title: 'Sample Itinerary',
    description: 'This is a sample itinerary',
    events: [
      {
        eventTitle: 'Sample Event 1',
        startTime: '12:00', // Example time in "HH:MM" format
        endTime: '14:00',   // Example time in "HH:MM" format
        location: 'Sample Location 1',
        description: 'Description of Sample Event 1',
        category: 'Sample Category',
        cost: 50
      },
      {
        eventTitle: 'Sample Event 2',
        startTime: '15:00', // Example time in "HH:MM" format
        endTime: '17:00',   // Example time in "HH:MM" format
        location: 'Sample Location 2',
        description: 'Description of Sample Event 2',
        category: 'Sample Category',
        cost: 70
      }
    ],
    transportations: [
      {
        transportationTitle: 'Flight',
        startLocation: 'City A',
        endLocation: 'City B',
        startTime: '08:00', // Example time in "HH:MM" format
        endTime: '10:00',   // Example time in "HH:MM" format
        description: 'Flight from City A to City B',
        cost: 200
      }
    ],
    livings: [
      {
        livingTitle: 'Hotel',
        startTime: '20:00', // Example time in "HH:MM" format
        endTime: '10:00',   // Example time in "HH:MM" format (next day)
        location: 'Sample Location',
        description: 'Stay at Sample Hotel',
        cost: 100
      }
    ]
  };



// Connect to database
  mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

// Reset and seed db
const insertSeeds = () => {
  console.log("Resetting db and seeding users and tweets...");

  User.collection.drop()
                 .then(() => Itinerary.collection.drop())
                 .then(() => User.insertMany(users))
                 .then(() => Itinerary.insertMany(tweets))
                 .then(() => {
                   console.log("Done!");
                   mongoose.disconnect();
                 })
                 .catch(err => {
                   console.error(err.stack);
                   process.exit(1);
                 });
}
