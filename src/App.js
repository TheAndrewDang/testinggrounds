import React, { useState, useEffect } from 'react';
import { Homepage, Intro, Secondpage, Aboutme } from './components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { photoData } from './components/secondpage/photoData';

const App = () => {
    const [isIntroFinished, setIsIntroFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntroFinished(true);
        }, 11500); // 10.5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <ParallaxProvider>
            <div>
                {isIntroFinished ? (
                    <div className='homepage'>
                        <ParallaxBanner
                          layers={[{ image: '/static/banner.jpg', speed: -15 }]}
                          className="aspect-[2/1]"
                        />
                        <Homepage />
                        <Aboutme />
                        <Secondpage slides={photoData}/>
                    </div>
                ) : (
                    <Intro />
                )}
            </div>
        </ParallaxProvider>
    );
}

export default App;
