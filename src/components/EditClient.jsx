import { getClient } from "../../data/clients"

export async function loader({ params }) {
  const client = await getClient(params.clientId)

  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Cliente no encontrado'
    })
  }

  return params
}

function EditClient() {
  return (
    <div>
      <h1>EditClient</h1>      
    </div>
  )
}

export default EditClient
