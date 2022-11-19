import { createBrowserRouter } from 'react-router-dom';
import Appointment from '../pages/appointment/Appointment';
import DashboardRoot from '../root/DashboardRoot';
import Protected from '../pages/protected/Protected';
// import Dashboard from '../pages/dashboard/Dashboard';
import Errorpage from '../pages/errorpage/Errorpage';
import Login from '../pages/forms/Login';
import Signup from '../pages/forms/Signup';
import Homepage from '../pages/homepage/Homepage';
import Root from '../root/Root';
import MyAppointment from '../pages/dashboard/MyAppointment';
import AllUsers from '../pages/dashboard/AllUsers';
import AdminRoutes from '../pages/protected/AdminRoutes';
import AddDoctors from '../pages/dashboard/AddDoctors';
import ManageDoctors from '../pages/dashboard/ManageDoctors';

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
        <DashboardRoot />
      </Protected>
    ),
    errorElement: <Errorpage />,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment />,
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: '/dashboard/add-doctors',
        element: (
          <AdminRoutes>
            <AddDoctors />
          </AdminRoutes>
        ),
      },
      {
        path: '/dashboard/manage-doctors',
        element: (
          <AdminRoutes>
            <ManageDoctors />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
