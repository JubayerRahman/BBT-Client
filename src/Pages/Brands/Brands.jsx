import React, { useEffect, useState } from 'react'
import SliderAdvertisement from '../../Components/SliderAdvertisement/SliderAdvertisement'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'

const Brands = () => {
  const pathName = useParams().id
  const carData = useLoaderData()
  console.log(carData);
  const [brandShow, setBrandShow] = useState([])
  const [productShow, setProductShow] = useState("flex p-[50px] text-3xl text-white")
  const [noDataDialog, setnoDataDialog] = useState()
  useEffect(()=>{
    const SelectCars = carData.filter(car => car.brandName ===pathName)
    setBrandShow(SelectCars)
    if(brandShow.length>0){
      setProductShow("hidden")
    }
  },[])
  console.log(brandShow);

  
  
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
