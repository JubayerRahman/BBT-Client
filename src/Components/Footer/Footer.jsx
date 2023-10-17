import React from 'react'
import logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='absolute bottom-0 pt-[20px] pb-[20px] w-full border-t-2 border-[rgb(245,222,179)]'>
      <footer className="flex flex-col gap-5 md:flex-row items-center justify-evenly"> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <h1>Copyright © 2023 - All right reserved</h1>
  </nav>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <Link to="/">
        <img className='w-[100px]' src={logo}/>
    </Link>
  </nav>
  <nav className="flex gap-3 md:place-self-center md:justify-self-end">
    <Link to="/">Home</Link>
    <Link to="/">Add Product</Link>
    <Link to="/">Cart</Link>
  </nav>
</footer>
    </div>
  )
}

export default Footer
