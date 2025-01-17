import { useRef, useState } from 'react'
import './App.css'
import Child from './Child'

// Huvudkomponenten App
function App() {
  const [message, setMessage] = useState('This is a message') // State för att hantera meddelandet
  const textRef = useRef() // Ref för att manipulera DOM-element direkt

  // Ändrar texten i knappen och refererat element
  const changeTextHandler = (event) => {
    event.target.innerText = 'Hello World' // Ändrar knappens text
    textRef.current.innerText = 'Hello World' // Ändrar texten via ref
  }

  // Visar en varning om inputvärdet är "confused"
  const confusionHandler = (event) => {
    if (event.target.value === 'confused') {
      alert('you are confused bro')
    }
  }

  return (
    <>
      <h1>This is App.jsx</h1> {/* Titel för huvudkomponenten */}
      <button onClick={changeTextHandler}>Click to change text 👋</button> {/* Knapp för att ändra text */}
      <br />
      <input type="text" onInput={confusionHandler} /> {/* Inputfält för att övervaka användarens inmatning */}
      <p>{message}</p> {/* Visar nuvarande meddelande från state */}
      <p ref={textRef}>Lorem ipsum dolor et amet</p> {/* Paragraf som manipuleras med useRef */}
      <hr />
      <Child changeTextHandler={changeTextHandler} setMessage={setMessage} /> {/* Barnkomponent med ärvda props */}
    </>
  )
}

export default App