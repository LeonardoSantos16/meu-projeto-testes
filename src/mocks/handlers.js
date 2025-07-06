import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  http.get('/api/users', () => {
    // Assegure-se que está usando HttpResponse.json()
    // e que o primeiro argumento é um array ou objeto válido.
    return HttpResponse.json(
      [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      { status: 200 } // O status 200 está correto, mas o *corpo* é o problema.
    )
  }),

  http.get('https://jsonplaceholder.typicode.com/users', () => {
    // Assegure-se que está usando HttpResponse.json()
    // e que o primeiro argumento é um array ou objeto válido.
    return HttpResponse.json(
      [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      { status: 200 } // O status 200 está correto, mas o *corpo* é o problema.
    )
  }),

  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json()
    console.log('Recebida requisição para criar usuário:', newUser)
    return HttpResponse.json({ id: 3, ...newUser }, { status: 201 })
  }),
]
