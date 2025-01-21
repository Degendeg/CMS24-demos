import { useState } from 'react'
import '../styles/App.css'
import testStyles from '../styles/Test.module.css'
import Manager from './Manager'

function App() {
  const [showManager, setShowManager] = useState(true)
  return (
    <>
      <div className={testStyles.wrapper}>
        <button className={testStyles.manager_btn} onClick={() => setShowManager(!showManager)}>
          {showManager ? "Unmount Manager" : "Mount Manager"}
        </button>
        {showManager ? <Manager /> : <h2>Manager is Unmounted</h2>}
      </div>
    </>
  )
}

export default App
