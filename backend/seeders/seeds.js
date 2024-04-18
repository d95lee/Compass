const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { faker } = require('@faker-js/faker');
const Itinerary = require("../models/Itinerary.js");
const Event = require("../models/Event.js");
const Transportation = require("../models/Transportation.js");
const Living = require("../models/Living.js");

NUM_USER = 10
const users = [];
demoUser = new User({
  username: 'demo-user',
  email: 'demo-user@appacademy.io',
  hashedPassword: bcrypt.hashSync('starwars', 10)
})
users.push(demoUser)


  for (let i = 1; i < NUM_USER; i++) {
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

const trip1 = new Itinerary({
  author: demoUser._id,
  title: "New York",
  description: "City Walk",
  country: "USA",
  events: [],
  transportations: [],
  livings: []
});

const event1 = new Event({
  eventTitle: "Time Square Walk",
  startTime: "12:00",
  endTime: "13:00",
  location: "Time Square",
  description: "Walk",
  cost: Math.floor(Math.random() * 10000),
  category: "Tour",
  date: faker.date.past()
});

const transportation1 = new Transportation({
  transportationTitle: 'AA airline',
  startLocation: 'SF',
  endLocation: 'NY',
  startTime: '01:00',
  endTime: '09:00',
  date: faker.date.past(),
  description: 'good airline',
  cost: Math.floor(Math.random() * 10000)
});

const living1 = new Living({
  livingTitle: 'Holiday Inn',
  startTime: '13:00',
  endTime: '14:00',
  startDate: faker.date.past(),
  endDate: faker.date.soon(),
  location: 'NY',
  description: 'a hotel',
  cost: Math.floor(Math.random() * 10000)
})

trip1.events.push(event1)
trip1.transportations.push(transportation1)
trip1.livings.push(living1)




itineraries.push(trip1)




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
  console.log("Resetting db and seeding users and itineraries...");

  User.collection.drop()
                 .then(() => Itinerary.collection.drop())
                 .then(() => User.insertMany(users))
                 .then(() => Itinerary.insertMany(itineraries))
                 .then(() => {
                   console.log("Done!");
                   mongoose.disconnect();
                 })
                 .catch(err => {
                   console.error(err.stack);
                   process.exit(1);
                 });
}

//code for seeding in terminal

//dotenv node seeders/seeds.js
