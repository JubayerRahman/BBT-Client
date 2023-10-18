import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContent } from '../AuthProvider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import auth from '../FIrebase/Firebase.config'
import Swal from 'sweetalert2'

const Registration = () => {
  const {user, Register}= useContext(AuthContent)
  const navigate = useNavigate()
  console.log(user);
  const [showIcon, setshowIcon] = useState( "fa-solid fa-eye-slash")
  const [passType, setpassType] = useState("password")
  const ShowFunc =()=>{
    if(showIcon == "fa-solid fa-eye-slash"){
      setshowIcon("fa-solid fa-eye")
      setpassType("text")
    }
    if(showIcon == "fa-solid fa-eye"){
      setshowIcon("fa-solid fa-eye-slash")
      setpassType("password")
    }
  }
  const LoginFormFunc = e =>{
    e.preventDefault();
    const name = e.target.name .value
    const email = e.target.email.value
    const photoUrl = e.target.photoUrl.value
    const password = e.target.password.value

    if(name=="" || email =="" || photoUrl =="" || password ==""){
      return Swal.fire({
        title:"Fill all the Fields",
        icon:"error"
      })
    }

    if(password.length<6){
      return Swal.fire({
        title:"Your Password is small",
        icon:"error"
      })
    }
    if(!/[A-Z]/.test(password)){
      return Swal.fire({
        title:"Add capital letter in your passwoed",
        icon:"error"
      })
    }
    const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/
    if(!specialCharacter.test(password)){
      return Swal.fire({
        title:"Add special character in your passwoed",
        icon:"error"
      })
    }

    Register(email, password)
    .then(result =>{
      updateProfile(auth.currentUser,{
        displayName:`${name}`,
        photoURL: `${photoUrl}`
      })
      .then( result=>{
        console.log(result);
        Swal.fire({
          title:"User createrd successfully",
          icon:"success"
        })
      })
      .catch(error=>{
        Swal.fire({
          title:`${error.message}`,
          icon: "error"
        })
      } )
      navigate("/")
      setTimeout(()=>{
        window.location.reload()
    },2500)
    })
    .catch(error=>{
      Swal.fire({
        title:`${error.message}`,
        icon: "error"
      })
    })
  }
  return (
    <div>
      <div className='LloginField h-[500px] opacity-[0.8] '></div>
      <div className='absolute loginForm top-[20vh] bg-black p-[20px] md:w-[50vw] left-[5%] right-[5%] md:left-[25%] md:right-[25%] rounded-xl flex flex-col gap-3'>
        <h1 className='text-3xl text-white font-[500] text-center'>Register Now</h1>
        
        <form onSubmit={LoginFormFunc} className='w-full flex flex-col gap-2'>
          <div className='flex flex-col md:flex-row gap-2'>
            <input className=" w-full p-[10px] border-2 rounded-md text-white text-center text-xl" name='name' type='text' placeholder='Your Name' />
            <input className=" w-full p-[10px] border-2 rounded-md text-white text-center text-xl" name='email' type='email' placeholder='Your Email' />
          </div>
          <input className=" w-full p-[10px] border-2 rounded-md text-white text-center text-xl" name='photoUrl' type='text' placeholder='Your Photo url' />
          <div>
            <input className=" relative w-full p-[10px] border-2 rounded-md text-white text-center text-xl" name='password' type={passType} placeholder='Your Password' />
            <button type='button' className='absolute right-[10%] md:right-[5%] bottom-[30%] md:bottom-[35%]' onClick={ShowFunc}><i className={showIcon}></i></button>
          </div>
          <div className='flex'>
          <input className="btn mx-auto text-white w-[63%] md:w-[73%] text-xl bg-green-900 hover:bg-green-900"   value="Register" type='submit' />
          </div>
          <h1>Already have an account? Go <Link className='font-bold text-white' to="/log-in">Log in</Link></h1>
        </form>
      </div>
    </div>
  )
}

export default Registration
