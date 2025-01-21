import { useState, useEffect } from "react"
import testStyles from '../styles/Test.module.css'
import Counter from "./Counter"

const Manager = () => {
  const [count, setCount] = useState(0)
  const [showCounter, setShowCounter] = useState(true)

  useEffect(() => {
    console.log("Manager mounted")

    return () => { // when component dies
      console.log("Manager unmounted")
    }
  }, []) // empty dependency array = when component is born
  return (
    <div className={testStyles.manager_wrapper}>
      <h1>React Lifecycle Manager</h1>
      <button
        onClick={() => setShowCounter(!showCounter)}
        className={testStyles.manager_show_btn}
      >
        {showCounter ? "Unmount Counter" : "Mount Counter"}
      </button>

      {showCounter ? (
        <Counter count={count} />
      ) : (
        <h2>The Counter is Unmounted</h2>
      )}

      {showCounter && (
        <button
          onClick={() => setCount(count + 1)}
          className={testStyles.manager_incr_btn}
        >
          Increase Count
        </button>
      )}
    </div>
  )
}
export default Manager