import React, { useContext, useState } from 'react'
import "./Login.css"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContent } from '../AuthProvider/AuthProvider'
import Swal from 'sweetalert2'

const LogIn = () => {
  const {SignIn, googleSignIn} = useContext(AuthContent)
  const location = useLocation()
  const navigator = useNavigate()
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
    const emai = e.target.email.value
    const password = e.target.password.value

    SignIn(emai, password)
    .then(result=>{
      if(result.user){
        Swal.fire({
          title:"Loggied in successfully",
          icon: "success"
        })
        setTimeout(()=>{
        if(location.state){
          return navigator(location.state)
        }
        navigator("/")
      },2000)

      }
    })
    .catch(error=>{
      Swal.fire({
        title:`${error.message}`,
        icon:"error"
      })
    })
  }

  const googleForm =()=>{
    googleSignIn()
    .then(result=>{
      if(result.user){
        Swal.fire({
          title:"Loggid in with google successfully",
          icon:"success"
        })
        setTimeout(()=>{
          if(location.state){
            return navigator(location.state)
          }
          navigator('/')
        },2000)
      }
    })
    .catch(error=>{
      Swal.fire({
        title:`${error.message}`,
        icon:"error"
      })
    })
  }

  return (
    <div className='relative'>
      <div className='LloginField h-[500px] opacity-[0.8] '></div>
      <div className='absolute loginForm top-[10vh] bg-black p-[20px] md:w-[50vw] left-[5%] right-[5%] md:left-[25%] md:right-[25%] rounded-xl flex flex-col gap-3'>
        <h1 className='text-3xl text-white font-[500] text-center'>Log in</h1>
        
        <form onSubmit={LoginFormFunc} className='w-full flex flex-col gap-2'>
          <input className=" w-full p-[10px] border-2 rounded-md text-white text-center text-xl" name='email' type='email' placeholder='Your Email' />
          <div>
            <input className=" relative w-full p-[10px] border-2 rounded-md text-white text-center text-xl" name='password' type={passType} placeholder='Your Password' />
            <button type='button' className='absolute right-[10%] md:right-[2vw] bottom-[43%]' onClick={ShowFunc}><i className={showIcon}></i></button>
          </div>
          <div className='flex'>
          <input className="btn mx-auto text-white w-[63%] md:w-[73%] text-xl bg-green-900 hover:bg-green-900" type="submit" value="Login"  />
          <button onClick={googleForm} className="btn mx-auto text-white w-[35%] md:w-[25%] text-xl bg-green-900 hover:bg-green-900"  value="Google">Google</button>
          </div>
          <h1>Dont have a account? Go <Link className='font-bold text-white' to="/registration">Register</Link></h1>
        </form>
      </div>
    </div>
  )
}

export default LogIn
