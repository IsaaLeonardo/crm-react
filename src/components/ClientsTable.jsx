import ClientsTableRow from "./ClientsTableRow"

function ClientsTable({ clients }) {
  return (
    <table className="w-full bg-white shadow mt-5 table-auto">
      <thead className="bg-blue-800 text-white">
        <tr>
          <th className="p-2">Nombre</th>
          <th className="p-2">Contacto</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {
          clients.map(client => (
            <ClientsTableRow key={client.id} client={client}/>
          ))
        }
      </tbody>
    </table>
  )
}

export default ClientsTable
