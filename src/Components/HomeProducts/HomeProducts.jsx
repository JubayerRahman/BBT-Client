import { useEffect, useState } from "react"
import "./HomeProducts.css"
import { Link, NavLink, useLoaderData } from "react-router-dom"



const HomeProducts = () => {
    const brandData = useLoaderData()
  return (
    <div className="products">
      <h1 className="text-center text-3xl md:text-5xl text-white mt-[50px] mb-[50px]">Brands we provide</h1>
        <div className="flex container flex-col md:flex-row md:w-[70%] mx-auto mb-[50px]">
        <div className="flex md:w-[30%] p-[20px] flex-col text-2xl text-white brandNames">
          {
            brandData.map(brand=> 
            <a key={brand.id} href={`#${brand.id}`}>{brand.name}</a>
            )
          }
        </div>
        <div className="brandCards md:w-[75%] h-[500px] overflow-y-scroll scroll-m-5 p-[10px] gap-5">
        {
            brandData.map(brand => 
            <div key={brand.id} id={brand.id} className="card bg-base-100 shadow-2xl shadow-gray-500 mb-[50px]">
            <figure className="h-[300px] bg-white" ><img src={brand.image} alt={brand.name}/></figure>
            <div className="text-white p-[30px] flex gap-5 items-center">
                <div>
                    <h2 className="card-title">{brand.name}</h2>
                    <p>{brand.description}</p>
                </div>
              <div className=" w-[50%] h-[100px]">
                <Link className="h-full w-[100%]" to={`${brand.id}`}>
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
