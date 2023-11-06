import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import Rooms from './Components/Rooms/Rooms.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/rooms',
        element: <Rooms/>
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
