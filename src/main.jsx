import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import Rooms from './Components/Rooms/Rooms.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
// import RoomDetails from './Components/Rooms/RoomDetails.jsx'
import ErrorPage from './ErrorPage.jsx'
import MyBooking from './Components/Bookings/MyBooking.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import RoomDetails from './Rooms/RoomDetails.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import SignIn from './Components/SignUp/SignIn.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement : <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/rooms',
        element: <Rooms/>
      },
      // {
      //   path: '/detail/:_id',
      //   element: <RoomDetails/>,
      //   loader: ({params})=> fetch(`https://backend-nine-liart.vercel.app/rooms/${params._id}`)
      // },
      {
        path: '/bookings',
        element: <PrivateRoute>
          <MyBooking/>
        </PrivateRoute>,
        loader: ()=> fetch('https://backend-nine-liart.vercel.app/bookings')
      },
      {
        path: '/room/:id',
        element: <RoomDetails></RoomDetails>
      },
     
      {
        path: '/login',
        element: <SignIn/>
      },
      
      {
        path: '/register',
        element: <SignUp/>
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> <AuthProvider>
            <RouterProvider router={router}></RouterProvider>


  </AuthProvider>
  

    
  </React.StrictMode>,
)
