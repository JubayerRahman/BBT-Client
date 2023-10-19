import { useLoaderData } from "react-router-dom"

const SingleProduct = () => {
    const DataDetails= useLoaderData()
    const {Image, name, brandName, price, rating, shortDescription, type} = DataDetails
    console.log(DataDetails);
  return (
    <div className="container mx-auto mt-[50px] mb-[50px] flex flex-col md:flex-row gap-[10px] text-white">
      <img className="w-full md:w-1/2" src={Image} />
      <div className="border-l-[2px] border-[orange] pl-[10px]">
        <h1 className="text-2xl text-white font-bold">Name: {name}</h1>
        <h1 className="text-xl text-white"><span className="text-xl font-bold text-white">Brand: </span>{brandName}</h1>
        <h1 className="text-xl text-white"><span className="text-xl font-bold text-white">Price: </span>{price}</h1>
        <h1 className="text-xl text-white"><span className="text-xl font-bold text-white">Rating: </span>{rating}</h1>
        <h1 className="text-xl text-white"><span className="text-xl font-bold text-white">Type: </span>{type}</h1>
        <h1 className="text-xl text-white"><span className="text-xl font-bold text-white">Short description: </span>{shortDescription}</h1>
        <div className="flex gap-[10px] items-center mt-[20px]">
            <h1 className="text-2xl">Add to:</h1>
            <button className="text-[orange]"><i className="fa-solid fa-basket-shopping text-2xl"></i></button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
