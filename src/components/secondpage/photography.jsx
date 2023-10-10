import React, { useState } from 'react'
import {photoData} from './photoData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import './photography.css'

const Photography = ({ slides }) => {

  const [current, setCurrent] = useState(0)

  const length = slides.length

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
 
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div>
      <section className='slider'>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>



          {photoData.map((slide, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                {index === current && (<img src={slide.image} className='image' />)}
              </div>
            )
          })}
      </section>
    </div>
  )
}

export default Photography