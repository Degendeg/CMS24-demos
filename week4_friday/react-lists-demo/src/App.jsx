import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import { ThreeDots } from 'react-loader-spinner'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setTodos(data))
    }

    setTimeout(() => {
      getTodos()
    }, 3000)
  }, [])

  const completeTodoHandler = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos)
  }

  return (
    <>
      {todos.length > 0 ?
        <TodoList todos={todos} completeTodoHandler={completeTodoHandler} /> :
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      }
    </>
  )
}

export default App
