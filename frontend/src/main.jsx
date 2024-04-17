import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/store.js';
import { fetchItineraries, fetchItinerary } from './store/itinerary.js';

const store = configureStore();

window.store = store;
window.fetchItinerary = fetchItinerary;
window.fetchItineraries = fetchItineraries;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
