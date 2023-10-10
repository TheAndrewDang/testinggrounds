import React from 'react'
import { SlArrowDown } from 'react-icons/sl';
import './Homepage.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Homepage = () => {
  return (
    <div>
      <ParallaxProvider>
      <Parallax translateY={[-20, 20]} translateX={[0, 0]}>
      <div className='fade-in'>
        <div className='topImage'>
          <Parallax translateY={[0, 140]} translateX={[0, 0]}>
          <div className='topText'>
            <div className='contentContainer'>
            <div className='text-pop-up-top'>
            <div className='text-shadow-drop-center'>
              Welcome To My Portfolio
              </div>
              </div>
            </div>
            <div className='fade-in2'>
            <div className='bounce-top'>
            <div className='arrowDown'>
              <SlArrowDown size={50} />
            </div>
            </div>
            </div>
          </div>
          </Parallax>
          </div>
      </div>
      </Parallax>
      </ParallaxProvider>
    </div>
  )
}

export default Homepage
