import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthRoute } from './components/Routes/Routes';
import HomePage from './components/HomePage/HomePage';
import SessionModal from './components/Modal/SessionModal';
import NavBar from './components/NavBar/NavBar';
import ItineraryIndex from './components/ItineraryIndex/ItineraryIndex';


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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;