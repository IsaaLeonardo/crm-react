export async function loader({ params }) {
  console.log(params)

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
