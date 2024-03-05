import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'

const router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    children: [
      { index: true,
        element: <h1>Inicio</h1>
      },
      {
        path: '/clientes/nuevo',
        element: <h1>Nuevo Cliente</h1>
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
