import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home, { loader as homeLoader } from './pages/Home'
import NewClient, { action as newClientAction } from './pages/NewClient'
import ErrorPage from './components/ErrorPage'
import EditClient, { loader as editClientLoader } from './components/EditClient'

const router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clientId/editar',
        element: <EditClient />,
        loader: editClientLoader,
        errorElement: <ErrorPage />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
