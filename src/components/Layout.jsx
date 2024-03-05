import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
      <h1 className="text-6xl">CRM - Clientes</h1>

      <Outlet />
    </div>
  )
}

export default Layout
