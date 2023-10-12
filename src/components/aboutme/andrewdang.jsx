import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


import './andrewdang.css'

const andrewdang = () => {
  return (
    <div>
      <ParallaxProvider>
      <div className='container'>
        <div className='portrait'>
        <Parallax className='photoParallax' translateY={[-20, 30]} translateX={[0, 0]}>
          <img src="selfimage.jpg" alt='self portrait' className='portraitImage'/>
          </Parallax>
        </div>
        

        <div className='statement'>
        <Parallax className='statementParallax' translateY={[70, 30]} translateX={[0, 0]}>
          <div className='header'>
            Hey It's Me!
          </div>
          <div className='information'>
            <div className='born'>Born and raised in Salem, Oregon</div>
            <div className='school'>Current student at Oregon State University</div>
            <div className='major'>Majoring in Computer Science</div>
          </div>
          </Parallax>
        </div>
      </div>
      </ParallaxProvider>
    </div>
  )
}

export default andrewdang