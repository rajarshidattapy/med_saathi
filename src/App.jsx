import React from "react"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css'

// Pages
import RegisterPage from './Pages/register.jsx'
import LoginPage from "./Pages/LoginPage.jsx"
import Home from "./Pages/Home.jsx"
import PatientImg from "./Pages/PatientData.jsx"
import PatientForm from "./Pages/PatientForm.jsx"
import Dispensary from "./Pages/Dispensary.jsx"
import Details from "./Pages/Details.jsx"
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
  <Route path="/patientData" element={<PatientImg/>} />
  <Route path="/patientForm" element={<PatientForm/>} />
  <Route path ="/dispensary" element={<Dispensary/>} />
  <Route path ="/details" element = {<Details/>}/>

  </Routes>
  </>
  )
}

export default App;
