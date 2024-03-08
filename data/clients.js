export async function getClients() {
  const response = await fetch(import.meta.env.VITE_API_URL + '/clients')
  const clients = await response.json()
  
  return clients
}

export async function getClient(id) {
  const response = await fetch(import.meta.env.VITE_API_URL + '/clients/' + id)

  if (!response.ok) {
    return {}
  }

  return await response.json()
}

export async function createClient(request) {
  const response = await fetch(import.meta.env.VITE_API_URL + '/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })

  return response.json()
}
