import React, { useEffect, useState } from 'react'
import SliderAdvertisement from '../../Components/SliderAdvertisement/SliderAdvertisement'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'

const Brands = () => {
  const pathName = useParams().id
  console.log(pathName);
  const [brandShow, setBrandShow] = useState([])
  const [productShow, setProductShow] = useState("hidden")
  // const [noDataDialog, setnoDataDialog] = useState()
  useEffect(()=>{
    fetch(`https://assignment-10-server-three-chi.vercel.app/products?brand=${pathName}`)
    .then(res => res.json())
    .then(data => {
      setBrandShow(data)
      if (data.length ==0) {
        setProductShow("flex p-[50px] text-3xl text-white")
        // setProductShow("hidden")
      }
      console.log(data);
    })
  },[])
  // console.log(brandShow);

//  useEffect(()=>{
//   console.log(brandShow.length);
//   if(brandShow.length>0){
//     setProductShow("hidden")
//   }
//  },[brandShow])

  
  
  return (
    <div>
      <SliderAdvertisement/>
      <h1 className='text-center text-white text-4xl mt-[50px] mb-[50px] '>Availabe products</h1>
      <h1 className={productShow}><span className='text-[red] mr-[5px]'>|</span> No, products are available to show</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-[50px]">
        {
           brandShow.map(car =><ProductCard key={car._id} car={car} />)
        }
      </div>
    </div>
  )
}

export default Brands
