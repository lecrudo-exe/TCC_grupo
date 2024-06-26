import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from './pages/Home.jsx'
import PgAfiliado from './pages/PgAfiliado.jsx'
import PgCliente from './pages/PgCliente.jsx'
import PgLogin from './pages/PgLogin.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import PgPerfilAfiliado from './pages/PgPerfilAfiliado.jsx'
import PgPerfilCliente from './pages/PgPerfilCliente.jsx'



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/> },
        {path: "pgAfiliado", element: <PgAfiliado/>},
        {path: "pgCliente", element: <PgCliente/>},
        {path: "pgLogin", element: <PgLogin/>},
        {path: "pgPerfilAfiliado", element: <PgPerfilAfiliado/>},
        {path: "pgPerfilCliente", element: <PgPerfilCliente/>},
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