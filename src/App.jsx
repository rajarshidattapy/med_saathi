import React from "react"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css'

// Pages
import RegisterPage from './Pages/register.jsx'
import LoginPage from "./Pages/LoginPage.jsx"


function App() {


  return (
  <>
  <Routes>
  <Route path="/" element={<RegisterPage/>} />
  <Route path="/login" element={<LoginPage/>} />
  </Routes>
  </>
  )
}

export default App;
