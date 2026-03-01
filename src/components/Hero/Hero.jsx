import React from 'react';
import './Hero.css';

const RightGraphic = () => (
    <div className="hero-graphic-image-wrapper">
        <img src="/hero.png" alt="Hero Graphic" className="hero-graphic-image" />
    </div>
);

const Hero = () => {
    return (
        <section className="hero-section container">
            <div className="hero-content">
                <p className="hero-subtitle text-gradient">PREMIUM MARKETING & TECH</p>
                <h1 className="hero-title">
                    Where Strategy<br />
                    <span className="text-gradient">Meets Spectacle</span>
                </h1>
                <p className="hero-description">
                    We fuel high-growth engines through robust digital<br />
                    infrastructure and performance-driven storytelling. Building<br />
                    foundations that last.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary">
                        Start Your Brand Audit
                        <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </button>
                    <button className="btn-secondary">View Showreel</button>
                </div>
            </div>

            <div className="hero-visual">
                <RightGraphic />
            </div>
        </section>
    );
};

export default Hero;
