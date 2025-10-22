'use client';
import React from 'react';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import { useEffect, useState } from 'react';


const AnimatedDownArrow = () => {
    const [size, setSize] = useState(24);
    
    useEffect(() => {
        const handleResize = () => {
             if (window.innerWidth >= 640) {
                // sm: breakpoint (640px and above)
                setSize(24);
            } else {
                // Default size for xs screens
                setSize(16);
            }
        };
        
        handleResize();
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <UseAnimations animation={arrowDown} size={size} />;
};

export default AnimatedDownArrow;