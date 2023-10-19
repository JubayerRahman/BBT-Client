import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContent } from '../../Pages/AuthProvider/AuthProvider';

const ProductCard = ({car}) => {
  const {Image, name, brandName, price, rating, shortDescription, type, _id}= car
  const navigator = useNavigate()
  const goToUpdate = id =>{
    navigator('/updateproduct')
  }
  return (
    <div className='m-[20px] md:m-[0px]'>
      <div className="card card-side bg-black shadow-xl">
  <figure className='w-[100%] md:w-1/2 ' 
  style={
    {backgroundImage:`url(${Image})`, 
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"}
    }>
    {/* <img src={Image} alt="Movie"/> */}
    </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Brand: {brandName}</p>
    <p>Price: {price}</p>
    <p>Rating: {rating}</p>
    <p>Type: {type}</p>
    <div className="card-actions ">
      <Link to={`${_id}`}><button className="btn btn-primary">Details</button></Link>
      <Link to={`/updateproduct/${_id}`}>  
        <button onClick={()=>{goToUpdate(_id)}} className="btn btn-primary">Update</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductCard
