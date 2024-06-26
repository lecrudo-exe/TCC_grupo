import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PageNotFound from './Pages/PageNotFound.jsx'
import Home from './Pages/Home.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/> },
        
        {path: "*", element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
