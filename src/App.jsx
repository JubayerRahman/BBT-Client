import { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import "../src/Theme.css"
import { AuthContent } from './Pages/AuthProvider/AuthProvider'

function App() {
  const {mode} = useContext(AuthContent)
  

  return (
    <div className={`${mode} bbtMai`}>
    <Navbar/>
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
