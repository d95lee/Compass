import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthRoute } from './components/Routes/Routes';
import HomePage from './components/HomePage/HomePage';
import SessionModal from './components/Modal/SessionModal';
import NavBar from './components/NavBar/NavBar';
import ItineraryIndex from './components/ItineraryIndex/ItineraryIndex';

import { getCurrentUser } from './store/session';
import CreateItineraryModal from './components/Modal/CreateItineraryModal';
import Profile from './components/Profile/Profile';
import ItineraryShow from './components/ItineraryShow/ItineraryShow';
import ItineraryForm from './components/ItineraryForm/ItineraryForm';
import EventForm from './components/ItineraryForm/EventForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <AuthRoute component={HomePage} />
  },
  {
    path: 'modal',
    element: <SessionModal />
  },
  {
    path: 'nav/itinerary/:itineraryId',
    element: 
    <>
    <NavBar/>
    <EventForm/>
    </>
  },
  {
    path: 'nav-index',
    element: 
      <>
        <NavBar/>
        <ItineraryIndex />
      </>
  },
  {
    path: 'itinerary-show/:itineraryId',
    element: <ItineraryShow/>
  },
  {
    path: 'profile',
    element:
      <>
        <NavBar />
        <Profile/>
      </>
  },
  {
    path: 'form',
    element: 
      <>
        <NavBar/>
        <ItineraryForm/>
      </>
  },
  {
    path: 'itinerary/:itineraryId',
    element:
      <>
        <NavBar />
        <EventForm/>
      </>
  },
]);

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).finally(() => setLoaded(true));
  }, [dispatch]);
  
  return loaded && <RouterProvider router={router} />;
}

export default App;