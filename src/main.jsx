import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTravel from './create-travel/index.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/create-trip',
    element: <CreateTravel/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
