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
  profileImageUrl: 'https://mern-travel.s3.us-west-1.amazonaws.com/kanye.jpg',
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
  likes: 0
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
  likes: 0
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
  startDate: "02-01-2024",
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
  likes: 0
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
  likes: 0
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
  user: darren,
  itinerary: ayce_itinerary
})
// 8. update likes column in both user and itinerary
ayce_like1.likes += 1
caroline.likes.push(ayce_like1)
darren.likes.push(ayce_like1)

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
  likes: 0
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
  likes: 0
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
  likes: 0
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
  likes: 0
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
  user: david,
  user: caroline,
  itinerary: kevin_itinerary
})
// 8. update likes column in both user and itinerary
kevin_like1.likes += 1
david.likes.push(kevin_like1)
jerry.likes.push(kevin_like1)
caroline.likes.push(kevin_like1)


//9. push like, user, itinerary into the array accordingly

likes.push(kevin_like1)
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
  likes: 0
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
  user: david,
  user: caroline,
  itinerary: justin_itinerary
})
// 8. update likes column in both user and itinerary
justin_like1.likes += 1
david.likes.push(justin_like1)
jerry.likes.push(justin_like1)
caroline.likes.push(justin_like1)


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
  likes: 0
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
  user: david,
  user: caroline,
  user: jhon,
  itinerary: steph_itinerary
})
// 8. update likes column in both user and itinerary
steph_like1.likes += 1
david.likes.push(steph_like1)
jerry.likes.push(steph_like1)
caroline.likes.push(steph_like1)
jhon.likes.push(steph_like1)


//9. push like, user, itinerary into the array accordingly

likes.push(steph_like1)
users.push(steph)
itineraries.push(steph_itinerary)





















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
