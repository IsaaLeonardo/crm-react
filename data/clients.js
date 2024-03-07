export async function getClients() {
  const response = await fetch(import.meta.env.VITE_API_URL + '/clients')
  const clients = await response.json()
  
  return clients
}
