import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/img/logo.png"

const Navbar = () => {

    const NavlinksLi =
    <div className='flex justify-evenly items-center'>
    <li className='text-xl text-white font-bold'><NavLink to='/' className="">HOME</NavLink> </li>
    <li className='text-xl text-white font-bold'><NavLink to='/add-product' className="">ADD PRODUCT</NavLink></li>
    <li className='text-xl text-white'><NavLink to='/cart'><i className="fa-solid fa-basket-shopping text-2xl"></i></NavLink></li>
    <li className='block md:hidden text-white'><NavLink to='/log-in' className=""><i className="fa-solid fa-right-to-bracket text-xl md:text-2xl"></i></NavLink></li>
    </div>
  return (
    <div className='container mx-auto mt-3'>
      <div className="navbar">
  <div className="flex justify-between w-full md:navbar-start">
  <Link to="/">
    <div className='flex flex-row justify-center items-center  gap-2'>
    <img src={logo} width="80px" />
    <h1 className='text-2xl text-white font-bold'>B.B.T</h1>
    </div>
    </Link>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-[wheat] w-[95vw]  rounded-box ">
        {NavlinksLi}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      {NavlinksLi}
    </ul>
  </div>
  <div className=" hidden md:flex  md:navbar-end">
    <div className='hidden md:flex justify-between'>
    <NavLink to='/log-in' className="text-white"><i className="fa-solid fa-right-to-bracket text-xl md:text-2xl"></i></NavLink>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
