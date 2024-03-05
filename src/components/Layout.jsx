import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h1 className="text-white font-black text-center">CRM - Clientes</h1>
      </aside>

      <main className="md:w-3/4 p-10 overflow-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
