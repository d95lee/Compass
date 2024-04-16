import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthRoute } from './components/Routes/Routes';
import HomePage from './components/HomePage/HomePage';
import SessionModal from './components/Modal/SessionModal';
import NavBar from './components/NavBar/NavBar';


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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;