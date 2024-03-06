import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h1 className="text-2xl text-white font-black text-center">CRM - Clientes</h1>

        <nav className="mt-10">
          <ul>
            <li>
              <Link
                to="/"
                className="block text-xl text-white hover:text-blue-200"
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                to="/clientes/nuevo"
                className="block text-xl text-white hover:text-blue-200"
              >
                Nuevo Cliente
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 overflow-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
