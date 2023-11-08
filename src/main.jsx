import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import Rooms from './Components/Rooms/Rooms.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import RoomDetails from './Components/Rooms/RoomDetails.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import ErrorPage from './ErrorPage.jsx'
import MyBooking from './Components/Bookings/MyBooking.jsx'



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
      {
        path: '/detail/:_id',
        element: <RoomDetails/>,
        loader: ({params})=> fetch(`http://localhost:5000/rooms/${params._id}`)
      },
      {
        path: '/bookings',
        element: <MyBooking/>,
        loader: ()=> fetch('http://localhost:5000/bookings')
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
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
