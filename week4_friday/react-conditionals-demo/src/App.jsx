import { useState } from 'react'
import './App.css'
import Demo from './Demo'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [user, setUser] = useState('')
  return (
    <div className="wrapper">
      <div className="container">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logged in?</button>
        Username? <input type="text" onInput={(e) => setUser(e.target.value)} />
      </div>
      <Demo user={user} isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App
