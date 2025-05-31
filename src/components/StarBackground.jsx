
import { Key } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export const StarBackground = () => {

    // id, size, x, y, opacity, animationDuration for generate stars
    // id, size, x, y, delay, animationDuration for meteors 

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    const generateStars = () => {
        const numberOfstars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = [];

        for (let i = 0; i < numberOfstars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Random size between 1 and 4
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 100, // Random y position in percentage
                opacity: Math.random()*0.5 + 0.5, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Random duration between 2 and 6 seconds
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors  = 4
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Random size between 1 and 3
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 20, // Random y position in percentage (top of the screen)
                delay: Math.random()*50, 
                animationDuration: Math.random() * 3 + 3 // Random duration between 2 and 6 seconds
            });
        }
        setMeteors(newMeteors);
    };

    return <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star) => (
            <div key={star.id} className='star animate-pulse-subtle' style={
                {
                    width: star.size + 'px', 
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's',
                }
            }></div>
        ))}

        {meteors.map((meteors) => (
            <div key={meteors.id} className='meteor animate-meteor' style={
                {
                    width: meteors.size*17 + 'px', 
                    height: meteors.size + 'px',
                    left: meteors.x + '%',
                    top: meteors.y + '%',
                    animationDelay: meteors.delay,
                    animationDuration: meteors.animationDuration + 's',
                }
            }></div>
        ))}
         </div>;
};