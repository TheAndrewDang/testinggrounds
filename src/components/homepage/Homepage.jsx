import React from 'react'
import { SlArrowDown } from 'react-icons/sl';
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <div className='fade-in'>
        <div className='topImage'>
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
          </div>
      </div>
    </div>
  )
}

export default Homepage
