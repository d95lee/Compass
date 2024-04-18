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
    path: 'nav',
    element: <NavBar/>
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
  }
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