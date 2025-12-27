import { useState } from 'react'
import Navbar from './components/NavBar/Navbar' 
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import AboutUs from './pages/AboutUs/About'
import Contact from './pages/ContactUs/Contact'
import Search from './Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/HomePage" element={<HomePage />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} /> 

      </Routes>

      
    </BrowserRouter>

  )
}

export default App