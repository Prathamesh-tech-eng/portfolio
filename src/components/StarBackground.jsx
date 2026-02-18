
import React, { useState, useEffect } from 'react';

export const StarBackground = () => {

    // id, size, x, y, opacity, animationDuration for generate stars
    // id, size, x, y, delay, animationDuration for meteors 

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([]);
    const [mouse, setMouse] = useState({ x: 50, y: 50 });

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        // lightweight mouse parallax (only on medium+ screens)
        let rafId = null;
        const handleMouse = (ev) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setMouse({ x: (ev.clientX / window.innerWidth) * 100, y: (ev.clientY / window.innerHeight) * 100 });
            });
        };

        window.addEventListener('resize', handleResize);
        if (window.innerWidth >= 768) window.addEventListener('mousemove', handleMouse);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (window.innerWidth >= 768) window.removeEventListener('mousemove', handleMouse);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const generateStars = () => {
        // reduce star density slightly for better performance on large screens
        const numberOfstars = Math.floor(
            (window.innerWidth * window.innerHeight) / 14000
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
        const numberOfMeteors  = Math.max(2, Math.floor(window.innerWidth / 600));
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Random size between 1 and 3
                x: Math.random() * 100, // Random x position in percentage
                y: Math.random() * 20, // Random y position in percentage (top of the screen)
                delay: Math.random()*30, 
                animationDuration: Math.random() * 3 + 3 // Random duration between 2 and 6 seconds
            });
        }
        setMeteors(newMeteors);
    };

    return <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star) => {
            // small parallax offset based on mouse (in px)
            const offsetX = ((mouse.x - 50) / 50) * (star.size * 0.8);
            const offsetY = ((mouse.y - 50) / 50) * (star.size * 0.6);
            return (
            <div key={star.id} className='star animate-pulse-subtle' style={
                {
                    width: star.size + 'px', 
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's',
                    transform: `translate(${offsetX}px, ${offsetY}px)`
                }
            }></div>
            )
        })}

        {meteors.map((m) => (
            <div key={m.id} className='meteor animate-meteor' style={
                {
                    width: m.size * 17 + 'px', 
                    height: m.size + 'px',
                    left: m.x + '%',
                    top: m.y + '%',
                    animationDelay: (m.delay || 0) + 's',
                    animationDuration: m.animationDuration + 's',
                }
            }></div>
        ))}
         </div>;
};