import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthRoute } from './components/Routes/Routes';
import HomePage from './components/HomePage/HomePage';
import SessionModal from './components/Modal/SessionModal';
import NavBar from './components/NavBar/NavBar';
import ItineraryIndex from './components/ItineraryIndex/ItineraryIndex';
import Test from './components/Test/Test'
import TestShow from './components/Test/TestShow'

import { getCurrentUser } from './store/session';

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
    path: 'test',
    element: <Test/>
  },
  {
    path: 'test/:itineraryId',
    element: <TestShow/>
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