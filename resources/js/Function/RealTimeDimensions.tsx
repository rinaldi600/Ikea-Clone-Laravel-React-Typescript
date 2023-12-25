import { useState, useEffect } from 'react';

function getDimensions() {

    const {innerWidth: width, innerHeight:height} = window;
    return {
        width,
        height
    }
}

function useDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useDimensions;
