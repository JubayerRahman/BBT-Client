import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Cart = () => {
  const cartData = useLoaderData()
  const [cartDetails, setCartDetails] = useState(cartData)
  const [defalutDialog, setDefaultDialog] = useState()

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
    <div style={{minHeight:"100vh"}} className='text-white '>
      <div className=" m-[20px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {
          cartDetails.map(cart=>
          <div className=' w-full  mt-[50px] mb-[50px] flex flex-col md:flex-row justify-between md:items-center border-2 rounded-xl p-[20px]' key={cart._id}>
            <div className='flex flex-col md:flex-row gap-[15px] '>
            <img className='w-[250px]  md:w-[150px] rounded-sm' src={cart.Image} alt={cart.name}/>
              <div>
                <h1>{cart.name}</h1>
                <p>{cart.brandName}</p>
                <p>{cart.price}</p>
              </div>
            </div>
            <button onClick={()=>{deleteFunc(cart._id)}} className='btn bg-red-400 mt-[] text-white'>Delete</button>
          </div>)
        }
      </div>
    </div>
  )
}

export default Cart
