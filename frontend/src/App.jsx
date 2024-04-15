import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AuthRoute } from './components/Routes/Routes';
import HomePage from './components/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute component={HomePage} />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;