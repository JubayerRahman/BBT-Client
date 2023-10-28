import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../../assets/img/advertisement1.jpg";
import img2 from "../../assets/img/advertisement2.png";
import img3 from "../../assets/img/advertisement3.jpg";
import img4 from "../../assets/img/advertisement4.jpg";

const SliderAdvertisement = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='mt-[50px] mb-[100px]'>
      <Carousel 
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5 ease-out"
      transitionDuration={1000}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px" >
        <div className='w-full h-[300px] flex justify-center items-center'>
            <img src={img1}/>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src={img2}/>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src={img3}/>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src={img4}/>
        </div>
      </Carousel>
    </div>
  )
}

export default SliderAdvertisement
