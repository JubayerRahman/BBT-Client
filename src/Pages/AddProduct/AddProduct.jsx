

const AddProduct = () => {

  const AddForm = e =>{
    e.preventDefault()
    const form = e.target
    const Image = e.target.Image.value
    const name = e.target.name.value
    const brandName = e.target.brandName.value
    const type = e.target.type.value
    const price = e.target.price.value
    const rating = e.target.rating.value
    const shortDescription = e.target.ShortDescription.value

    const Product ={Image, name, brandName, type, price, rating, shortDescription}
    console.log(Product);
  }

  return (
    <div>
      <h1 className="text-center text-3xl text-white mt-[50px] mb-[50px]">Add Product</h1>
      <form onSubmit={AddForm} className="container mx-auto   flex flex-col justify-center items-start mb-[50px] ">
        <div className='col1 w-full flex flex-col md:flex-row gap-2 justify-evenly p-[20px]'>
          <input className=" w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='text' placeholder='Image' name='Image'/>
          <input className="w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='text' placeholder='Name' name='name'/>
        </div>
        <div className='col2 w-full flex flex-col md:flex-row  gap-2 justify-between p-[20px]'>
          <input className="w-full md:w-[85%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='text' placeholder='Brand Name' name='brandName'/>
          <div className=" flex justify-center md:justify-end items-center md:gap-3">
            <label className="text-2xl text-white"  htmlFor='type'>Type:</label>
            <select className="p-[10px] border-2 rounded-md text-white text-center text-xl" name="type" id='type'>
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
          <input className="w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='number' placeholder='Price' name='price'/>
          <input className="w-full md:w-[50%] p-[10px] border-2 rounded-md text-white text-center text-xl" type='number' placeholder='Rating' name='rating'/>
        </div>
        <div className="col4 w-full flex flex-col md:flex-row  gap-2 justify-evenly p-[20px]">
          <textarea className="w-full p-[10px] border-2 rounded-md text-white text-center text-xl" placeholder="Short description" name="ShortDescription" rows="5"/>
        </div>
        <input className="btn mx-auto text-white w-[90%] md:w-full text-xl bg-green-900 hover:bg-green-900" type="submit" value="Submit"  />
      </form>
    </div>
  )
}

export default AddProduct
