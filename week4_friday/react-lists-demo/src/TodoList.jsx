const TodoList = ({ todos, completeTodoHandler }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <div className="todo-wrapper" key={todo.id}>
          <li><strong>Titel:</strong> {todo.title}</li>
          <li><strong>UserId:</strong> {todo.userId}</li>
          <li>
            {todo.completed ?
              <span style={{ color: 'green' }}>Completed ✅</span> :
              <span style={{ color: 'red' }}>Incomplete ❌</span>
            }
          </li>
          <br />
          <button onClick={() => completeTodoHandler(todo.id)}>
            {todo.completed ? 'Incomplete' : 'Complete'}
          </button>
        </div>
      ))}
    </ul>
  )
}
export default TodoList