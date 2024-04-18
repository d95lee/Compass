import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import HomePage from './components/HomePage/HomePage';

import NavBar from './components/NavBar/NavBar';
import ItineraryIndex from './components/ItineraryIndex/ItineraryIndex';

import { getCurrentUser } from './store/session';

import Profile from './components/Profile/Profile';
import ItineraryShow from './components/ItineraryShow/ItineraryShow';
import ItineraryForm from './components/ItineraryForm/ItineraryForm';


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AuthRoute component={HomePage} />
      },
      {
        path: "itinerary",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ItineraryIndex />
          },
          {
            path: ":itineraryId",
            element: <ItineraryShow /> // AuthRoute, don't have to be logged in to view
          },
          {
            path:"form/:itineraryId",
            element: <ItineraryForm />
          }
        ]
      },
      {
        path: "profile",
        element: <Outlet/>,
        children: [
          {
            path: ":userId",
            element: <Profile />
          }
        ]
      }
    ]
}])



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).finally(() => setLoaded(true));
  }, [dispatch]);

  return loaded && <RouterProvider router={router} />;
}

export default App;
