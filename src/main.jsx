import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import NewClient from './pages/NewClient'

const router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    children: [
      { index: true,
        element: <Home />
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
