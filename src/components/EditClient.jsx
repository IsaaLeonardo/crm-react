import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom"
import { getClient, updateClient } from "../../data/clients"
import Inputs from "./Inputs"
import Error from "./Error"

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

export async function action({ request, params }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const email = formData.get('email')
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

  // Validate data
  const errors = []

  if (Object.values(data).includes('')) {
    errors.push('Todos los campos son obligatorios')
  }

  if (!regex.test(email)) {
    errors.push('El email no es válido')
  }

  if (errors.length) {
    return errors
  }

  // Send data to the server
  await updateClient(params.clientId, data)

  return redirect('/')
}

function EditClient() {
  const navigate = useNavigate()
  const errors = useActionData()
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
        { errors && errors.map((error, index) => <Error key={ index }>{error}</Error>) }

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
