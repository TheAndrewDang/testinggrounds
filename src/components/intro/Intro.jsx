import React from 'react'

import './Intro.css'

const Intro = () => {
  return (
    <div>
    <div className='intro'>
      <div className='blur-out-expand'>
        <div className="tracking-in-expand">
            <div className='center'>
                <div className='name'>Andrew Dang</div>
                </div>
            </div>
            <div className="tracking-in-contract">
                <div className='center'>
                    <div className='topics'>
                        <div className='textcenter'>
                            Software Engineer
                        </div>
                        <div className='tracking-in-contract1'>
                        <div className='textcenter'>
                            Web Developer
                        </div>
                        </div>
                        <div className='tracking-in-contract2'>
                        <div className='textcenter'>
                            Photographer
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
        </div>

    </div>
  )
}

export default Intro
