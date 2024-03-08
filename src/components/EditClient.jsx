import { Form, useLoaderData, useNavigate } from "react-router-dom"
import { getClient } from "../../data/clients"
import Inputs from "./Inputs"

export async function loader({ params }) {
  const client = await getClient(params.clientId)

  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Cliente no encontrado'
    })
  }

  return client
}

function EditClient() {
  const navigate = useNavigate()
  const client = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuación podrás modificar los datos de un cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={ () => navigate(-1) }
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {/* { errors && errors.map((error, index) => <Error key={ index }>{error}</Error>) } */}

        <Form method="post" noValidate>
          <Inputs cliente={ client } />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-700 cursor-pointer"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default EditClient
