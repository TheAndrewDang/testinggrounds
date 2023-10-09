import React, { useState, useEffect } from 'react'

import './photography.css'

const Photography= () => {


    const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg' ];
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
    const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } , 3000);

    return () => clearInterval(timer);
}, []);

  return (
    <div>
        <div>
          <div className='titleText'>Here's Some of The Photos I've Taken Over The Years</div>
        </div>
        <div className='carousel-container'>
        <img src={images[currentImageIndex]} alt="Carousel" className="carousel-image"/>
        </div>
    </div>
  )
}

export default Photography