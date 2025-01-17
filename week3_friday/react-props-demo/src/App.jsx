import { useEffect, useState } from 'react'
import './App.css'
import Child from './Child'

function App() {
  const [posts, setPosts] = useState(null)

  const person = {
    name: 'Sebastian',
    confused: true,
    role: 'Educator',
    age: 35
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <>
      <h1>Hello from App.jsx</h1>
      <Child person={person} posts={posts} item="This is a blog article" />
    </>
  )
}

export default App
