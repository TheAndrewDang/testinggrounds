import React, { useState, useEffect } from 'react';
import { Homepage, Intro, Secondpage, Aboutme } from './components';
import { photoData } from './components/secondpage/photoData';

import './app.css'

const App = () => {
    const [isIntroFinished, setIsIntroFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntroFinished(true);
        }, 11500); // 10.5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
            <div>
                {isIntroFinished ? (
                    <div className='fullpage'>
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
