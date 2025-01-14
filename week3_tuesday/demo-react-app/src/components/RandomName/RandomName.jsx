import { useEffect, useState } from "react"
import './RandomName.css'

const RandomName = () => {
  const [names] = useState([
    'John', 'Mary', 'Bob', 'Loke', 'Zeb', 'Tom', 'Ella'
  ])
  const [randomName, setRandomName] = useState('')

  // används för att hantera life cycle events
  useEffect(() => {
    setRandomName(names[Math.floor(Math.random() * names.length)])
  }, []) // dependency array, om tom så kommer den att köras när komponenten mountas
  return (
    <>
      <h1 className="cursor-pointer"
        onClick={() => setRandomName(names[Math.floor(Math.random() * names.length)])}>
        My name is {randomName} 👋
      </h1>
    </>
  )
}
export default RandomName