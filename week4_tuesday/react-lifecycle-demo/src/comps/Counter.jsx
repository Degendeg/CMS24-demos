import { useEffect } from "react"

const Counter = ({ count }) => {
  useEffect(() => {
    console.log("Counter comp is mounted/updated")
    document.title = `Count ${count}`
    return () => {
      console.log("Count comp is unmounted")
    }
  }, [count]) // Lyssnar på `count`

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  )
}
export default Counter