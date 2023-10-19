import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const Updateproduct = () => {
    const DataToUpdate = useLoaderData()
    const pathName = useParams().id
    console.log(pathName);
    const {Image, brandName, name, price, rating, shortDescription, type } = DataToUpdate
    const UpdateForm = e =>{
        e.preventDefault()
        const form = e.target
        const Image = e.target.Image.value
        const name = e.target.name.value
        const brandName = e.target.brandName.value
        const type = e.target.carType.value
        const price = e.target.price.value
        const rating = e.target.rating.value
        const shortDescription = e.target.ShortDescription.value
    
        
    
        const Product ={Image, name, brandName, type, price, rating, shortDescription}
        console.log(Product);
    
        fetch(`http://localhost:5000/products/${pathName}`,{
          method:"PUT",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(Product)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.modifiedCount>0){
            Swal.fire({
              title:"Product Updated successfully",
              icon:"success"
            })
          }
        })
      }
  return (
    <div>
      <h1 className="text-center text-3xl text-white mt-[50px] mb-[50px]">Update Product</h1>
      <form onSubmit={UpdateForm} className="container mx-auto   flex flex-col justify-center items-start mb-[50px] ">
        <div className='col1 w-full flex flex-col md:flex-row gap-2 justify-evenly p-[20px]'>
          <input className=" w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='text' defaultValue={Image} placeholder='Image' name='Image'/>
          <input className="w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='text' placeholder='Name' name='name' defaultValue={name} />
        </div>
        <div className='col2 w-full flex flex-col md:flex-row  gap-2 justify-evenly p-[20px]'>
          <div className=" flex justify-center md:justify-end items-center md:gap-3">
            <label className="text-2xl text-white"  htmlFor='type'>Brand:</label>
            <select defaultValue={brandName} className="p-[10px] border-2 rounded-md text-white text-center text-xl" name="brandName" id='type'>
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="Mahindra">Mahindra</option>
              <option value="Honda">Honda</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>
          </div>
          <div className=" flex justify-center md:justify-end items-center md:gap-3">
            <label className="text-2xl text-white"  htmlFor='type'>Type:</label>
            <select defaultValue={type} className="p-[10px] border-2 rounded-md text-white text-center text-xl" name="carType" id='type'>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertable">Convertable</option>
              <option value="Minivan">Minivan</option>
              <option value="Pickup Truck">Pickup Truck</option>
              <option value="Crossover">Crossover</option>
              <option value="Luxury Car">Luxury Car</option>
              <option value="Electrice  Vehicle (EV)">Electrice  Vehicle (EV)</option>
              <option value="Hybrid Car">Hybrid Car</option>
              <option value="Sports Car">Sports Car</option>
              <option value="Off-Road Vehicle">Off-Road Vehicle</option>
              <option value="Classic Car">Classic Car</option>
              <option value="Microcar">Microcar</option>
              <option value="Limousine">Limousine</option>
              <option value="Muscle Car">Muscle Car</option>
              <option value="Compact Car">Compact Car</option>
              <option value="Station Wagon">Station Wagon</option>
              <option value="Vintage Car">Vintage Car</option>
            </select>
          </div>
        </div>
        <div className="col3 w-full flex flex-col md:flex-row  gap-2 justify-evenly p-[20px]">
          <input className="w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='number' placeholder='Price' defaultValue={price} name='price'/>
          <input className="w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='number' defaultValue={rating} placeholder='Rating' name='rating'/>
        </div>
        <div className="col4 w-full flex flex-col md:flex-row  gap-2 justify-evenly p-[20px]">
          <textarea className="w-full p-[10px] border-2 rounded-md text-white text-center text-xl" placeholder="Short description" defaultValue={shortDescription} name="ShortDescription" rows="5"/>
        </div>
        <input className="btn mx-auto text-white w-[90%] md:w-full text-xl bg-green-900 hover:bg-green-900" type="submit" value="Submit"  />
      </form>
    </div>
  )
}

export default Updateproduct
