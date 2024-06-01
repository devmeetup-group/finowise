import './api/api';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import Landing from './pages/Landing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
