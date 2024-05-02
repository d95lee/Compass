# Welcome to Compass

Compass is a social media website where users can interact with each other by creating, sharing and interacting with itineraries in order to plan future trips or share past experiences. This allows for people to connect  and make the best decisions depending on the users needs and wants, taking into account the location, price and type of trip (backpacking, luxury travel, exploring, etc.)


## Table of contents

1. Features
2. Technologies
3. Functionality
4. Contributors
5. Future Features


## Features
Users will have the ability to create or log in to their account via modal once entering the home page.

![image](https://github.com/d95lee/Compass/assets/112995904/5f035fdb-bca2-4fe3-8501-a1fec2e84877)


When first entering the page, users will have access to the contributors itineraries.

![image](https://github.com/d95lee/Compass/assets/112995904/1c887c6e-4b8f-4e92-b4c3-89f138b1827c)





Whether logged in or logged out, users can preview itineries.

![image](https://github.com/d95lee/Compass/assets/112995904/0a22bae6-8bb3-4d12-b458-ac34c5b4561f)

Itineraries will be able to be categorized by continent, making the search process easier.

![image](https://github.com/d95lee/Compass/assets/112995904/6cdd4eba-4411-4afc-ba6d-02914597277d)


User profile shows like or created itineraries.

![image](https://github.com/d95lee/Compass/assets/112995904/cbdfe684-2dca-41e5-950a-ca0d27ffa9e5)

The option to have a personal bio so that other users can know more about you is also available in the profile page.

![image](https://github.com/d95lee/Compass/assets/112995904/957c072b-c0fe-4501-b047-4efb9cc4c8c7)


When clicking on a specific itinerary, will display information on transportation, living and events

![image](https://github.com/d95lee/Compass/assets/112995904/7cb43403-a77f-4e8e-8608-3f371a2bbe1f)


Users browsing through itineraries can like the ones they are interested in, this way it can be saved for future reference in their own profile.

![image](https://github.com/d95lee/Compass/assets/112995904/ac92d590-80fd-4276-b400-eb39d5a33d72)


User experience




## Technologies

Compass was primarily built with MERN stack which includes:
- `React` & `JavaScript` frontend with `css` styling and `Redux state`
- `MongoDB`, `Mongoose`, `Node.js`, `Express` backend. Allowing routing and storing of information (username, email, password, etc)
- `AWS` allowing users to upload and store images.
- `Webpack` for managing dependencies in order to bundle and optimize our code.
- `npm` to manage project dependencies.
- `Heroku` for hosting the application.



## Functionality and MVP
- User Auth
  - Can create a user or log in if already have an account
- Itinerary
  - CRUD (create, update, delete, index, show) 
  - Scrollable timeline
- Itineraries
  - Users are able to Like/Follow/Favorite
- Transportation
  - Able to create or delete the transportation.
  - Title, start/end (time, location, date), description & cost
- Living
  - Able to provide accomodation information
  - Title, start/end (time, date), location, description & cost
- Event
  - Provide information on events
  - title, start/end time, date, location, description, category & cost





## Contributors
- Caroline Zhang
- David Lee
- Jerry Wang
- Jhon Salazar

## Future features
- Search that interacts with 3rd party integration
  - Index, search, filter, show
  - Possible 3rd party integration
  - Yelp, Google Maps, AI Integration (ChatGPT)


