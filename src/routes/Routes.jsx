import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
// import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
// import AdminRoute from './AdminRoute'
// import HostRoute from './HostRoute'
import AddRoom from '../pages/Dashboard/Host/AddRoom'


import PrivateRoute from '../PrivateRoute/PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import { getRoom } from '../api/rooms'
import SignIn from '../Components/SignUp/SignIn'
import SignUp from '../Components/SignUp/SignUp'
import ErrorPage from '../ErrorPage'
import RoomDetails from '../Rooms/RoomDetails'
import Home from '../pages/MainHomePage.jsx/Home'
import MyListings from '../pages/Dashboard/Host/MyListings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
       element: <Home />,
      },
      {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: '/login', element: <SignIn /> },
  { path: '/register', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'add-room',
        element: (
           <PrivateRoute>
           
              <AddRoom />
            
           </PrivateRoute>
        ),
      },
      {
        path: 'my-listings',
        element: (
           <PrivateRoute>
           
              <MyListings />
          
           </PrivateRoute>
        ),
      },
      // {
      //   path: 'manage-users',
      //   element: (
      //     <PrivateRoute>
      //       <AdminRoute>
      //         <ManageUsers />
      //       </AdminRoute>
      //     </PrivateRoute>
      //   ),
      //   }
      ],
    },
])
