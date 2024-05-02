const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { faker } = require('@faker-js/faker');
const Itinerary = require("../models/Itinerary.js");
const Event = require("../models/Event.js");
const Transportation = require("../models/Transportation.js");
const Living = require("../models/Living.js");
const Like = require("../models/Like.js");

NUM_USER = 10
const users = [];
const itineraries = [];
const likes = [];

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



//1. create a user
demoUser = new User({
  username: 'demo-user',
  email: 'demo-user@appacademy.io',
  hashedPassword: bcrypt.hashSync('starwars', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/demo.jpg',
  bio: 'I like traveling and telling it to my friends',
  likes: []
});

//2. create itinerary

const trip1 = new Itinerary({
  author: demoUser._id,
  title: "New York",
  description: "City Walk",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/new-york.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 34
});
// 3. create events in itinerary
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
//4. create transporataions in itineraray
const transportation1 = new Transportation({
  transportationTitle: 'AA airline',
  startLocation: 'SF',
  endLocation: 'NY',
  startTime: '01:00',
  endTime: '09:00',
  startDate: faker.date.past(),
  endDate: faker.date.future(),
  description: 'good airline',
  cost: Math.floor(Math.random() * 10000)
});
//5. create living in intinerary
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

//6. push events, transportations, livings in to the itinerary created accordingly

trip1.events.push(event1)
trip1.transportations.push(transportation1)
trip1.livings.push(living1)

// 7. create like for itinerary
const like1 = new Like({
  user: demoUser,
  itinerary: trip1
})
// 8. update likes column in both user and itinerary
trip1.likes += 1
demoUser.likes.push(like1)

//9. push like, user, itinerary into the array accordingly

likes.push(like1)
users.push(demoUser)
itineraries.push(trip1)



// 2. create itinerary
const demoUser_itinerary = new Itinerary({
  author: demoUser._id,
  title: "DemoUser's Adventure in Paris",
  description: "Vacation to see the Eiffel Tower!",
  country: "France",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/paris.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 74 // Initialize likes to 0
});

// 3. create events for DemoUser's Paris trip
const demoUser_event1 = new Event({
  eventTitle: "Arrival in Paris",
  startTime: "12:00",
  endTime: "15:00",
  location: "Charles de Gaulle Airport",
  description: "Arrive in Paris and kick off your trip to the City of Light. Explore the iconic landmarks, indulge in French cuisine, and immerse yourself in the Parisian atmosphere.",
  cost: 0,
  category: "Travel",
  date: "03-21-2025"
});

const demoUser_event2 = new Event({
  eventTitle: "Visit to Louvre Museum",
  startTime: "10:00",
  endTime: "14:00",
  location: "Louvre Museum, Paris",
  description: "Explore the world-famous Louvre Museum, home to thousands of artworks including the Mona Lisa and the Venus de Milo. Dive into the rich history of art and culture.",
  cost: 20,
  category: "Sightseeing",
  date: "03-22-2025"
});

const demoUser_event3 = new Event({
  eventTitle: "Eiffel Tower Tour",
  startTime: "15:00",
  endTime: "18:00",
  location: "Eiffel Tower, Paris",
  description: "Ascend the iconic Eiffel Tower for panoramic views of Paris. Capture breathtaking photos, admire the city skyline, and experience the magic of the City of Love.",
  cost: 30,
  category: "Sightseeing",
  date: "03-23-2025"
});

const demoUser_event4 = new Event({
  eventTitle: "Seine River Cruise",
  startTime: "11:00",
  endTime: "13:00",
  location: "Seine River, Paris",
  description: "Embark on a scenic cruise along the Seine River. Sail past historic landmarks such as Notre-Dame Cathedral and enjoy the picturesque views of Parisian architecture.",
  cost: 40,
  category: "Sightseeing",
  date: "03-24-2025"
});

const demoUser_event5 = new Event({
  eventTitle: "French Cooking Class",
  startTime: "09:00",
  endTime: "12:00",
  location: "Le Cordon Bleu, Paris",
  description: "Learn the art of French cuisine in a cooking class at Le Cordon Bleu. Master classic French recipes and indulge in the flavors of French gastronomy.",
  cost: 50,
  category: "Culinary",
  date: "03-25-2025"
});

const demoUser_event6 = new Event({
  eventTitle: "Shopping on Champs-Élysées",
  startTime: "14:00",
  endTime: "17:00",
  location: "Champs-Élysées, Paris",
  description: "Shop till you drop on the famous Champs-Élysées boulevard. Explore luxury boutiques, flagship stores, and trendy cafes along one of the most famous avenues in the world.",
  cost: 100,
  category: "Shopping",
  date: "03-26-2025"
});

const demoUser_event7 = new Event({
  eventTitle: "Departure from Paris",
  startTime: "09:00",
  endTime: "12:00",
  location: "Charles de Gaulle Airport",
  description: "Bid farewell to Paris as you depart from Charles de Gaulle Airport. Take with you unforgettable memories of your adventure in the City of Light!",
  cost: 0,
  category: "Travel",
  date: "03-28-2025"
});

// 4. create transportations for DemoUser's Paris trip
const demoUser_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer (Arrival)',
  startLocation: 'Charles de Gaulle Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "03-21-2025",
  endDate: "03-21-2025",
  description: 'Transfer from Charles de Gaulle Airport to your hotel in Paris.',
  cost: 50
});

const demoUser_transportation2 = new Transportation({
  transportationTitle: 'City Tour Shuttle',
  startLocation: 'Hotel',
  endLocation: 'Various Locations',
  startTime: '10:00',
  endTime: '17:00',
  startDate: "03-22-2025",
  endDate: "03-26-2025",
  description: 'Enjoy a convenient city tour shuttle service to explore various attractions and landmarks in Paris.',
  cost: 100
});

const demoUser_transportation3 = new Transportation({
  transportationTitle: 'French Cooking Class Shuttle',
  startLocation: 'Hotel',
  endLocation: 'Le Cordon Bleu',
  startTime: '09:00',
  endTime: '12:00',
  startDate: "03-25-2025",
  endDate: "03-25-2025",
  description: 'Shuttle service to and from Le Cordon Bleu for your French cooking class.',
  cost: 20
});

const demoUser_transportation4 = new Transportation({
  transportationTitle: 'Airport Transfer (Departure)',
  startLocation: 'Hotel',
  endLocation: 'Charles de Gaulle Airport',
  startTime: '09:00',
  endTime: '12:00',
  startDate: "03-28-2025",
  endDate: "03-28-2025",
  description: 'Transfer from your hotel in Paris to Charles de Gaulle Airport for your departure.',
  cost: 50
});

// 5. create livings for DemoUser's Paris trip
const demoUser_living1 = new Living({
  livingTitle: 'Luxury Hotel in Paris',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "03-21-2025",
  endDate: "03-28-2025",
  location: 'Paris',
  description: 'Stay in a luxury hotel in the heart of Paris, offering exquisite accommodations and exceptional service amidst the charm of the City of Light.',
  cost: 1200
});

// 6. push events, transportations, livings into DemoUser's itinerary accordingly
demoUser_itinerary.events.push(demoUser_event1, demoUser_event2, demoUser_event3, demoUser_event4, demoUser_event5, demoUser_event6, demoUser_event7);
demoUser_itinerary.transportations.push(demoUser_transportation1, demoUser_transportation2, demoUser_transportation3, demoUser_transportation4);
demoUser_itinerary.livings.push(demoUser_living1);

// 7. create like for itinerary
const like2 = new Like({
  user: demoUser,
  itinerary: demoUser_itinerary
})
// 8. update likes column in both user and itinerary
demoUser_itinerary.likes += 1
demoUser.likes.push(like2)

//9. push like, user, itinerary into the array accordingly

likes.push(like2)
itineraries.push(demoUser_itinerary)





// CAROLINE'S ACCOUNT

//1. create a user
caroline = new User({
  username: 'caroline',
  email: 'caroline@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/caroline.jpg',
  bio: 'I love nail polish!!',
  likes: []
});

//2. create itinerary

const caroline_itinerary = new Itinerary({
  author: caroline._id,
  title: "New York",
  description: "4 day trip to NYC",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/central-park.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 23
});
// 3. create events in itinerary
const caroline_event1 = new Event({
  eventTitle: "Visit Central Park",
  startTime: "12:00",
  endTime: "13:00",
  location: "Central Park",
  description: "explore central park",
  cost: 0,
  category: "Tour",
  date: "02-01-2024"
});

const caroline_event2 = new Event({
  eventTitle: "Met Tour",
  startTime: "13:30",
  endTime: "16:00",
  location: "Metropolitan Museum of Art",
  description: "visit the Met",
  cost: 30,
  category: "Tour",
  date: "02/01/2024"
});

const caroline_event3 = new Event({
  eventTitle: "Fifth Avenue Shopping",
  startTime: "13:00",
  endTime: "17:00",
  location: "Fifth Avenue",
  description: "walk along Fifth Avenue to browse and shop",
  cost: 0,
  category: "Shopping",
  date: "02-02-2024"
});

const caroline_event4 = new Event({
  eventTitle: "Librae Bakery",
  startTime: "10:00",
  endTime: "11:30",
  location: "35 Cooper Sq, New York, NY 10003",
  description: "check out croissants/pastries and get coffee",
  cost: 15,
  category: "Food",
  date: "02-02-2024"
});

const caroline_event5 = new Event({
  eventTitle: "La Colombe",
  startTime: "18:00",
  endTime: "18:30",
  location: "75 Vandam St, New York, NY 10013",
  description: "Coffee - get draft latte",
  cost: 5,
  category: "Food",
  date: "02-03-2024"
});

const caroline_event6 = new Event({
  eventTitle: "Visit Empire State Building",
  startTime: "10:00",
  endTime: "11:00",
  location: "20 W 34th St., New York, NY 10001",
  description: "Tour Empire state building",
  cost: 51,
  category: "Tour",
  date: "02-03-2024"
});

const caroline_event7 = new Event({
  eventTitle: "Ten Thousand Coffee",
  startTime: "10:00",
  endTime: "11:00",
  location: "750 3rd Ave, New York, NY 10017",
  description: "Coffee - einspanner!!",
  cost: 6,
  category: "Food",
  date: "02-04-2024"
});

const caroline_event8 = new Event({
  eventTitle: "Liberty Bagels Midtown",
  startTime: "09:00",
  endTime: "10:00",
  location: "260 W 35th St, New York, NY 10001",
  description: "get bagels, try out rainbow bagel",
  cost: 15,
  category: "Food",
  date: "02-04-2024"
});

//4. create transporataions in itineraray
const caroline_transportation1 = new Transportation({
  transportationTitle: 'Flight from SF to NYC - test',
  startLocation: 'SFO Airport',
  endLocation: 'JFK Airport',
  startTime: '06:00',
  endTime: '12:00',
  startDate: "02-01-2024",
  endDate: "02-01-2024",
  description: 'flight to NYC',
  cost: 300
});

const caroline_transportation2 = new Transportation({
  transportationTitle: 'Flight from NYC to SF - new',
  startLocation: 'JFK Airport',
  endLocation: 'SFO Airport',
  startTime: '07:00',
  endTime: '11:00',
  startDate: "02-01-2024",
  endDate: "02-01-2024",
  description: 'flight from NYC to SF',
  cost: 400
});


const caroline_living1 = new Living({
  livingTitle: 'Madison Hotel',
  startTime: '12:00',
  endTime: '11:00',
  startDate: "02-04-2024",
  endDate: "02-04-2024",
  location: 'NYC',
  description: 'hotel for NYC',
  cost: 800
});
//6. push events, transportations, livings in to the itinerary created accordingly

caroline_itinerary.events.push(
  caroline_event1,
  caroline_event2,
  caroline_event3,
  caroline_event4,
  caroline_event5,
  caroline_event6,
  caroline_event7,
  caroline_event8, )
caroline_itinerary.transportations.push(caroline_transportation1, caroline_transportation2)
caroline_itinerary.livings.push(caroline_living1)

// 7. create like for itinerary
const caroline_like1 = new Like({
  user: demoUser,
  itinerary: caroline_itinerary
})
// 8. update likes column in both user and itinerary
caroline_like1.likes += 1
demoUser.likes.push(caroline_like1)

//9. push like, user, itinerary into the array accordingly

likes.push(caroline_like1)
users.push(caroline)
itineraries.push(caroline_itinerary)







// DARREN'S ACCOUNT

//1. create a user
darren = new User({
  username: 'darren',
  email: 'darren@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/darren.jpg',
  bio: 'I love teaching, I just wish these guys answered more questions during lecture... random fact: some people call me the goat',
  likes: []
});

//2. create itinerary

const darren_itinerary = new Itinerary({
  author: darren._id,
  title: "Hawaii",
  description: "3 day trip to see the turtles swim",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/hawaii.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 15
});
// 3. create events in itinerary
const darren_event1 = new Event({
  eventTitle: "Turtle Whispering Workshop",
  startTime: "10:00",
  endTime: "11:30",
  location: "Turtle Beach",
  description: "Learn the ancient art of communicating with turtles and master the art of turtle yoga.",
  cost: 0,
  category: "Workshop",
  date: "02-01-2024"
});


//4. create transporataions in itineraray
const darren_event2 = new Event({
  eventTitle: "Hawaiian Luau Extravaganza",
  startTime: "18:00",
  endTime: "23:00",
  location: "Beachside Resort",
  description: "Join Ayce for an epic beachside luau filled with hula dancing, fire performances, and unlimited tropical cocktails!",
  cost: 50,
  category: "Party",
  date: "02-02-2024"
});

const darren_event3 = new Event({
  eventTitle: "Remote Work on Discord",
  startTime: "10:00",
  endTime: "12:00",
  location: "Hawaiian Beach Hut",
  description: "Despite being on vacation in Hawaii, Darren logs into Discord to catch up on work tasks and attend virtual meetings. Don't forget your laptop and sunscreen!",
  cost: 0,
  category: "Work",
  date: "02-03-2024"
});

const darren_transportation1 = new Transportation({
  transportationTitle: 'Flight from SF to NYC - Reality Check',
  startLocation: 'San Francisco International Airport (SFO)',
  endLocation: 'John F. Kennedy International Airport (JFK)',
  startTime: '06:00',
  endTime: '12:00',
  startDate: "02-01-2024",
  endDate: "02-01-2024",
  description: 'Experience the joy of early morning travel as you navigate through the bustling terminals of SFO, endure the security line saga, and eventually board a metal tube hurtling through the skies to the Big Apple. Complimentary peanuts and a lukewarm beverage included.',
  cost: 300
});

const darren_living1 = new Living({
  livingTitle: 'Coconut Palace Resort',
  startTime: '12:00',
  endTime: '11:00',
  startDate: "02-01-2024",
  endDate: "02-04-2024",
  location: 'Hawaii, USA',
  description: 'Luxurious beachfront hotel resembling a giant coconut, complete with hammock-shaped beds and pineapple-shaped swimming pools. Don\'t be surprised if you find Darren napping in a coconut tree!',
  cost: 800
});
//6. push events, transportations, livings in to the itinerary created accordingly

darren_itinerary.events.push(
  darren_event1,
  darren_event2,
  darren_event3
  )
darren_itinerary.transportations.push(darren_transportation1)
darren_itinerary.livings.push(darren_living1)

// 7. create like for itinerary
const darren_like1 = new Like({
  user: caroline,
  itinerary: darren_itinerary
})
// 8. update likes column in both user and itinerary
darren_like1.likes += 1
caroline.likes.push(darren_like1)

//9. push like, user, itinerary into the array accordingly

likes.push(darren_like1)
users.push(darren)
itineraries.push(darren_itinerary)





// AYCE'S ACCOUNT

//1. create a user
ayce = new User({
  username: 'ayce',
  email: 'ayce@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/ayce.jpg',
  bio: 'I love getting Kombucha tea everytime I go to the store',
  likes: []
});

//2. create itinerary

const ayce_itinerary = new Itinerary({
  author: ayce._id,
  title: "Ayce's Adventure in Washington",
  description: "A 5-day exploration of the nation's capital with Ayce, filled with history, culture, and a touch of whimsy.",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/washington.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 31
});
// 3. create events in itinerary
const ayce_event1 = new Event({
  eventTitle: "Capitol Hill Tour",
  startTime: "09:00",
  endTime: "12:00",
  location: "Washington, D.C.",
  description: "Embark on a guided tour of Capitol Hill, exploring iconic landmarks like the United States Capitol and the Library of Congress. Learn about the rich history and political significance of these institutions.",
  cost: 0,
  category: "Sightseeing",
  date: "02-06-2024"
});

const ayce_event2 = new Event({
  eventTitle: "Cherry Blossom Picnic at Tidal Basin",
  startTime: "12:00",
  endTime: "15:00",
  location: "Tidal Basin",
  description: "Enjoy a picturesque picnic amidst the blooming cherry blossoms at Tidal Basin. Capture stunning photos, relax under the shade of cherry trees, and savor delicious snacks.",
  cost: 20,
  category: "Outdoor",
  date: "02-07-2024"
});

const ayce_event3 = new Event({
  eventTitle: "White House Photo Op",
  startTime: "10:00",
  endTime: "11:00",
  location: "White House",
  description: "Strike a pose outside the iconic White House and snap some memorable photos. Who knows, you might even catch a glimpse of the President!",
  cost: 0,
  category: "Sightseeing",
  date: "02-08-2024"
});

const ayce_transportation1 = new Transportation({
  transportationTitle: 'Flight from Honolulu to Washington',
  startLocation: 'Honolulu International Airport (HNL)',
  endLocation: 'Washington Dulles International Airport (IAD)',
  startTime: '08:00',
  endTime: '16:00',
  startDate: "02-05-2024",
  endDate: "02-05-2024",
  description: 'Embark on a cross-country journey from the sunny shores of Honolulu to the historic streets of Washington D.C. Buckle up for a whirlwind adventure!',
  cost: 600
});

const ayce_living1 = new Living({
  livingTitle: 'Historic Hotel in Downtown Washington',
  startTime: '15:00',
  endTime: '11:00',
  startDate: "02-05-2024",
  endDate: "02-09-2024",
  location: 'Washington, D.C.',
  description: 'Stay in a charming historic hotel located in the heart of downtown Washington, offering easy access to iconic attractions and vibrant neighborhoods. Prepare for a cozy and memorable stay!',
  cost: 1000
});
//6. push events, transportations, livings in to the itinerary created accordingly

ayce_itinerary.events.push(
  ayce_event1,
  ayce_event2,
  ayce_event3
  )
ayce_itinerary.transportations.push(ayce_transportation1)
ayce_itinerary.livings.push(ayce_living1)

// 7. create like for itinerary
const ayce_like1 = new Like({
  user: caroline,
  itinerary: ayce_itinerary
})
// 8. update likes column in both user and itinerary
ayce_like1.likes += 1
caroline.likes.push(ayce_like1)

//9. push like, user, itinerary into the array accordingly

likes.push(ayce_like1)
users.push(ayce)
itineraries.push(ayce_itinerary)






// DAVID'S ACCOUNT

//1. create a user
david = new User({
  username: 'david',
  email: 'david@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/david.jpg',
  bio: 'It\'s graduation time!',
  likes: []
});

//2. create itinerary

const david_itinerary = new Itinerary({
  author: david._id,
  title: "First National Park, Yosemite Trip",
  description: "2 day trip to Yosemite National Park",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/yosemite.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 192
});
// 3. create events in itinerary
const david_event1 = new Event({
  eventTitle: "Vernal and Nevada Falls via Mist Trail",
  startTime: "9:00",
  endTime: "1:00",
  location: "Yosemite",
  description: "Hike up and see the famous waterfall on Mist Trail. Take some pictures at the top!",
  cost: 0,
  category: "Hike",
  date: "10-01-2023"
});


//4. create transporataions in itineraray
const david_event2 = new Event({
  eventTitle: "Glacier Point",
  startTime: "18:00",
  endTime: "20:00",
  location: "Yosemite",
  description: "Stargazing and staring at El Capitan",
  cost: 0,
  category: "Hike",
  date: "10-01-2023"
});

const david_event3 = new Event({
  eventTitle: "Tunnel View Sunrise",
  startTime: "6:00",
  endTime: "8:00",
  location: "Yosemite",
  description: "Watch the sunrise early in the morning with the best view in the world.",
  cost: 0,
  category: "Hike",
  date: "10-02-2023"
});

const david_transportation1 = new Transportation({
  transportationTitle: 'Drive',
  startLocation: 'San Jose',
  endLocation: 'Yosemite',
  startTime: '06:00',
  endTime: '10:00',
  startDate: "10-01-2023",
  endDate: "10-03-2023",
  description: 'Wake up early in the morning to drive all the way from San Jose to Yosemite National Park',
  cost: 300
});

const david_living1 = new Living({
  livingTitle: 'AirBnb',
  startTime: '3:00',
  endTime: '3:00',
  startDate: "10012023",
  endDate: "10-03-2023",
  location: 'Yosemite',
  description: 'AirBnb that was SUPER expensive, but we only ended up using to sleep for a few hours...',
  cost: 500
});
//6. push events, transportations, livings in to the itinerary created accordingly

david_itinerary.events.push(
  david_event1,
  david_event2,
  david_event3
  )
david_itinerary.transportations.push(david_transportation1)
david_itinerary.livings.push(david_living1)

// 7. create like for itinerary
const david_like1 = new Like({
  user: darren,
  itinerary: david_itinerary
})
// 8. update likes column in both user and itinerary
david_like1.likes += 1
darren.likes.push(david_like1)

//9. push like, user, itinerary into the array accordingly

likes.push(david_like1)
users.push(david)
itineraries.push(david_itinerary)







// JERRY'S ACCOUNT

//1. create a user
jerry = new User({
  username: 'jerry',
  email: 'jerry@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/jerry.png',
  bio: 'I work hard when I work, but I sure do love my breaks!',
  likes: []
});

//2. create itinerary

const jerry_itinerary = new Itinerary({
  author: jerry._id,
  title: "Russian Adventure - Moscow & St. Petersburg",
  description: "7 day trip to explore the wonders of Russia, from the iconic landmarks of Moscow to the cultural riches of St. Petersburg.",
  country: "Russia",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/russia.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 46
});

const jerry_event1 = new Event({
  eventTitle: "Red Square and Kremlin Tour",
  startTime: "9:00",
  endTime: "13:00",
  location: "Moscow",
  description: "Discover the historical heart of Moscow with a guided tour of the iconic Red Square and the grandeur of the Kremlin. Don't forget to snap some photos!",
  cost: 0,
  category: "Sightseeing",
  date: "11-05-2024"
});

const jerry_event2 = new Event({
  eventTitle: "Hermitage Museum Visit",
  startTime: "10:00",
  endTime: "15:00",
  location: "St. Petersburg",
  description: "Immerse yourself in art and history at the magnificent Hermitage Museum, home to one of the world's largest and most impressive collections.",
  cost: 0,
  category: "Culture",
  date: "11-07-2024"
});

const jerry_transportation1 = new Transportation({
  transportationTitle: 'Flight',
  startLocation: 'San Francisco',
  endLocation: 'Moscow',
  startTime: '12:00',
  endTime: '10:00',
  startDate: "11-05-2024",
  endDate: "11-06-2024",
  description: 'Embark on an epic journey from San Francisco to Moscow, crossing multiple time zones and experiencing the thrill of international travel.',
  cost: 800
});

const jerry_living1 = new Living({
  livingTitle: 'Hotel Kremlin',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "11-05-2024",
  endDate: "11-17-2024",
  location: 'Moscow',
  description: 'Stay in the heart of Moscow at the luxurious Hotel Kremlin, offering unparalleled views of Red Square and the Kremlin walls. Indulge in Russian hospitality and soak in the city\'s vibrant atmosphere.',
  cost: 1200
});
//6. push events, transportations, livings in to the itinerary created accordingly

jerry_itinerary.events.push(
  jerry_event1,
  jerry_event2
  )
jerry_itinerary.transportations.push(jerry_transportation1)
jerry_itinerary.livings.push(jerry_living1)

// 7. create like for itinerary
const jerry_like1 = new Like({
  user: david,
  itinerary: jerry_itinerary
})
// 8. update likes column in both user and itinerary
jerry_like1.likes += 1
david.likes.push(jerry_like1)

//9. push like, user, itinerary into the array accordingly

likes.push(jerry_like1)
users.push(jerry)
itineraries.push(jerry_itinerary)







// JHON'S ACCOUNT

//1. create a user
jhon = new User({
  username: 'jhon',
  email: 'jhon@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/jhon.jpg',
  bio: 'I may be a menace, but I like making people laugh!',
  likes: []
});

//2. create itinerary

const jhon_itinerary = new Itinerary({
  author: jhon._id,
  title: "Colombian Family Reunion - Bogotá & Medellín",
  description: "7 day trip to reunite with family in Colombia, exploring the vibrant cities of Bogotá and Medellín while embarking on thrilling adventures.",
  country: "Colombia",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/colombia.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 26
});

const jhon_event1 = new Event({
  eventTitle: "City Tour of Bogotá",
  startTime: "9:00",
  endTime: "14:00",
  location: "Bogotá",
  description: "Embark on a guided city tour of Bogotá, exploring its historic neighborhoods, bustling markets, and vibrant street art scene.",
  cost: 0,
  category: "Sightseeing",
  date: "07-01-2024"
});

const jhon_event2 = new Event({
  eventTitle: "Coffee Farm Adventure",
  startTime: "8:00",
  endTime: "17:00",
  location: "Outside Bogotá",
  description: "Venture into the Colombian countryside for an exhilarating coffee farm adventure. Learn about the coffee-making process, hike through lush plantations, and savor the freshest brews.",
  cost: 50,
  category: "Adventure",
  date: "07-02-2024"
});

const jhon_event3 = new Event({
  eventTitle: "Paragliding Over Medellín",
  startTime: "10:00",
  endTime: "12:00",
  location: "Medellín",
  description: "Soar above the picturesque landscapes of Medellín on an unforgettable paragliding experience. Feel the rush of adrenaline as you glide through the sky with stunning views below.",
  cost: 80,
  category: "Adventure",
  date: "07-03-2024"
});

const jhon_transportation1 = new Transportation({
  transportationTitle: 'Flight',
  startLocation: 'San Francisco',
  endLocation: 'Bogotá',
  startTime: '12:00',
  endTime: '10:00',
  startDate: "07-01-2024",
  endDate: "07-02-2024",
  description: 'Embark on a flight from San Francisco to Bogotá, ready to embark on an unforgettable family reunion adventure in Colombia.',
  cost: 1000
});

const jhon_living1 = new Living({
  livingTitle: 'Family Home in Bogotá',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "07-01-2024",
  endDate: "07-07-2024",
  location: 'Bogotá',
  description: 'Stay with family in Bogotá, sharing stories, laughter, and delicious Colombian meals. Experience the warmth and hospitality of Colombian family life.',
  cost: 0
});
//6. push events, transportations, livings in to the itinerary created accordingly

jhon_itinerary.events.push(
  jhon_event1,
  jhon_event2,
  jhon_event3
  )
jhon_itinerary.transportations.push(jhon_transportation1)
jhon_itinerary.livings.push(jhon_living1)

// 7. create like for itinerary
const jhon_like1 = new Like({
  user: jerry,
  itinerary: jhon_itinerary
})
// 8. update likes column in both user and itinerary
jhon_like1.likes += 1
jerry.likes.push(jhon_like1)

//9. push like, user, itinerary into the array accordingly

likes.push(jhon_like1)
users.push(jhon)
itineraries.push(jhon_itinerary)




// KEVIN HART'S ACCOUNT

//1. create a user
kevin = new User({
  username: 'kevin',
  email: 'kevin@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/kevin.jpg',
  bio: 'Success isn\t supposed to happen, no matter how hard you work. There\'s no guarantee you\'re going to succeed. There\'s nothing set in stone.',
  likes: []
});

//2. create itinerary

const kevin_itinerary = new Itinerary({
  author: kevin._id,
  title: "Kevin Hart's Wild Ride in Las Vegas",
  description: "5-day adventure in Sin City with Kevin Hart, where laughter, chaos, and unexpected escapades await around every corner.",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/las-vegas.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 692
});

const kevin_event1 = new Event({
  eventTitle: "Stand-up Comedy Show at Caesars Palace",
  startTime: "20:00",
  endTime: "22:00",
  location: "Caesars Palace",
  description: "Catch Kevin Hart live on stage for a hilarious stand-up comedy show at Caesars Palace. Get ready for non-stop laughter and unforgettable moments!",
  cost: 0,
  category: "Entertainment",
  date: "12-01-2024"
});

const kevin_event2 = new Event({
  eventTitle: "High Roller Observation Wheel Ride",
  startTime: "10:00",
  endTime: "12:00",
  location: "High Roller Observation Wheel",
  description: "Join Kevin Hart for a ride on the High Roller Observation Wheel, where the view is as dizzying as the jokes. Hold onto your seats!",
  cost: 50,
  category: "Adventure",
  date: "12-02-2024"
});

const kevin_event3 = new Event({
  eventTitle: "Blackjack Tournament at Bellagio",
  startTime: "18:00",
  endTime: "20:00",
  location: "Bellagio Casino",
  description: "Compete alongside Kevin Hart in a high-stakes blackjack tournament at the Bellagio. Will luck be on your side, or will Kevin's antics distract you?",
  cost: 100,
  category: "Gaming",
  date: "12-04-2024"
});

const kevin_transportation1 = new Transportation({
  transportationTitle: 'Private Jet',
  startLocation: 'Los Angeles',
  endLocation: 'Las Vegas',
  startTime: '12:00',
  endTime: '14:00',
  startDate: "12-01-024",
  endDate: "12-05-2024",
  description: 'Take a private jet from Los Angeles to Las Vegas, because why not travel in style when you\'re with Kevin Hart?',
  cost: 5000
});

const kevin_living1 = new Living({
  livingTitle: 'Luxury Suite at The Venetian',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "12-01-2024",
  endDate: "12-05-2024",
  location: 'The Venetian Hotel',
  description: 'Stay in a lavish luxury suite at The Venetian, where Kevin Hart\'s antics are sure to make your stay unforgettable. Prepare for a comedy show in your room!',
  cost: 1500
});
//6. push events, transportations, livings in to the itinerary created accordingly

kevin_itinerary.events.push(
  kevin_event1,
  kevin_event2,
  kevin_event3
  )
kevin_itinerary.transportations.push(kevin_transportation1)
kevin_itinerary.livings.push(kevin_living1)

// 7. create like for itinerary
const kevin_like1 = new Like({
  user: jerry,
  itinerary: kevin_itinerary
})

const kevin_like2 = new Like({
  user: david,
  itinerary: kevin_itinerary
})
// 8. update likes column in both user and itinerary
kevin_like1.likes += 2
david.likes.push(kevin_like2)
jerry.likes.push(kevin_like1)


//9. push like, user, itinerary into the array accordingly

likes.push(kevin_like1, kevin_like2)
users.push(kevin)
itineraries.push(kevin_itinerary)





// JUSTIN BIEBER'S ACCOUNT

//1. create a user
justin = new User({
  username: 'justin',
  email: 'justin@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/justin.jpg',
  bio: 'Listen to my new album!',
  likes: []
});

//2. create itinerary

const justin_itinerary = new Itinerary({
  author: justin._id,
  title: "Justin Bieber's Japanese Adventure",
  description: "10-day vacation in the Land of the Rising Sun with Justin Bieber, where he'll immerse himself in the culture, cuisine, and beauty of Japan.",
  country: "Japan",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/japan.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 807
});

const justin_event1 = new Event({
  eventTitle: "Sushi Making Class",
  startTime: "11:00",
  endTime: "13:00",
  location: "Tokyo",
  description: "Join Justin Bieber for a hands-on sushi making class in Tokyo. Learn the art of sushi rolling from expert chefs and indulge in your delicious creations!",
  cost: 50,
  category: "Culinary",
  date: "04-04-2024"
});

const justin_event2 = new Event({
  eventTitle: "Sumo Wrestling Match",
  startTime: "15:00",
  endTime: "17:00",
  location: "Ryogoku Kokugikan, Tokyo",
  description: "Experience the excitement of a sumo wrestling match with Justin Bieber at Ryogoku Kokugikan. Cheer for your favorite wrestlers and witness the ancient sport in action!",
  cost: 80,
  category: "Sports",
  date: "04-06-2024"
});

const justin_transportation1 = new Transportation({
  transportationTitle: 'Bullet Train',
  startLocation: 'Tokyo',
  endLocation: 'Kyoto',
  startTime: '10:00',
  endTime: '12:00',
  startDate: "04-04-2024",
  endDate: "04-05-2024",
  description: 'Hop on a bullet train from Tokyo to Kyoto, enjoying the breathtaking scenery of Japan\'s countryside along the way.',
  cost: 100
});

const justin_living1 = new Living({
  livingTitle: 'Traditional Ryokan in Kyoto',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "004-04-2024",
  endDate: "04-14-2024",
  location: 'Kyoto',
  description: 'Stay in a charming traditional ryokan in Kyoto, where Justin Bieber will experience the tranquility of Japanese hospitality and enjoy relaxing hot spring baths.',
  cost: 200
});
//6. push events, transportations, livings in to the itinerary created accordingly

justin_itinerary.events.push(
  justin_event1,
  justin_event2,
  )
justin_itinerary.transportations.push(justin_transportation1)
justin_itinerary.livings.push(justin_living1)

// 7. create like for itinerary
const justin_like1 = new Like({
  user: jerry,
  itinerary: justin_itinerary
})
// 8. update likes column in both user and itinerary
justin_like1.likes += 1
jerry.likes.push(justin_like1)



//9. push like, user, itinerary into the array accordingly

likes.push(justin_like1)
users.push(justin)
itineraries.push(justin_itinerary)






// STEPH CURRY'S ACCOUNT

//1. create a user
steph = new User({
  username: 'steph',
  email: 'steph@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/steph.jpg',
  bio: 'I can\'t believe we didn\'t make it to the playoffs this year... ',
  likes: []
});

//2. create itinerary

const steph_itinerary = new Itinerary({
  author: steph._id,
  title: "Steph Curry's Hoops Journey in China",
  description: "10-day basketball adventure in the Far East with Steph Curry, where he'll shoot hoops, interact with fans, and experience the rich culture of China.",
  country: "China",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/china.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 2812
});

const steph_event1 = new Event({
  eventTitle: "Basketball Clinic in Shanghai",
  startTime: "10:00",
  endTime: "12:00",
  location: "Shanghai",
  description: "Join Steph Curry for an exclusive basketball clinic in Shanghai. Learn shooting techniques, dribbling skills, and teamwork strategies from the NBA superstar himself!",
  cost: 0,
  category: "Sports",
  date: "10-01-2024"
});

const steph_event2 = new Event({
  eventTitle: "3-Point Shootout at Beijing Stadium",
  startTime: "15:00",
  endTime: "17:00",
  location: "Beijing",
  description: "Witness Steph Curry showcase his sharpshooting skills in a thrilling 3-point shootout competition at Beijing Stadium. Get ready for some long-range excitement!",
  cost: 50,
  category: "Sports",
  date: "10-03-2024"
});

const steph_transportation1 = new Transportation({
  transportationTitle: 'High-Speed Train',
  startLocation: 'Shanghai',
  endLocation: 'Beijing',
  startTime: '08:00',
  endTime: '12:00',
  startDate: "10-01-2024",
  endDate: "10-03-2024",
  description: 'Travel from Shanghai to Beijing on a high-speed train, enjoying the scenic views and comfortable ride across China.',
  cost: 150
});

const steph_living1 = new Living({
  livingTitle: 'Luxury Hotel in Beijing',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "10-01-2024",
  endDate: "10-08-2024",
  location: 'Beijing',
  description: 'Stay in a luxurious hotel in Beijing, where Steph Curry will relax and recharge after thrilling basketball events. Enjoy top-notch amenities and impeccable service!',
  cost: 300
});
//6. push events, transportations, livings in to the itinerary created accordingly

steph_itinerary.events.push(
  steph_event1,
  steph_event2,
  )
steph_itinerary.transportations.push(steph_transportation1)
steph_itinerary.livings.push(steph_living1)

// 7. create like for itinerary
const steph_like1 = new Like({
  user: jerry,
  itinerary: steph_itinerary
})
// 8. update likes column in both user and itinerary
steph_like1.likes += 1
jerry.likes.push(steph_like1)


//9. push like, user, itinerary into the array accordingly

likes.push(steph_like1)
users.push(steph)
itineraries.push(steph_itinerary)




// 1. create a user
const jennifer = new User({
  username: 'jennifer',
  email: 'jennifer@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/jennifer.jpg',
  bio: 'Excited to embark on a thrilling adventure!',
  likes: []
});

// 2. create itinerary for Jennifer Lawrence
const jennifer_itinerary = new Itinerary({
  author: jennifer._id,
  title: "Jennifer Lawrence's Cruise Adventure",
  description: "3-day cruise exploring the beauty of the ocean",
  country: "International Waters",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/cruise.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 142 // Initialize likes to 0
});

// 3. create events for Jennifer's cruise adventure
const jennifer_event1 = new Event({
  eventTitle: "Welcome Aboard Party",
  startTime: "19:00",
  endTime: "22:00",
  location: "Cruise Ship",
  description: "Kick off the cruise adventure with a lively welcome party on board. Enjoy music, drinks, and meet fellow travelers!",
  cost: 0,
  category: "Entertainment",
  date: "10-01-2024"
});

const jennifer_event2 = new Event({
  eventTitle: "Sunset Cocktail Hour",
  startTime: "18:00",
  endTime: "19:00",
  location: "Deck",
  description: "Savor breathtaking views of the sunset while enjoying delicious cocktails on the deck of the cruise ship.",
  cost: 20,
  category: "Food & Drink",
  date: "10-02-2024"
});

const jennifer_event3 = new Event({
  eventTitle: "Poolside Barbecue",
  startTime: "12:00",
  endTime: "14:00",
  location: "Pool Deck",
  description: "Indulge in a mouthwatering barbecue feast by the pool. Enjoy grilled delights and refreshing drinks under the sun.",
  cost: 25,
  category: "Food & Drink",
  date: "10-02-2024"
});

// 4. create transportations for Jennifer's cruise adventure
const jennifer_transportation1 = new Transportation({
  transportationTitle: 'Embarkation',
  startLocation: 'Port',
  endLocation: 'Cruise Ship',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "10-01-2024",
  endDate: "10-01-2024",
  description: 'Board the cruise ship at the designated port and begin the exciting journey across the ocean.',
  cost: 0
});

// 5. create livings for Jennifer's cruise adventure
const jennifer_living1 = new Living({
  livingTitle: 'Deluxe Oceanview Stateroom',
  startTime: '12:00',
  endTime: '12:00',
  startDate: "10-01-2024",
  endDate: "10-04-2024",
  location: 'Cruise Ship',
  description: 'Stay in a luxurious oceanview stateroom equipped with modern amenities and enjoy stunning views of the sea throughout the cruise.',
  cost: 500
});

// 6. push events, transportations, livings into Jennifer's itinerary accordingly
jennifer_itinerary.events.push(jennifer_event1, jennifer_event2, jennifer_event3);
jennifer_itinerary.transportations.push(jennifer_transportation1);
jennifer_itinerary.livings.push(jennifer_living1);

// 7. create likes for Jennifer's itinerary
const jennifer_like1 = new Like({
  user: david,
  itinerary: jennifer_itinerary
});

// 8. update likes column in both user and itinerary
jennifer_like1.likes += 1;
david.likes.push(jennifer_like1);

// 9. push like, user, itinerary into the array accordingly
likes.push(jennifer_like1);
users.push(jennifer);
itineraries.push(jennifer_itinerary);






// 1. create a user
const mila = new User({
  username: 'mila',
  email: 'mila@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/mila.jpg',
  bio: 'Excited for a relaxing getaway to Mexico!',
  likes: []
});

// 2. create itinerary for Mila
const mila_itinerary = new Itinerary({
  author: mila._id,
  title: "Mila's Mexico Getaway",
  description: "Escape to Mexico with Mila for a 3-day trip.",
  country: "Mexico",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/mexico.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 457 // Initialize likes to 0
});

// 3. create events for Mila's Mexico getaway
const mila_event1 = new Event({
  eventTitle: "Arrival in Cancun",
  startTime: "12:00",
  endTime: "15:00",
  location: "Cancun International Airport",
  description: "Arrive in Cancun and soak in the warm Mexican sun as you start your tropical getaway.",
  cost: 0,
  category: "Travel",
  date: "03-02-2024"
});

const mila_event2 = new Event({
  eventTitle: "Beach Day",
  startTime: "10:00",
  endTime: "17:00",
  location: "Playa del Carmen",
  description: "Spend the day lounging on the pristine beaches of Playa del Carmen, enjoying the turquoise waters and golden sands.",
  cost: 0,
  category: "Leisure",
  date: "03-03-2024"
});

const mila_event3 = new Event({
  eventTitle: "Mayan Ruins Tour",
  startTime: "09:00",
  endTime: "12:00",
  location: "Tulum",
  description: "Explore the ancient Mayan ruins of Tulum and discover the rich history and culture of the region.",
  cost: 50,
  category: "Sightseeing",
  date: "03-04-2024"
});

// 4. create more events for Mila's Mexico getaway
const mila_event4 = new Event({
  eventTitle: "Snorkeling Adventure",
  startTime: "10:00",
  endTime: "13:00",
  location: "Cozumel",
  description: "Explore the vibrant underwater world of Cozumel with a guided snorkeling adventure. Discover colorful coral reefs and tropical marine life.",
  cost: 75,
  category: "Adventure",
  date: "03-05-2024"
});

const mila_event5 = new Event({
  eventTitle: "Sunset Cruise",
  startTime: "17:00",
  endTime: "19:00",
  location: "Cancun Marina",
  description: "Embark on a romantic sunset cruise along the coast of Cancun. Enjoy breathtaking views of the sunset over the Caribbean Sea.",
  cost: 100,
  category: "Leisure",
  date: "03-05-2024"
});

const mila_event6 = new Event({
  eventTitle: "Mexican Cooking Class",
  startTime: "11:00",
  endTime: "14:00",
  location: "Playa del Carmen",
  description: "Learn to prepare traditional Mexican dishes with a hands-on cooking class in Playa del Carmen. Discover the secrets of authentic Mexican cuisine!",
  cost: 50,
  category: "Food & Drink",
  date: "03-06-2024"
});

const mila_event7 = new Event({
  eventTitle: "Farewell Dinner",
  startTime: "19:00",
  endTime: "22:00",
  location: "Cancun",
  description: "Celebrate the end of your Mexico getaway with a delightful farewell dinner at a local restaurant in Cancun. Enjoy delicious Mexican cuisine and toast to unforgettable memories!",
  cost: 80,
  category: "Food & Drink",
  date: "03-06-2024"
});

const mila_event8 = new Event({
  eventTitle: "Departure from Cancun",
  startTime: "09:00",
  endTime: "12:00",
  location: "Cancun International Airport",
  description: "Bid farewell to Mexico as you depart from Cancun International Airport. Take with you cherished memories of your tropical adventure.",
  cost: 0,
  category: "Travel",
  date: "03-07-2024"
});


// 4. create transportations for Mila's Mexico getaway
const mila_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer',
  startLocation: 'Cancun International Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "03-02-2024",
  endDate: "03-02-2024",
  description: 'Transfer from Cancun International Airport to your hotel in Cancun.',
  cost: 25
});

// 5. create livings for Mila's Mexico getaway
const mila_living1 = new Living({
  livingTitle: 'Beachfront Resort',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "03-02-2024",
  endDate: "03-05-2024",
  location: 'Cancun',
  description: 'Stay in a luxurious beachfront resort in Cancun, offering stunning views of the Caribbean Sea and top-notch amenities.',
  cost: 600
});

const mila_living2 = new Living({
  livingTitle: 'Beachfront Villa in Tulum',
  startTime: '14:00',
  endTime: '11:00',
  startDate: "03-02-2024",
  endDate: "03-06-2024",
  location: 'Tulum',
  description: 'Experience luxury living in a beachfront villa in Tulum. Relax in style with stunning ocean views, private beach access, and top-notch amenities.',
  cost: 800
});

// 6. push events, transportations, livings into Mila's itinerary accordingly
mila_itinerary.events.push(mila_event1, mila_event2, mila_event3, mila_event4, mila_event5, mila_event6, mila_event7, mila_event8);
mila_itinerary.transportations.push(mila_transportation1);
mila_itinerary.livings.push(mila_living1, mila_living2);

// 7. create likes for Mila's itinerary
const mila_like1 = new Like({
  user: caroline,
  itinerary: mila_itinerary
});

// 8. update likes column in both user and itinerary
mila_like1.likes += 1;
caroline.likes.push(mila_like1);

// 9. push like, user, itinerary into the array accordingly
likes.push(mila_like1);
users.push(mila);
itineraries.push(mila_itinerary);







// 1. create a user
const serena = new User({
  username: 'serena',
  email: 'serena@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/serena.jpg',
  bio: 'Excited for a memorable vacation in India!',
  likes: []
});

// 2. create itinerary for Serena
const serena_itinerary = new Itinerary({
  author: serena._id,
  title: "Serena's Indian Adventure",
  description: "Trip to India exploring its rich culture, history, and landscapes.",
  country: "India",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/india.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 1240 // Initialize likes to 0
});

// 3. create events for Serena's Indian adventure
const serena_event1 = new Event({
  eventTitle: "Arrival in New Delhi",
  startTime: "12:00",
  endTime: "15:00",
  location: "Indira Gandhi International Airport",
  description: "Arrive in New Delhi and immerse yourself in the bustling streets, vibrant markets, and rich history of the Indian capital.",
  cost: 0,
  category: "Travel",
  date: "09-06-2024"
});

const serena_event2 = new Event({
  eventTitle: "Exploring the Taj Mahal",
  startTime: "08:00",
  endTime: "12:00",
  location: "Taj Mahal, Agra",
  description: "Visit the iconic Taj Mahal, a UNESCO World Heritage Site and symbol of eternal love. Marvel at its stunning architecture and intricate marble craftsmanship.",
  cost: 25,
  category: "Sightseeing",
  date: "09-07-2024"
});

const serena_event3 = new Event({
  eventTitle: "Boat Ride on the Ganges",
  startTime: "16:00",
  endTime: "18:00",
  location: "Ganges River, Varanasi",
  description: "Experience the spiritual ambiance of Varanasi with a boat ride on the sacred Ganges River. Witness traditional rituals and ceremonies along the ghats.",
  cost: 20,
  category: "Cultural",
  date: "09-08-2024"
});

// 4. create more events for Serena's Indian adventure
const serena_event4 = new Event({
  eventTitle: "Wildlife Safari in Ranthambore National Park",
  startTime: "06:00",
  endTime: "11:00",
  location: "Ranthambore National Park",
  description: "Embark on an exhilarating wildlife safari in Ranthambore National Park. Spot majestic tigers, leopards, and other exotic wildlife in their natural habitat.",
  cost: 50,
  category: "Adventure",
  date: "09-09-2024"
});

const serena_event5 = new Event({
  eventTitle: "Cultural Evening in Jaipur",
  startTime: "18:00",
  endTime: "21:00",
  location: "Jaipur",
  description: "Experience the vibrant culture of Jaipur with an evening of traditional music, dance, and Rajasthani cuisine. Immerse yourself in the colorful festivities!",
  cost: 30,
  category: "Cultural",
  date: "09-10-2024"
});

const serena_event6 = new Event({
  eventTitle: "Spiritual Retreat in Rishikesh",
  startTime: "09:00",
  endTime: "12:00",
  location: "Rishikesh",
  description: "Embark on a spiritual retreat in the serene surroundings of Rishikesh. Practice yoga, meditation, and mindfulness amidst the tranquil Himalayan foothills.",
  cost: 40,
  category: "Wellness",
  date: "09-11-2024"
});

const serena_event7 = new Event({
  eventTitle: "Shopping Excursion in Mumbai",
  startTime: "10:00",
  endTime: "14:00",
  location: "Mumbai",
  description: "Indulge in a shopping extravaganza in the bustling markets of Mumbai. Discover exquisite textiles, jewelry, and handicrafts from across India.",
  cost: 35,
  category: "Shopping",
  date: "09-12-2024"
});

const serena_event8 = new Event({
  eventTitle: "Departure from India",
  startTime: "09:00",
  endTime: "12:00",
  location: "Indira Gandhi International Airport",
  description: "Bid farewell to the enchanting land of India as you depart from New Delhi. Take with you cherished memories of your Indian adventure.",
  cost: 0,
  category: "Travel",
  date: "09-13-2024"
});


// 5. create transportations for Serena's Indian adventure
const serena_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer',
  startLocation: 'Indira Gandhi International Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "09-06-2024",
  endDate: "09-06-2024",
  description: 'Transfer from Indira Gandhi International Airport to your hotel in New Delhi.',
  cost: 30
});

const serena_transportation2 = new Transportation({
  transportationTitle: 'Train Journey to Agra',
  startLocation: 'New Delhi',
  endLocation: 'Agra',
  startTime: '06:00',
  endTime: '09:00',
  startDate: "09-07-2024",
  endDate: "09-07-2024",
  description: 'Enjoy a scenic train journey from New Delhi to Agra, the city of the Taj Mahal.',
  cost: 20
});

const serena_transportation3 = new Transportation({
  transportationTitle: 'Flight to Jaipur',
  startLocation: 'Agra',
  endLocation: 'Jaipur',
  startTime: '12:00',
  endTime: '13:00',
  startDate: "09-09-2024",
  endDate: "09-09-2024",
  description: 'Fly from Agra to Jaipur, the vibrant capital of Rajasthan.',
  cost: 50
});

// 6. create livings for Serena's Indian adventure
const serena_living1 = new Living({
  livingTitle: 'Luxury Hotel in New Delhi',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "09-06-2024",
  endDate: "09-10-2024",
  location: 'New Delhi',
  description: 'Experience luxury living in a 5-star hotel in New Delhi, offering world-class amenities and impeccable service.',
  cost: 800
});

const serena_living2 = new Living({
  livingTitle: 'Heritage Hotel in Jaipur',
  startTime: '14:00',
  endTime: '11:00',
  startDate: "09-09-2024",
  endDate: "09-11-2024",
  location: 'Jaipur',
  description: 'Stay in a charming heritage hotel in Jaipur, showcasing the rich cultural heritage of Rajasthan. Enjoy traditional Rajput hospitality and royal accommodations.',
  cost: 600
});

// 7. push events, transportations, livings into Serena's itinerary accordingly
serena_itinerary.events.push(serena_event1, serena_event2, serena_event3, serena_event4, serena_event5, serena_event6, serena_event7, serena_event8);
serena_itinerary.transportations.push(serena_transportation1, serena_transportation2, serena_transportation3);
serena_itinerary.livings.push(serena_living1, serena_living2);

// 8. create likes for Serena's itinerary
const serena_like1 = new Like({
  user: demoUser,
  itinerary: serena_itinerary
});

// 9. update likes column in both user and itinerary
serena_like1.likes += 1;
demoUser.likes.push(serena_like1)

// 10. push like, user, itinerary into the array accordingly
likes.push(serena_like1);
users.push(serena);
itineraries.push(serena_itinerary);







// 1. create a user
const robert = new User({
  username: 'robert',
  email: 'robert@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/robert.jpg',
  bio: 'Excited for a memorable vacation in Switzerland!',
  likes: []
});

// 2. create itinerary for Robert
const robert_itinerary = new Itinerary({
  author: robert._id,
  title: "Robert's Swiss Adventure",
  description: "Switzerland exploring its picturesque landscapes, charming cities, and alpine wonders.",
  country: "Switzerland",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/switzerland.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 90 // Initialize likes to 0
});

// 3. create events for Robert's Swiss adventure
const robert_event1 = new Event({
  eventTitle: "Arrival in Zurich",
  startTime: "12:00",
  endTime: "15:00",
  location: "Zurich Airport",
  description: "Arrive in Zurich and experience the cosmopolitan charm of Switzerland's largest city. Explore its historic old town, scenic lakefront, and vibrant cultural scene.",
  cost: 0,
  category: "Travel",
  date: "07-24-2024"
});

const robert_event2 = new Event({
  eventTitle: "Scenic Train Ride to Interlaken",
  startTime: "08:00",
  endTime: "11:00",
  location: "Zurich to Interlaken",
  description: "Embark on a scenic train journey from Zurich to Interlaken, passing through breathtaking alpine landscapes, quaint villages, and picturesque valleys.",
  cost: 30,
  category: "Travel",
  date: "07-25-2024"
});

const robert_event3 = new Event({
  eventTitle: "Exploring the Jungfrau Region",
  startTime: "09:00",
  endTime: "17:00",
  location: "Jungfrau Region",
  description: "Discover the natural beauty of the Jungfrau Region, surrounded by towering snow-capped peaks, pristine lakes, and lush meadows. Enjoy hiking, sightseeing, and outdoor adventures.",
  cost: 40,
  category: "Adventure",
  date: "07-26-2024"
});

// 4. create more events for Robert's Swiss adventure
const robert_event4 = new Event({
  eventTitle: "Boat Cruise on Lake Geneva",
  startTime: "14:00",
  endTime: "16:00",
  location: "Lake Geneva",
  description: "Embark on a scenic boat cruise on Lake Geneva and admire the stunning vistas of the Swiss Riviera, charming lakeside towns, and majestic mountains.",
  cost: 35,
  category: "Leisure",
  date: "07-27-2024"
});

const robert_event5 = new Event({
  eventTitle: "Exploring Lucerne",
  startTime: "10:00",
  endTime: "18:00",
  location: "Lucerne",
  description: "Discover the medieval charm of Lucerne with its picturesque old town, iconic Chapel Bridge, and stunning views of Lake Lucerne and the Swiss Alps.",
  cost: 25,
  category: "Sightseeing",
  date: "07-28-2024"
});

const robert_event6 = new Event({
  eventTitle: "Alpine Adventure in Zermatt",
  startTime: "08:00",
  endTime: "17:00",
  location: "Zermatt",
  description: "Embark on an unforgettable alpine adventure in Zermatt, home to the iconic Matterhorn. Enjoy hiking, skiing, and panoramic views of the Swiss Alps.",
  cost: 50,
  category: "Adventure",
  date: "07-29-2024"
});

const robert_event7 = new Event({
  eventTitle: "Farewell Dinner in Zurich",
  startTime: "19:00",
  endTime: "22:00",
  location: "Zurich",
  description: "Celebrate the end of your Swiss adventure with a delightful farewell dinner at a local restaurant in Zurich. Enjoy Swiss cuisine and toast to unforgettable memories!",
  cost: 45,
  category: "Food & Drink",
  date: "07-30-2024"
});

const robert_event8 = new Event({
  eventTitle: "Departure from Zurich",
  startTime: "09:00",
  endTime: "12:00",
  location: "Zurich Airport",
  description: "Bid farewell to Switzerland as you depart from Zurich Airport. Take with you cherished memories of your Swiss adventure.",
  cost: 0,
  category: "Travel",
  date: "07-31-2024"
});


// 5. create transportations for Robert's Swiss adventure
const robert_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer',
  startLocation: 'Zurich Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "07-24-2024",
  endDate: "07-24-2024",
  description: 'Transfer from Zurich Airport to your hotel in Zurich.',
  cost: 30
});

const robert_transportation2 = new Transportation({
  transportationTitle: 'Scenic Train to Interlaken',
  startLocation: 'Zurich',
  endLocation: 'Interlaken',
  startTime: '08:00',
  endTime: '11:00',
  startDate: "07-25-2024",
  endDate: "07-25-2024",
  description: 'Enjoy a scenic train ride from Zurich to Interlaken, passing through picturesque Swiss countryside.',
  cost: 50
});

const robert_transportation3 = new Transportation({
  transportationTitle: 'Train to Lucerne',
  startLocation: 'Interlaken',
  endLocation: 'Lucerne',
  startTime: '08:00',
  endTime: '11:00',
  startDate: "07-27-2024",
  endDate: "07-27-2024",
  description: 'Travel by train from Interlaken to Lucerne, soaking in the stunning views of Swiss Alps along the way.',
  cost: 40
});

// 6. create livings for Robert's Swiss adventure
const robert_living1 = new Living({
  livingTitle: 'Luxury Hotel in Zurich',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "07-24-2024",
  endDate: "07-28-2024",
  location: 'Zurich',
  description: 'Experience luxury accommodation in a 5-star hotel in Zurich, offering breathtaking views of the city skyline and Lake Zurich.',
  cost: 1000
});

const robert_living2 = new Living({
  livingTitle: 'Alpine Chalet in Zermatt',
  startTime: '14:00',
  endTime: '11:00',
  startDate: "07-28-2024",
  endDate: "07-30-2024",
  location: 'Zermatt',
  description: 'Stay in a cozy alpine chalet in Zermatt, surrounded by majestic mountains and pristine nature. Experience Swiss hospitality at its finest!',
  cost: 900
});

// 7. push events, transportations, livings into Robert's itinerary accordingly
robert_itinerary.events.push(robert_event1, robert_event2, robert_event3, robert_event4, robert_event5, robert_event6, robert_event7, robert_event8);
robert_itinerary.transportations.push(robert_transportation1, robert_transportation2, robert_transportation3);
robert_itinerary.livings.push(robert_living1, robert_living2);

// 8. create likes for Robert's itinerary
const robert_like1 = new Like({
  user: demoUser,
  itinerary: robert_itinerary
});

// 9. update likes column in both user and itinerary
robert_like1.likes += 1;
demoUser.likes.push(robert_like1)

// 10. push like, user, itinerary into the array accordingly
likes.push(robert_like1);
users.push(robert);
itineraries.push(robert_itinerary);






// 1. create a user
const suzanne = new User({
  username: 'suzanne',
  email: 'suzanne@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/suzanne.jpg',
  bio: 'Excited for a memorable family visit to Poland!',
  likes: []
});

// 2. create itinerary for Suzanne
const suzanne_itinerary = new Itinerary({
  author: suzanne._id,
  title: "Suzanne's Family Visit to Poland",
  description: "Poland to visit my family!",
  country: "Poland",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/poland.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 573 // Initialize likes to 0
});

// 3. create events for Suzanne's Polish adventure
const suzanne_event1 = new Event({
  eventTitle: "Arrival in Warsaw",
  startTime: "12:00",
  endTime: "15:00",
  location: "Warsaw Chopin Airport",
  description: "Arrive in Warsaw and begin your family adventure in Poland's dynamic capital. Explore its historic old town, royal palaces, and lively atmosphere.",
  cost: 0,
  category: "Travel",
  date: "06-15-2024"
});

const suzanne_event2 = new Event({
  eventTitle: "Exploring Krakow",
  startTime: "08:00",
  endTime: "17:00",
  location: "Krakow",
  description: "Discover the charm of Krakow, Poland's cultural gem and former royal capital. Visit its UNESCO-listed old town, Wawel Castle, and vibrant Jewish Quarter.",
  cost: 25,
  category: "Sightseeing",
  date: "06-16-2024"
});

const suzanne_event3 = new Event({
  eventTitle: "Day Trip to Auschwitz",
  startTime: "09:00",
  endTime: "15:00",
  location: "Auschwitz-Birkenau Memorial and Museum",
  description: "Pay tribute to the victims of the Holocaust with a solemn visit to Auschwitz-Birkenau Memorial and Museum. Gain insight into one of the darkest chapters in human history.",
  cost: 30,
  category: "Cultural",
  date: "06-17-2024"
});

// 4. create more events for Suzanne's Polish adventure
const suzanne_event4 = new Event({
  eventTitle: "Exploring Wroclaw",
  startTime: "10:00",
  endTime: "16:00",
  location: "Wroclaw",
  description: "Discover the vibrant city of Wroclaw, known for its stunning architecture, colorful market square, and picturesque islands. Explore its charming streets and hidden gems.",
  cost: 20,
  category: "Sightseeing",
  date: "06-18-2024"
});

const suzanne_event5 = new Event({
  eventTitle: "Family Fun at Zakopane",
  startTime: "09:00",
  endTime: "17:00",
  location: "Zakopane",
  description: "Enjoy a day of family fun in Zakopane, Poland's winter capital and gateway to the Tatra Mountains. Experience outdoor activities, traditional cuisine, and local culture.",
  cost: 35,
  category: "Leisure",
  date: "06-19-2024"
});

const suzanne_event6 = new Event({
  eventTitle: "Cultural Immersion in Gdansk",
  startTime: "11:00",
  endTime: "18:00",
  location: "Gdansk",
  description: "Immerse yourself in the rich maritime history and cultural heritage of Gdansk. Explore its historic port, Gothic architecture, and charming waterfront.",
  cost: 30,
  category: "Cultural",
  date: "06-20-2024"
});

// 5. create transportations for Suzanne's Polish adventure
const suzanne_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer',
  startLocation: 'Warsaw Chopin Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "06-15-2024",
  endDate: "06-15-2024",
  description: 'Transfer from Warsaw Chopin Airport to your hotel in Warsaw.',
  cost: 30
});

const suzanne_transportation2 = new Transportation({
  transportationTitle: 'Train to Krakow',
  startLocation: 'Warsaw',
  endLocation: 'Krakow',
  startTime: '08:00',
  endTime: '11:00',
  startDate: "06-16-2024",
  endDate: "06-16-2024",
  description: 'Travel by train from Warsaw to Krakow, immersing in the scenic landscapes of Poland.',
  cost: 40
});

const suzanne_transportation3 = new Transportation({
  transportationTitle: 'Train to Wroclaw',
  startLocation: 'Krakow',
  endLocation: 'Wroclaw',
  startTime: '09:00',
  endTime: '12:00',
  startDate: "06-18-2024",
  endDate: "06-18-2024",
  description: 'Travel by train from Krakow to Wroclaw, experiencing the convenience of Poland\’s railway network.',
  cost: 30
});

// 6. create livings for Suzanne's Polish adventure
const suzanne_living1 = new Living({
  livingTitle: 'Family Hotel in Warsaw',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "06-15-2024",
  endDate: "06-18-2024",
  location: 'Warsaw',
  description: 'Stay in a family-friendly hotel in Warsaw, offering comfortable accommodation and convenient access to the city\'s attractions.',
  cost: 600
});

const suzanne_living2 = new Living({
  livingTitle: 'Cozy Cottage in Zakopane',
  startTime: '14:00',
  endTime: '11:00',
  startDate: "06-18-2024",
  endDate: "06-22-2024",
  location: 'Zakopane',
  description: 'Experience the charm of Zakopane with a stay in a cozy cottage nestled in the Tatra Mountains. Enjoy panoramic views and relaxation amidst nature.',
  cost: 800
});

// 7. push events, transportations, livings into Suzanne's itinerary accordingly
suzanne_itinerary.events.push(suzanne_event1, suzanne_event2, suzanne_event3, suzanne_event4, suzanne_event5, suzanne_event6);
suzanne_itinerary.transportations.push(suzanne_transportation1, suzanne_transportation2, suzanne_transportation3);
suzanne_itinerary.livings.push(suzanne_living1, suzanne_living2);

// 8. create likes for Suzanne's itinerary
const suzanne_like1 = new Like({
  user: jerry,
  itinerary: suzanne_itinerary
});

// 9. update likes column in both user and itinerary
suzanne_like1.likes += 1;
jerry.likes.push(suzanne_like1);

// 10. push like, user, itinerary into the array accordingly
likes.push(suzanne_like1);
users.push(suzanne);
itineraries.push(suzanne_itinerary);





// 1. create a user
const tim = new User({
  username: 'tim',
  email: 'tim@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/tim.jpg',
  bio: 'Excited for a memorable visit to the Apple building in Cupertino!',
  likes: []
});

// 2. create itinerary for Tim
const tim_itinerary = new Itinerary({
  author: tim._id,
  title: "Tim's Visit to the Apple Building",
  description: "Apple building in Cupertino exploring its innovative workspace, cutting-edge technology, and iconic architecture.",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/apple_building.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 675 // Initialize likes to 0
});

// 3. create events for Tim's visit to the Apple building
const tim_event1 = new Event({
  eventTitle: "Arrival in Cupertino",
  startTime: "12:00",
  endTime: "15:00",
  location: "San Francisco International Airport",
  description: "Arrive in San Francisco and travel to Cupertino to begin your exciting visit to the Apple building. Prepare to be inspired by the world of Apple.",
  cost: 0,
  category: "Travel",
  date: "12-12-2024"
});

const tim_event2 = new Event({
  eventTitle: "Exploring the Apple Building",
  startTime: "08:00",
  endTime: "17:00",
  location: "Apple Park, Cupertino",
  description: "Explore the innovative Apple Park campus, home to the iconic Apple building. Discover its cutting-edge design, futuristic architecture, and lush surroundings.",
  cost: 25,
  category: "Sightseeing",
  date: "12-13-2024"
});

// 4. create transportation for Tim's visit to the Apple building
const tim_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer',
  startLocation: 'San Francisco International Airport',
  endLocation: 'Hotel in Cupertino',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "12-12-2024",
  endDate: "12-12-2024",
  description: 'Transfer from San Francisco International Airport to your hotel in Cupertino.',
  cost: 30
});

// 5. create living for Tim's visit to the Apple building
const tim_living1 = new Living({
  livingTitle: 'Hotel in Cupertino',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "12-12-2024",
  endDate: "12-15-2024",
  location: 'Cupertino',
  description: 'Stay in a hotel conveniently located in Cupertino, providing easy access to the Apple building and other attractions.',
  cost: 500
});

// 6. push events, transportations, livings into Tim's itinerary accordingly
tim_itinerary.events.push(tim_event1, tim_event2);
tim_itinerary.transportations.push(tim_transportation1);
tim_itinerary.livings.push(tim_living1);

// 7. create likes for Tim's itinerary
const tim_like1 = new Like({
  user: david,
  itinerary: tim_itinerary
});

// 8. update likes column in both user and itinerary
tim_like1.likes += 1;
david.likes.push(tim_like1);

// 9. push like, user, itinerary into the array accordingly
likes.push(tim_like1);
users.push(tim);
itineraries.push(tim_itinerary);





// 1. create a user
const lebron = new User({
  username: 'lebron',
  email: 'lebron@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/lebron.jpg',
  bio: 'Excited for a memorable family vacation in Oklahoma!',
  likes: []
});

// 2. create itinerary for LeBron
const lebron_itinerary = new Itinerary({
  author: lebron._id,
  title: "LeBron's Family Vacation to Oklahoma",
  description: "Family vacation to Oklahoma to play some ball",
  country: "USA",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/oklahoma.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 5608 // Initialize likes to 0
});

// 3. create events for LeBron's Oklahoma vacation
const lebron_event1 = new Event({
  eventTitle: "Arrival in Oklahoma City",
  startTime: "12:00",
  endTime: "15:00",
  location: "Will Rogers World Airport",
  description: "Arrive in Oklahoma City and kick off your family vacation in the vibrant heart of Oklahoma. Explore its museums, parks, and cultural attractions.",
  cost: 0,
  category: "Travel",
  date: "09-16-2024"
});

const lebron_event2 = new Event({
  eventTitle: "Family Day at the Oklahoma City Zoo",
  startTime: "09:00",
  endTime: "17:00",
  location: "Oklahoma City Zoo",
  description: "Spend a fun-filled day with your family at the Oklahoma City Zoo, home to a diverse collection of animals from around the world. Enjoy exhibits, shows, and interactive experiences.",
  cost: 30,
  category: "Family",
  date: "09-17-2024"
});

const lebron_event3 = new Event({
  eventTitle: "Exploring the Wichita Mountains Wildlife Refuge",
  startTime: "08:00",
  endTime: "16:00",
  location: "Wichita Mountains Wildlife Refuge",
  description: "Embark on an outdoor adventure in the scenic Wichita Mountains Wildlife Refuge. Hike, bike, or drive through picturesque landscapes and encounter native wildlife.",
  cost: 20,
  category: "Adventure",
  date: "09-18-2024"
});

const lebron_event4 = new Event({
  eventTitle: "Visit to the National Cowboy & Western Heritage Museum",
  startTime: "10:00",
  endTime: "14:00",
  location: "National Cowboy & Western Heritage Museum",
  description: "Immerse yourself in the rich history and culture of the American West at the National Cowboy & Western Heritage Museum. Explore exhibits, artifacts, and artwork celebrating cowboy life and Native American heritage.",
  cost: 25,
  category: "Cultural",
  date: "09-19-2024"
});

const lebron_event5 = new Event({
  eventTitle: "Departure from Oklahoma City",
  startTime: "09:00",
  endTime: "12:00",
  location: "Will Rogers World Airport",
  description: "Bid farewell to Oklahoma City as you depart from Will Rogers World Airport. Take with you cherished memories of your family vacation in the heartland of America.",
  cost: 0,
  category: "Travel",
  date: "09-20-2024"
});

// 4. create transportations for LeBron's Oklahoma vacation
const lebron_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer',
  startLocation: 'Will Rogers World Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "09-16-2024",
  endDate: "09-16-2024",
  description: 'Transfer from Will Rogers World Airport to your hotel in Oklahoma City.',
  cost: 30
});

// 5. create livings for LeBron's Oklahoma vacation
const lebron_living1 = new Living({
  livingTitle: 'Family-friendly Resort in Oklahoma City',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "09-16-2024",
  endDate: "09-20-2024",
  location: 'Oklahoma City',
  description: 'Stay in a family-friendly resort in Oklahoma City, offering comfortable accommodations and a range of amenities for all ages.',
  cost: 800
});

// 6. push events, transportations, livings into LeBron's itinerary accordingly
lebron_itinerary.events.push(lebron_event1, lebron_event2, lebron_event3, lebron_event4, lebron_event5);
lebron_itinerary.transportations.push(lebron_transportation1);
lebron_itinerary.livings.push(lebron_living1);

// 7. create likes for LeBron's itinerary
const lebron_like1 = new Like({
  user: caroline,
  itinerary: lebron_itinerary
});

// 8. update likes column in both user and itinerary
lebron_like1.likes += 1;
caroline.likes.push(lebron_like1);

// 9. push like, user, itinerary into the array accordingly
likes.push(lebron_like1);
users.push(lebron);
itineraries.push(lebron_itinerary);





// 1. create a user
const lionel = new User({
  username: 'lionel',
  email: 'lionel@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/lionel.jpg',
  bio: 'Excited for a memorable vacation in Jamaica to play soccer!',
  likes: []
});

// 2. create itinerary for Lionel
const lionel_itinerary = new Itinerary({
  author: lionel._id,
  title: "Lionel's Soccer Vacation in Jamaica",
  description: "Soccer in Jamaica! Enjoying the sun, sand, and soccer on the beautiful Caribbean island.",
  country: "Jamaica",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/jamaica.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 7021 // Initialize likes to 0
});

// 3. create events for Lionel's Jamaica soccer vacation
const lionel_event1 = new Event({
  eventTitle: "Arrival in Montego Bay",
  startTime: "12:00",
  endTime: "15:00",
  location: "Sangster International Airport",
  description: "Arrive in Montego Bay and kick off your soccer vacation in Jamaica. Explore its beautiful beaches, vibrant culture, and enjoy some reggae music.",
  cost: 0,
  category: "Travel",
  date: "01-05-2025"
});

const lionel_event2 = new Event({
  eventTitle: "Soccer Practice at Local Field",
  startTime: "09:00",
  endTime: "12:00",
  location: "Local Soccer Field, Montego Bay",
  description: "Join a local soccer team for a practice session at a nearby soccer field. Experience the passion and skill of Jamaican soccer players.",
  cost: 0,
  category: "Sports",
  date: "01-06-2025"
});

const lionel_event3 = new Event({
  eventTitle: "Friendly Soccer Match",
  startTime: "15:00",
  endTime: "17:00",
  location: "Montego Bay Stadium",
  description: "Participate in a friendly soccer match against a local team at the Montego Bay Stadium. Showcase your soccer skills and enjoy the competitive spirit.",
  cost: 0,
  category: "Sports",
  date: "01-07-2025"
});

const lionel_event4 = new Event({
  eventTitle: "Beach Day and Soccer on the Sand",
  startTime: "10:00",
  endTime: "16:00",
  location: "Doctor's Cave Beach, Montego Bay",
  description: "Spend a relaxing day at Doctor's Cave Beach, enjoying the sun, sand, and playing soccer on the beach with friends and locals.",
  cost: 10,
  category: "Beach/Sports",
  date: "01-08-2025"
});

const lionel_event5 = new Event({
  eventTitle: "Exploring Kingston",
  startTime: "09:00",
  endTime: "17:00",
  location: "Kingston",
  description: "Explore the capital city of Jamaica, Kingston. Visit historical sites, museums, and experience the vibrant music and culture of the city.",
  cost: 20,
  category: "Sightseeing",
  date: "01-09-2025"
});

const lionel_event6 = new Event({
  eventTitle: "Reggae Night at Bob Marley Museum",
  startTime: "19:00",
  endTime: "22:00",
  location: "Bob Marley Museum, Kingston",
  description: "Immerse yourself in the rhythms of reggae music at the iconic Bob Marley Museum. Enjoy live music, dance, and learn about the legendary musician's life.",
  cost: 30,
  category: "Music/Cultural",
  date: "01-10-2025"
});

const lionel_event7 = new Event({
  eventTitle: "Departure from Jamaica",
  startTime: "09:00",
  endTime: "12:00",
  location: "Sangster International Airport",
  description: "Bid farewell to Jamaica as you depart from Sangster International Airport. Take with you unforgettable memories of your soccer vacation in the Caribbean.",
  cost: 0,
  category: "Travel",
  date: "01-20-2025"
});

// 4. create transportations for Lionel's Jamaica soccer vacation
const lionel_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer',
  startLocation: 'Sangster International Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "01-05-2025",
  endDate: "01-05-2025",
  description: 'Transfer from Sangster International Airport to your hotel in Montego Bay.',
  cost: 30
});

// 5. create livings for Lionel's Jamaica soccer vacation
const lionel_living1 = new Living({
  livingTitle: 'Beachfront Villa in Montego Bay',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "01-05-2025",
  endDate: "01-20-2025",
  location: 'Montego Bay',
  description: 'Stay in a luxurious beachfront villa in Montego Bay, offering breathtaking ocean views and access to private beaches. Experience the ultimate relaxation and luxury.',
  cost: 1500
});

// 6. push events, transportations, livings into Lionel's itinerary accordingly
lionel_itinerary.events.push(lionel_event1, lionel_event2, lionel_event3, lionel_event4, lionel_event5, lionel_event6, lionel_event7);
lionel_itinerary.transportations.push(lionel_transportation1);
lionel_itinerary.livings.push(lionel_living1);

// 7. create likes for Lionel's itinerary
const lionel_like1 = new Like({
  user: jhon,
  itinerary: lionel_itinerary
});

// 8. update likes column in both user and itinerary
lionel_like1.likes += 1;
jhon.likes.push(lionel_like1);

// 9. push like, user, itinerary into the array accordingly
likes.push(lionel_like1);
users.push(lionel);
itineraries.push(lionel_itinerary);





// 1. create a user
const jungkook = new User({
  username: 'jungkook',
  email: 'jungkook@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/jungkook.jpg',
  bio: 'Memorable trip to Korea to explore the city and enjoy my K-pop!',
  likes: []
});

// 2. create itinerary for Jungkook
const jungkook_itinerary = new Itinerary({
  author: jungkook._id,
  title: "Jungkook's K-pop Adventure in Korea",
  description: "Embark on an exciting trip to Korea with Jungkook, exploring the vibrant city and immersing in the world of K-pop!",
  country: "South Korea",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/korea.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 9214 // Initialize likes to 0
});

// 3. create events for Jungkook's Korea trip
const jungkook_event1 = new Event({
  eventTitle: "Arrival in Seoul",
  startTime: "12:00",
  endTime: "15:00",
  location: "Incheon International Airport",
  description: "Arrive in Seoul and kick off your trip to Korea. Explore the vibrant city, visit K-pop studios, and immerse yourself in Korean culture.",
  cost: 0,
  category: "Travel",
  date: "03-21-2025"
});

const jungkook_event2 = new Event({
  eventTitle: "Visit to K-pop Studio",
  startTime: "10:00",
  endTime: "12:00",
  location: "SM Entertainment Studio, Seoul",
  description: "Take a tour of a K-pop studio and get a behind-the-scenes look at how K-pop music is produced. Experience the excitement of being in a real K-pop studio!",
  cost: 0,
  category: "Entertainment",
  date: "03-22-2025"
});

const jungkook_event3 = new Event({
  eventTitle: "Exploring Gangnam District",
  startTime: "14:00",
  endTime: "18:00",
  location: "Gangnam District, Seoul",
  description: "Explore the trendy Gangnam District, known for its upscale shopping, vibrant nightlife, and iconic K-pop culture. Discover the places where your favorite K-pop stars hang out!",
  cost: 50,
  category: "Sightseeing",
  date: "03-23-2025"
});

const jungkook_event4 = new Event({
  eventTitle: "K-pop Dance Class",
  startTime: "11:00",
  endTime: "13:00",
  location: "K-pop Dance Academy, Seoul",
  description: "Join a K-pop dance class and learn the latest dance moves from professional instructors. Channel your inner K-pop star and master the choreography!",
  cost: 30,
  category: "Entertainment",
  date: "03-24-2025"
});

const jungkook_event5 = new Event({
  eventTitle: "Fan Meeting with BTS Fans",
  startTime: "15:00",
  endTime: "17:00",
  location: "BTS Fan Club, Seoul",
  description: "Meet up with fellow BTS fans for a fan gathering. Share your love for BTS, exchange fan theories, and make new friends who share your passion for K-pop!",
  cost: 0,
  category: "Community",
  date: "03-25-2025"
});

const jungkook_event6 = new Event({
  eventTitle: "Shopping in Myeongdong",
  startTime: "10:00",
  endTime: "16:00",
  location: "Myeongdong, Seoul",
  description: "Indulge in a shopping spree in Myeongdong, Seoul's premier shopping district. Shop for trendy fashion, cosmetics, and K-pop merchandise.",
  cost: 100,
  category: "Shopping",
  date: "03-26-2025"
});

const jungkook_event7 = new Event({
  eventTitle: "Departure from Seoul",
  startTime: "09:00",
  endTime: "12:00",
  location: "Incheon International Airport",
  description: "Bid farewell to Seoul as you depart from Incheon International Airport. Take with you unforgettable memories of your K-pop adventure in Korea!",
  cost: 0,
  category: "Travel",
  date: "03-28-2025"
});

// 4. create transportations for Jungkook's Korea trip
const jungkook_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer (Arrival)',
  startLocation: 'Incheon International Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "03-21-2025",
  endDate: "03-21-2025",
  description: 'Transfer from Incheon International Airport to your hotel in Seoul.',
  cost: 50
});

const jungkook_transportation2 = new Transportation({
  transportationTitle: 'City Tour Shuttle',
  startLocation: 'Hotel',
  endLocation: 'Various Locations',
  startTime: '10:00',
  endTime: '17:00',
  startDate: "03-22-2025",
  endDate: "03-26-2025",
  description: 'Enjoy a convenient city tour shuttle service to explore various K-pop studios, shopping districts, and cultural landmarks.',
  cost: 100
});

const jungkook_transportation3 = new Transportation({
  transportationTitle: 'K-pop Dance Class Shuttle',
  startLocation: 'Hotel',
  endLocation: 'K-pop Dance Academy',
  startTime: '10:00',
  endTime: '13:00',
  startDate: "03-24-2025",
  endDate: "03-24-2025",
  description: 'Shuttle service to and from the K-pop Dance Academy for your K-pop dance class.',
  cost: 20
});

const jungkook_transportation4 = new Transportation({
  transportationTitle: 'Airport Transfer (Departure)',
  startLocation: 'Hotel',
  endLocation: 'Incheon International Airport',
  startTime: '09:00',
  endTime: '12:00',
  startDate: "03-28-2025",
  endDate: "03-28-2025",
  description: 'Transfer from your hotel in Seoul to Incheon International Airport for your departure.',
  cost: 50
});

// 5. create livings for Jungkook's Korea trip
const jungkook_living1 = new Living({
  livingTitle: 'Luxury Hotel in Gangnam',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "03-21-2025",
  endDate: "03-28-2025",
  location: 'Seoul',
  description: 'Stay in a luxury hotel in the heart of Gangnam, Seoul, known for its upscale amenities and convenient access to K-pop attractions.',
  cost: 1200
});

// 6. push events, transportations, livings into Jungkook's itinerary accordingly
jungkook_itinerary.events.push(jungkook_event1, jungkook_event2, jungkook_event3, jungkook_event4, jungkook_event5, jungkook_event6, jungkook_event7);
jungkook_itinerary.transportations.push(jungkook_transportation1, jungkook_transportation2, jungkook_transportation3, jungkook_transportation4);
jungkook_itinerary.livings.push(jungkook_living1);

// 7. create likes for Jungkook's itinerary
const jungkook_like1 = new Like({
  user: demoUser,
  itinerary: jungkook_itinerary
});

// 8. update likes column in both user and itinerary
jungkook_like1.likes += 1;
demoUser.likes.push(jungkook_like1)

// 9. push like, user, itinerary into the array accordingly
likes.push(jungkook_like1);
users.push(jungkook);
itineraries.push(jungkook_itinerary);






// 1. create a user
const tyson = new User({
  username: 'tyson',
  email: 'tyson@gmail.com',
  hashedPassword: bcrypt.hashSync('password', 10),
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/tyson.jpg',
  bio: 'Excited for a memorable trip to Italy to compete in the Valorant Champions!',
  likes: []
});

// 2. create itinerary for Tyson
const tyson_itinerary = new Itinerary({
  author: tyson._id,
  title: "Tyson's Valorant Champions Adventure in Italy",
  description: "Trip to Italy competing in the Valorant Champions tournament and exploring the country",
  country: "Italy",
  imageUrls: "https://mern-travel.s3.us-west-1.amazonaws.com/italy.jpg",
  events: [],
  transportations: [],
  livings: [],
  likes: 599 // Initialize likes to 0
});

// 3. create events for Tyson's Italy trip
const tyson_event1 = new Event({
  eventTitle: "Arrival in Rome",
  startTime: "12:00",
  endTime: "15:00",
  location: "Leonardo da Vinci–Fiumicino Airport",
  description: "Arrive in Rome and kick off your trip to Italy. Prepare for the Valorant Champions tournament and explore the historic city.",
  cost: 0,
  category: "Travel",
  date: "04-22-2026"
});

const tyson_event2 = new Event({
  eventTitle: "Valorant Champions Tournament",
  startTime: "09:00",
  endTime: "18:00",
  location: "Stadio Olimpico, Rome",
  description: "Compete in the Valorant Champions tournament at Stadio Olimpico, Rome. Showcase your skills and strive for victory!",
  cost: 0,
  category: "Esports",
  date: "04-23-2026"
});

const tyson_event3 = new Event({
  eventTitle: "Exploring Florence",
  startTime: "10:00",
  endTime: "16:00",
  location: "Florence",
  description: "Explore the historic city of Florence, known for its Renaissance art and architecture. Visit iconic landmarks such as the Florence Cathedral and Ponte Vecchio.",
  cost: 50,
  category: "Sightseeing",
  date: "04-24-2026"
});

const tyson_event4 = new Event({
  eventTitle: "Valorant Bootcamp",
  startTime: "10:00",
  endTime: "17:00",
  location: "Gaming Arena, Milan",
  description: "Participate in a Valorant bootcamp at a gaming arena in Milan. Hone your skills, strategize with your team, and prepare for upcoming matches.",
  cost: 0,
  category: "Esports",
  date: "04-25-2026"
});

const tyson_event5 = new Event({
  eventTitle: "Valorant Semifinals",
  startTime: "14:00",
  endTime: "18:00",
  location: "Stadio Olimpico, Rome",
  description: "Compete in the Valorant semifinals at Stadio Olimpico, Rome. Face off against top teams and aim for a spot in the finals!",
  cost: 0,
  category: "Esports",
  date: "04-26-2026"
});

const tyson_event6 = new Event({
  eventTitle: "Free Day in Venice",
  startTime: "09:00",
  endTime: "17:00",
  location: "Venice",
  description: "Enjoy a free day in Venice, exploring its charming canals, historic architecture, and vibrant atmosphere. Take a gondola ride and savor authentic Italian cuisine.",
  cost: 100,
  category: "Sightseeing",
  date: "04-27-2026"
});

const tyson_event7 = new Event({
  eventTitle: "Departure from Rome",
  startTime: "09:00",
  endTime: "12:00",
  location: "Leonardo da Vinci–Fiumicino Airport",
  description: "Bid farewell to Italy as you depart from Leonardo da Vinci–Fiumicino Airport. Take with you unforgettable memories of your Valorant adventure in Italy!",
  cost: 0,
  category: "Travel",
  date: "04-28-2026"
});

// 4. create transportations for Tyson's Italy trip
const tyson_transportation1 = new Transportation({
  transportationTitle: 'Airport Transfer (Arrival)',
  startLocation: 'Leonardo da Vinci–Fiumicino Airport',
  endLocation: 'Hotel',
  startTime: '12:00',
  endTime: '15:00',
  startDate: "04-22-2026",
  endDate: "04-22-2026",
  description: 'Transfer from Leonardo da Vinci–Fiumicino Airport to your hotel in Rome.',
  cost: 50
});

const tyson_transportation2 = new Transportation({
  transportationTitle: 'Tournament Shuttle',
  startLocation: 'Hotel',
  endLocation: 'Stadio Olimpico, Rome',
  startTime: '08:00',
  endTime: '19:00',
  startDate: "04-23-2026",
  endDate: "04-26-2026",
  description: 'Shuttle service to and from the Valorant Champions tournament venue.',
  cost: 0
});

const tyson_transportation3 = new Transportation({
  transportationTitle: 'Bootcamp Shuttle',
  startLocation: 'Hotel',
  endLocation: 'Gaming Arena, Milan',
  startTime: '09:00',
  endTime: '18:00',
  startDate: "04-25-2026",
  endDate: "04-25-2026",
  description: 'Shuttle service to and from the Valorant bootcamp venue in Milan.',
  cost: 50
});

const tyson_transportation4 = new Transportation({
  transportationTitle: 'Airport Transfer (Departure)',
  startLocation: 'Hotel',
  endLocation: 'Leonardo da Vinci–Fiumicino Airport',
  startTime: '09:00',
  endTime: '12:00',
  startDate: "04-28-2026",
  endDate: "04-28-2026",
  description: 'Transfer from your hotel in Rome to Leonardo da Vinci–Fiumicino Airport for your departure.',
  cost: 50
});

// 5. create livings for Tyson's Italy trip
const tyson_living1 = new Living({
  livingTitle: 'Luxury Hotel in Rome',
  startTime: '15:00',
  endTime: '12:00',
  startDate: "04-22-2026",
  endDate: "04-28-2026",
  location: 'Rome',
  description: 'Stay in a luxury hotel in the heart of Rome, offering exquisite accommodations and easy access to the Valorant Champions tournament venue.',
  cost: 1200
});

// 6. push events, transportations, livings into Tyson's itinerary accordingly
tyson_itinerary.events.push(tyson_event1, tyson_event2, tyson_event3, tyson_event4, tyson_event5, tyson_event6, tyson_event7);
tyson_itinerary.transportations.push(tyson_transportation1, tyson_transportation2, tyson_transportation3, tyson_transportation4);
tyson_itinerary.livings.push(tyson_living1);

// 7. create likes for Tyson's itinerary
const tyson_like1 = new Like({
  user: caroline,
  itinerary: tyson_itinerary
});

// 8. update likes column in both user and itinerary
tyson_like1.likes += 1;
caroline.likes.push(tyson_like1);

// 9. push like, user, itinerary into the array accordingly
likes.push(tyson_like1);
users.push(tyson);
itineraries.push(tyson_itinerary);










// Connect to database
  mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    // console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    // console.error(err.stack);
    process.exit(1);
  });

// Reset and seed db
const insertSeeds = () => {
  // console.log("Resetting db and seeding users and itineraries...");

  User.collection.drop()
                 .then(() => Itinerary.collection.drop())
                 .then(() => Like.collection.drop())
                 .then(() => User.insertMany(users))
                 .then(() => Itinerary.insertMany(itineraries))
                 .then(() => Like.insertMany(likes))
                 .then(() => {
                   // console.log("Done!");
                   mongoose.disconnect();
                 })
                 .catch(err => {
                   // console.error(err.stack);
                   process.exit(1);
                 });
}

//code for seeding in terminal

//dotenv node seeders/seeds.js
