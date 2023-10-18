import React, { useEffect } from 'react'
import "./Banner.css"
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const Banner = () => {

    useEffect(()=>{
        Aos.init({duration:1500})
      },[])
    
  return (
    <div className='bannerSection md:h-[500px] flex  items-center'>
        <div>
            <h1 data-aos="fade-up" className='specialFont text-3xl md:text-5xl w-[85%] text-white md:w-[65%] mb-[20px]  font-[600] '>Unlick Your Dream Ride at Big Brother Toys: Your Destination for Premium Cars!</h1>
            <Link  to="/about"><button data-aos="fade-up" className='btn bg-[#FF2A39] text-white'>Learn More</button></Link>
        </div>
    </div>
  )
}

export default Banner
