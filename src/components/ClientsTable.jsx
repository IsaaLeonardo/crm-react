import ClientsTableRow from "./ClientsTableRow"

function ClientsTable({ clients }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Empresa</th>
          <th>Acciones</th>
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
