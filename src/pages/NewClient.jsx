import { Form, redirect, useActionData, useNavigate } from "react-router-dom"
import Inputs from "../components/Inputs"
import Error from "../components/Error"
import { createClient } from "../../data/clients"

export async function action({ request }) {
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
  await createClient(data)

  return redirect('/')
}

function NewClient() {
  const navigate = useNavigate()
  const errors = useActionData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

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
          <Inputs />

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

export default NewClient
