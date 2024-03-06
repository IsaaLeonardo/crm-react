function ClientsTableRow({ client }) {
  const { nombre, telefono, email, empresa } = client

  return (
    <tr>
      <td>{nombre}</td>
      <td>{telefono}</td>
      <td>{email}</td>
      <td>{empresa}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  )
}

export default ClientsTableRow
