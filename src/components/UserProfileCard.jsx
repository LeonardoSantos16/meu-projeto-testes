import React, { useEffect, useState } from 'react'
import './UserProfileCard.css'

function UserProfileCard({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        setUser(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [userId])

  if (loading) {
    return <div className="user-profile-card loading">Carregando perfil...</div>
  }

  if (error) {
    return (
      <div className="user-profile-card error">
        Erro ao carregar perfil: {error}
      </div>
    )
  }

  if (!user) {
    return (
      <div className="user-profile-card no-user">Usuário não encontrado.</div>
    )
  }

  return (
    <div className="user-profile-card">
      <div className="user-header">
        <h2 className="user-name">{user.name}</h2>
        <p className="user-username">@{user.username}</p>
      </div>
      <div className="user-details">
        <p>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <p>
          <strong>Telefone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong>{' '}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
        <div className="user-address">
          <h3>Endereço:</h3>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
        <div className="user-company">
          <h3>Empresa:</h3>
          <p>
            <strong>Nome:</strong> {user.company.name}
          </p>
          <p>
            <strong>Slogan:</strong> "{user.company.catchPhrase}"
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
