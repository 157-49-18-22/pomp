import React from 'react';
import './Background.css';

const Background = () => {
    return (
        <>
            <div className="bg-blob"></div>
            <div className="bg-pattern-container">
                {Array.from({ length: 8 }).map((_, i) => (
                    <img key={i} src="/hero.jpeg" className="bg-pattern-logo" alt="" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `scale(${0.1 + Math.random() * 0.3}) rotate(${Math.random() * 45 - 20}deg)`,
                        opacity: 0.08,
                        pointerEvents: 'none'
                    }} />
                ))}
            </div>
        </>
    );
};

export default Background;
