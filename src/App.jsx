import { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import "../src/Theme.css"
import { AuthContent } from './Pages/AuthProvider/AuthProvider'

function App() {
  const [count, setCount] = useState(0)
  const {mode} = useContext(AuthContent)
  const lacation = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[lacation])

  return (
    <div className={`${mode} bbtMai`}>
    <Navbar/>
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
