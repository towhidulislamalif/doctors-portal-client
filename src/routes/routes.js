import { createBrowserRouter } from 'react-router-dom';
import Appointment from '../pages/appointment/Appointment';
import Dashboard from '../pages/dashboard/Dashboard';

import Errorpage from '../pages/errorpage/Errorpage';
import Login from '../pages/forms/Login';
import Signup from '../pages/forms/Signup';
import Homepage from '../pages/homepage/Homepage';
import Protected from '../pages/protected/Protected';
import Root from '../root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/home',
        element: <Homepage />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
]);

export default router;
