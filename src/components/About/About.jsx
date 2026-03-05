import React from 'react';
import './About.css';

const BadgeCheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.47 4.1L17.65 3.82L18.46 6.94L21.2 8.44L19.96 11.36L21.2 14.28L18.46 15.78L17.65 18.9L14.47 18.62L12 20.72L9.53 18.62L6.35 18.9L5.54 15.78L2.8 14.28L4.04 11.36L2.8 8.44L5.54 6.94L6.35 3.82L9.53 4.1L12 2Z" stroke="url(#badge_grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.5L11 13.5L15 9.5" stroke="url(#badge_grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="badge_grad" x1="2" y1="2" x2="21" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b062eb" />
                <stop offset="1" stopColor="#ed67ae" />
            </linearGradient>
        </defs>
    </svg>
);

const SparklesIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2L11 6.5L15.5 8L11 9.5L9.5 14L8 9.5L3.5 8L8 6.5L9.5 2Z" stroke="url(#sparkle_grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 13L18.5 15.5L21 16.5L18.5 17.5L17.5 20L16.5 17.5L14 16.5L16.5 15.5L17.5 13Z" stroke="url(#sparkle_grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="sparkle_grad" x1="3" y1="2" x2="21" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b062eb" />
                <stop offset="1" stopColor="#ed67ae" />
            </linearGradient>
        </defs>
    </svg>
);

const ZapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="url(#zap_grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="zap_grad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b062eb" />
                <stop offset="1" stopColor="#ed67ae" />
            </linearGradient>
        </defs>
    </svg>
);

const About = () => {
    return (
        <section className="about-section container" id="about">
            <div className="about-header">
                <p className="section-subtitle text-gradient">ABOUT THE AGENCY</p>
            </div>

            <div className="about-main-content">
                <div className="about-image-container">
                    <div className="about-image-placeholder">
                        <img src="/left.jpg" alt="Agency Representative" className="temp-image" />
                        <div className="image-overlay"></div>
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="section-title">
                        We Build Foundations for<br />
                        Sustainable Growth
                    </h2>

                    <div className="about-text">
                        <p>
                            Pomp & Pepper is a tech-first growth partner and full-stack marketing agency. We bridge the gap between analytical precision and creative spectacle to build robust digital infrastructure that empowers brands to scale without friction.
                        </p>
                        <p>
                            We transform technical utility into lifestyle authority.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <BadgeCheckIcon />
                            </div>
                            <div className="feature-info">
                                <h3 className="feature-title">Strategy First</h3>
                                <p className="feature-text">Architecting GTM strategies where every pixel serves a commercial purpose.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <ZapIcon />
                            </div>
                            <div className="feature-info">
                                <h3 className="feature-title">Tech Driven</h3>
                                <p className="feature-text">Leveraging AI-led marketing and high-performance digital infrastructure.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <SparklesIcon />
                            </div>
                            <div className="feature-info">
                                <h3 className="feature-title">Scale with Spectacle</h3>
                                <p className="feature-text">Combining data-led storytelling with high-impact brand experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
