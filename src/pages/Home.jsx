import { useLoaderData } from "react-router-dom"
import ClientsTable from "../components/ClientsTable";

export function loader() {
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
  ];

  return clientes
}

function Home() {
  const clients = useLoaderData()

  return (
    <>
      <h1>Clientes</h1>

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
