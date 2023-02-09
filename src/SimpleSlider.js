/*https://kenwheeler.github.io/slick/*/ 
import React from 'react'
import Slider from 'react-slick'


const SimpleSlider = () =>{

    const settings = {
        dots: true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        fade:true
    }

  return (
    <div>
      <Slider>

      </Slider>
    </div>
  )
}

export default SimpleSlider
