import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/store.js';
import { createItinerary, deleteItinerary, fetchItineraries, fetchItinerary, fetchUserItineraries, updateItinerary } from './store/itinerary.js';
import { createTransportation, deleteTransportation, updateTransportation } from './store/transportation.js';



import  {createEvent, deleteEvent, updateEvent}  from './store/event.js';
import { createLiving, deleteLiving, updateLiving } from './store/living';
import { getCurrentUser, login } from './store/session.js';
const store = configureStore();

if (import.meta.env.MODE !== "production") {
  window.store = store;

  window.getCurrentUser = getCurrentUser;
  window.login = login;

  window.fetchItinerary = fetchItinerary;
  window.fetchItineraries = fetchItineraries;
  window.fetchUserItineraries = fetchUserItineraries;
  window.createItinerary = createItinerary;
  window.updateItinerary = updateItinerary;
  window.deleteItinerary = deleteItinerary;
  window.createTransportation = createTransportation
  window.updateTransportation = updateTransportation
  window.deleteTransportation = deleteTransportation
  window.createEvent = createEvent
  window.updateEvent = updateEvent
  window.deleteEvent = deleteEvent
  window.createLiving = createLiving;
  window.updateLiving = updateLiving;
  window.deleteLiving = deleteLiving;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
