import React, { useContext } from 'react'
import Banner from '../../Components/Banner/Banner'
import HomeProducts from '../../Components/HomeProducts/HomeProducts'
import SliderAdvertisement from '../../Components/SliderAdvertisement/SliderAdvertisement'
import { AuthContent } from '../AuthProvider/AuthProvider'

const Home = () => {
  const {data} = useContext(AuthContent)

  console.log(data);
  return (
    <div>
      <Banner/>
      <div className="">
        <div className="bg-black p-[20p]">
          <h1 className='text-center text-3xl md:text-5xl text-white mb-[25px] pt-[50px]'>About us:</h1>
          <p className='mx-auto text-white pb-[25px] text-center'>Big Brother Toys stands as a symbol of automotive excellence. As a leading car-selling company, we take pride in offering a handpicked range of vehicles that transcend ordinary drives. With our expertly curated selection, we aim to fulfill your aspirations for exceptional cars. Welcome to the world of Big Brother Toys, where automotive dreams come true.</p>
        </div>
        <div className='bg-black p-[20px] pb-[50px] '>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className='text-white'>
          <i className="fa-solid fa-truck text-5xl mb-[15px]"></i>
            <h1 className='font-[500] text-3xl mb-[20px]'>Free Shipping</h1>
            <p>Enjoy the perks of free shipping on your dream car. We're dedicated to making your buying experience seamless.</p>
          </div>
          <div className='text-white'>
          <i className="fa-solid fa-screwdriver-wrench text-5xl mb-[15px]"></i>
            <h1 className='font-[500] text-3xl mb-[20px]'>5 Free Servecing</h1>
            <p>At Big Brother Toys, your satisfaction drives us. That's why we offer 5 complimentary servicing sessions with every car purchase.</p>
          </div>
          <div className='text-white'>
          <i className="fa-solid fa-headset text-5xl mb-[15px]"></i>
            <h1 className='font-[500] text-3xl mb-[20px]'>24/7 Help Center</h1>
            <p>Our dedication to customer satisfaction knows no bounds. We're here for you around the clock, providing 24/7 customer support.</p>
          </div>
          <div className='text-white'>
          <i className="fa-solid fa-gift text-5xl mb-[15px]"></i>
            <h1 className='font-[500] text-3xl mb-[20px]'>Sure Gift Pack</h1>
            <p>Introducing our "Sure Gift Pack" – a token of appreciation for choosing Big Brother Toys. It's more than a purchase.</p>
          </div>
          </div>
        </div>
      </div>
      <HomeProducts/>
      <SliderAdvertisement/>
    </div>
  )
}

export default Home
