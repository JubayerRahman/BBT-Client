import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Big Brother Toys, led by visionary CEO Jobayer Rahman, is not just a car-selling company; it's a testament to innovation and customer-centric values. Rahman's goal with this company transcends mere sales. He envisions a dynamic automotive marketplace that combines cutting-edge technology with a personal touch. Big Brother Toys is committed to offering a wide range of vehicles while prioritizing affordability, quality, and an unforgettable customer experience. Under Rahman's leadership, the company is constantly evolving to meet the diverse needs of car enthusiasts, providing not just vehicles but a lifestyle that reflects excellence, trust, and a drive towards a brighter automotive future.</p>
      <Link to="/">
        <button className="btn bg-red-800">Get Started</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
