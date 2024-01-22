import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { router } from './routes/Routes.jsx'
  
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

    <AuthProvider>

     <QueryClientProvider client={queryClient}>
      <Toaster/>

     <RouterProvider router={router}></RouterProvider>

     </QueryClientProvider>


  </AuthProvider>

    </HelmetProvider>
     
  

    
  </React.StrictMode>,
)
