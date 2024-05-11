import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Layout from './Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
     <Layout></Layout>
    </BrowserRouter>
  )
}

export default App
