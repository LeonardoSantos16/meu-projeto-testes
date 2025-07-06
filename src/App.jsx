import React, { useState } from 'react'
import UserProfileCard from './components/UserProfileCard'
import './App.css'

function App() {
  const [userId, setUserId] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cartão de Perfil de Usuário</h1>
        <div className="user-selection-buttons">
          <button
            onClick={() => setUserId(1)}
            className={userId === 1 ? 'active' : ''}
          >
            Usuário 1
          </button>
          <button
            onClick={() => setUserId(2)}
            className={userId === 2 ? 'active' : ''}
          >
            Usuário 2
          </button>
          <button
            onClick={() => setUserId(99)}
            className={userId === 99 ? 'active' : ''}
          >
            Usuário Inexistente
          </button>
        </div>
      </header>
      <main>
        <UserProfileCard userId={userId} />
      </main>
    </div>
  )
}

export default App
