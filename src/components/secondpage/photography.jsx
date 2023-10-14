import React, { useState } from 'react'
import {photoData} from './photoData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


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

// Add an event listener to trigger the fade-in effect when the element is in view
window.addEventListener('scroll', function() {
  const fadeItems = document.querySelectorAll('.fade-item');

  fadeItems.forEach(function(item) {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;

      if (itemTop < window.innerHeight && itemBottom >= 0) {
          item.classList.add('fade-in');
      } else {
          item.classList.remove('fade-in');
      }
  });
});


  return (
    <div>
      <ParallaxProvider>
      <div className='photoHeader'>
      <Parallax className='statementParallax' translateY={[500, -90]} translateX={[0, 0]}>
        Photos I Have Taken Over The Years
      </Parallax>
      </div>

      <section className='slider'>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

          {photoData.map((slide, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                {index === current && (<img src={slide.image} alt='takenPhotos' className='image' />)}
              </div>
            )
          })}
      </section>
      </ParallaxProvider>
    </div>
  )
}

export default Photography