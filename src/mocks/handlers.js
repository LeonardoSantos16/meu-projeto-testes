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
    return HttpResponse.json(
      [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      { status: 200 }
    )
  }),

  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      { status: 200 }
    )
  }),

  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json()
    console.log('Recebida requisição para criar usuário:', newUser)
    return HttpResponse.json({ id: 3, ...newUser }, { status: 201 })
  }),

  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: { lat: '-37.3159', lng: '81.1496' },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: { lat: '-43.9509', lng: '-34.4618' },
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
          },
        },
      ],
      { status: 200 }
    )
  }),

  http.get('https://jsonplaceholder.typicode.com/users/:id', ({ params }) => {
    const { id } = params
    if (id === '1') {
      return HttpResponse.json(
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: { lat: '-37.3159', lng: '81.1496' },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
        { status: 200 }
      )
    }
    return HttpResponse.json({ message: 'User not found' }, { status: 404 })
  }),
]
