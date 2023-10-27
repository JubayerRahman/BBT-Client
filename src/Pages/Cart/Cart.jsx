import { data } from 'autoprefixer'
import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContent } from '../AuthProvider/AuthProvider'

const Cart = () => {
  // const cartData = useLoaderData()
  const {user} = useContext(AuthContent)
  // const {email} = user
  // const YourCart = cartData.filter(cart=> cart.email == email)
  const [cartDetails, setCartDetails] = useState([])
  const [defalutDialog, setDefaultDialog] = useState()

  useEffect(()=>{
    fetch(`https://assignment-10-server-three-chi.vercel.app/cart?email=${user?.email}`)
    .then(res=> res.json())
    .then(data => setCartDetails(data))
  },[])

  const deleteFunc = id =>{
    fetch(`https://assignment-10-server-three-chi.vercel.app/cart/${id}`,{
      method:"DELETE"
    })
    .then(res=> res.json())
    .then(data=> {
      if(data.deletedCount){
        Swal.fire({
          title:"Deleted permanently",
          icon:"success"
        })
        const nowCartData = cartDetails.filter(cart => cart._id !==id)
        setCartDetails(nowCartData)
      }
    })
  }

  console.log(cartDetails);
  return (
    <div style={{minHeight:"100vh"}} className='text-white'>
      <div className=" m-[20px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {
          cartDetails.map(cart=>
            <div className="card bg-base-100 shadow-xl shadow-[gray]">
            <figure><img src={cart.Image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Name: {cart.name}</h2>
              <h2 className="card-title">price: {cart.price}</h2>
              <div className="card-actions justify-start">
              <button onClick={()=>{deleteFunc(cart._id)}} className='btn bg-red-400 mt-[] text-white'>Delete</button>
              </div>
            </div>
          </div>)
        }
        
      </div>
    </div>
  )
}

export default Cart
