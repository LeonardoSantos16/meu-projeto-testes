import React, { useEffect, useState } from 'react'
function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('UserList: Iniciando fetch para /api/users') // Adicione este log
    const getUser = async () => {
      try {
        const response = await fetch('/api/users')
        console.log('🚀 ~ getUser ~ response:', response.data)
        setLoading(false)
      } catch (error) {
        console.error('UserList: Erro no fetch:', error) // Use console.error para erros
        setError(error.message)
        setLoading(false)
      }
    }
    getUser()
  }, [])

  if (loading) {
    return <div>Carregando usuários...</div>
  }

  if (error) {
    return <div>Erro: {error}</div>
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList
