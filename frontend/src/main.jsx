import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/store.js';
import { fetchItineraries, fetchItinerary } from './store/itinerary.js';
import  {createEvent, deleteEvent, updateEvent}  from './store/event.js';
import { createLiving, deleteLiving, updateLiving } from './store/living';
const store = configureStore();

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.fetchItinerary = fetchItinerary;
  window.fetchItineraries = fetchItineraries;
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
