import { useState } from 'react'
import Navbar from './components/NavBar/Navbar' 
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter> 
      <Navbar />
      
    </BrowserRouter>

  )
}

export default App