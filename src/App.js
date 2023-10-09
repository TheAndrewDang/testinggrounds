import React, { useState, useEffect } from 'react';
import { Homepage, Intro } from './components';

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
                <div className='homepage'>
                        <Homepage />
                </div>
            ) : (
                <Intro />
            )}
        </div>
    );
}

export default App;
