import type { APIRoute } from 'astro'
import type { Movement } from 'src/env'

// In-memory store for demonstration (replace with DB in production)
let movements: Movement[] = []

export const GET: APIRoute = ({ request, params }) => {
  const url = new URL(request.url)
  const movementId = url.searchParams.get('movementId')
  const { type } = params
  if (movementId) {
    const movement = movements.find((m) => m.id === movementId)
    if (!movement) {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
    }
    return new Response(JSON.stringify(movement), { status: 200 })
  }
  if (type) {
    const filteredMovements = movements.filter((m) => m.type === type)
    return new Response(JSON.stringify(filteredMovements), { status: 200 })
  }
  return new Response(JSON.stringify(movements), { status: 200 })
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json()
  const movement: Movement = {
    id: crypto.randomUUID(),
    type: data.type,
    description: data.description,
    amount: data.amount,
    account: data.account,
    date: data.date
  }
  movements.push(movement)
  return new Response(JSON.stringify(movement), { status: 201 })
}

export const PUT: APIRoute = async ({ request }) => {
  const data = await request.json()
  const idx = movements.findIndex((m) => m.id === data.id)
  if (idx === -1) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
  }
  movements[idx] = { ...movements[idx], ...data }
  return new Response(JSON.stringify(movements[idx]), { status: 200 })
}

export const DELETE: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 })
  }
  const idx = movements.findIndex((m) => m.id === id)
  if (idx === -1) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
  }
  const deleted = movements.splice(idx, 1)[0]
  return new Response(JSON.stringify(deleted), { status: 200 })
}
