import { useState } from 'react'
import './App.css'
import Child from './comps/Child'

function App() {
  const [name, setName] = useState('Mario')
  const updateNameHandler = () => {
    const names = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Toad", "Wario", "Waluigi", "Daisy", "Rosalina", "Donkey Kong", "Koopa Troopa", "Shy Guy", "King Boo", "Bowser Jr."]
    const randomName = names[Math.floor(Math.random() * names.length)]
    setName(randomName)
  }
  return (
    <>
      <h1>App 👪</h1>
      <p>Name: {name}</p>
      <button onClick={updateNameHandler}>Random name</button>
      <hr />
      <Child setName={setName} />
    </>
  )
}

export default App
