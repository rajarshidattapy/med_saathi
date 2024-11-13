import React from "react"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css'

// Pages
import RegisterPage from './Pages/register.jsx'
import LoginPage from "./Pages/LoginPage.jsx"
import Home from "./Pages/Home.jsx"

//Components
import ColorSchemesExample from './Components/Navbar.jsx'

function App() {


  return (
  <>
  <ColorSchemesExample/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/register" element={<RegisterPage/>} />
  <Route path="/login" element={<LoginPage/>} />
  </Routes>
  </>
  )
}

export default App;
