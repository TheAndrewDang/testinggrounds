import React, { useState, useEffect } from 'react';
import { Homepage, Intro, Secondpage, Aboutme } from './components';
import { photoData } from './components/secondpage/photoData';

import './app.css'

const App = () => {
    const [isIntroFinished, setIsIntroFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntroFinished(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);


    function updateProgressBar(){
        const {scrollTop, scrollHeight} = document.documentElement;
        const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
        document.querySelector('#progress').style.setProperty('--progress' , scrollPercent);
    }

    document.addEventListener('scroll', updateProgressBar);


    return (
            <div>
                {isIntroFinished ? (
                    <div className='fullpage'>
                        <div id='progress'>
                        </div>
                        <div className='homepage'>
                            <Homepage />
                        </div>
                        <div className='aboutpage'>
                            <Aboutme />
                        </div>
                        <div className='photopage'>
                            <Secondpage slides={photoData}/>
                        </div>
                    </div>
                ) : (
                    <Intro />
                )}
            </div>
    );
}

export default App;
