import { useState } from 'react'
import Navbar from './components/NavBar/Navbar' 
import { BrowserRouter,Route,Routes } from 'react-router-dom'  //Enables client-side routin,BrowserRouter
//BrowserRoute  → wraps the app and manages URL history
//routes-container for all routes
//routes-maps a URL path to a component
import HomePage from './pages/Home/Home'
import AboutUs from './pages/AboutUs/About'
import Contact from './pages/ContactUs/Contact'
import Search from './Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyPage from "./pages/properties/PropertyPage";


function App() {//root component
  

  return (
    <BrowserRouter> {/*Wraps the entire app / Enables navigation without page reloads*/}
      <Navbar />{/*Always visible in every route*/}
      <Routes>
        <Route path="/" element={<HomePage />} />  {/*default root/opens when user visits*/}
        <Route path="/HomePage" element={<HomePage />} />  {/*Alternative path to the same page*/}
        <Route path="/about" element={<AboutUs />} /> {/*load about us page*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/properties/:id" element={<PropertyPage />} />
        

      </Routes>

      
    </BrowserRouter>

  );
}

export default App;

