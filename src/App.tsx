import './api/api';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Landing /> }
    ],
  },
]);

const App = () => {
return <RouterProvider router={router} />;
};

export default App;
