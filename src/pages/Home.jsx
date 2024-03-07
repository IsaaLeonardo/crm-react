import { useLoaderData } from "react-router-dom"
import ClientsTable from "../components/ClientsTable";
import { getClients } from "../../data/clients";

export async function loader() {
  const clients = await getClients()

  return clients
}

function Home() {
  const clients = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      { clients.length ? (
          <ClientsTable clients={clients}/>
        ) : (
          <p className="text-center mt-10">
            No hay clientes aún
          </p>
        )
      }
    </>
  )
}

export default Home
