import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import '../App.css'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NoPage from '../pages/NoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
