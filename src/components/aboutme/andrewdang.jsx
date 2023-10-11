import React from 'react'


import './andrewdang.css'

const andrewdang = () => {
  return (
    <div>
      <div className='container'>
        <div className='portrait'>
          <img src="selfimage.jpg" alt='self portrait' className='portraitImage'/>
        </div>
        <div className='statement'>
          <div className='header'>
            Hey It's Me!
          </div>
          <div className='information'>
            <div className='born'>Born and raised in Salem, Oregon</div>
            <div className='school'>Current student at Oregon State University</div>
            <div className='major'>Majoring in Computer Science</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default andrewdang