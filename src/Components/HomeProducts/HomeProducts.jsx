import { useContext, useEffect, useState } from "react"
import "./HomeProducts.css"
import { Link, NavLink, useLoaderData } from "react-router-dom"
import { AuthContent } from "../../Pages/AuthProvider/AuthProvider"



const HomeProducts = () => {
    const brandData = useLoaderData()
    const {mode} = useContext(AuthContent)
  return (
    <div className={`products ${mode}`}>
      <h1 className="text-center text-3xl md:text-5xl mt-[50px] mb-[50px]">Brands we provide</h1>
        <div className="flex  flex-col justify-between md:flex-row  md:m-[20px] mb-[50px]">
        <div className="flex md:w-[25%]  md:border-r-2  flex-col gap-[10px] text-3xl brandNames">
          {
            brandData.map(brand=> 
            <a className="border-b-2 p-[15px] " key={brand.id} href={`#${brand.id}`}>{brand.name}</a>
            )
          }
        </div>
        <div className="brandCards flex flex-col  items-center container mx-auto h-[500px] overflow-y-scroll scroll-m-5 p-[10px] gap-5">
        {
            brandData.map(brand => 
            <div key={brand.id} id={brand.id} className="card w-full md:w-[60%] bg-base-100 shadow-2xl shadow-gray-500 mb-[50px]">
            <figure className="h-[300px] bg-white" ><img src={brand.image} alt={brand.name}/></figure>
            <div className="text-white p-[30px] flex gap-5 items-center">
                <div>
                    <h2 className="card-title">{brand.name}</h2>
                    <p>{brand.description}</p>
                </div>
              <div className=" w-[50%] h-[100px]">
                <Link className="h-full w-[100%]" to={`${brand.name}`}>
                    <button className="btn bg-[#FF2A39] text-white text-3xl  h-[100%] w-[100%]"><i className="fa-solid fa-arrow-right"></i></button>
                </Link>
              </div>
            </div>
          </div>)
        }
        </div>
        </div>
    </div>
  )
}

export default HomeProducts
