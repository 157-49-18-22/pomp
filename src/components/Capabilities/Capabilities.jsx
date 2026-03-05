import React, { useState, useEffect, useRef } from 'react';
import './Capabilities.css';

const CompassIcon = () => (
    <svg className="compass-icon-anim" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.5V11" stroke="url(#cap_grad_1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7.5C13.1046 7.5 14 6.60457 14 5.5C14 4.39543 13.1046 3.5 12 3.5C10.8954 3.5 10 4.39543 10 5.5C10 6.60457 10.8954 7.5 12 7.5Z" stroke="url(#cap_grad_1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 21.5L9.65 11" stroke="url(#cap_grad_1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 21.5L14.35 11" stroke="url(#cap_grad_1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14H16" stroke="url(#cap_grad_1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="cap_grad_1" x1="4" y1="3.5" x2="20" y2="21.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b062eb" />
                <stop offset="1" stopColor="#ed67ae" />
            </linearGradient>
        </defs>
    </svg>
);

const HeartIcon = () => (
    <svg className="heart-icon-anim" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 3 16.9401 3C16.2076 3 15.4922 3.14052 14.8248 3.41708C14.1573 3.69364 13.5508 4.099 13.0401 4.60999L12.0001 5.64999L10.9601 4.60999C9.92842 3.5783 8.52904 2.9987 7.07009 2.9987C5.61114 2.9987 4.21176 3.5783 3.18009 4.60999C2.14842 5.64169 1.56882 7.04106 1.56882 8.50001C1.56882 9.95896 2.14842 11.3583 3.18009 12.39L4.22009 13.43L12.0001 21.21L19.7801 13.43L20.8401 12.39C21.3511 11.8793 21.7564 11.2728 22.033 10.6054C22.3096 9.93792 22.4501 9.22248 22.4501 8.49999C22.4501 7.7775 22.3096 7.06206 22.033 6.39462C21.7564 5.72718 21.3511 5.12068 20.8401 4.60999V4.60999Z" stroke="url(#cap_grad_2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="cap_grad_2" x1="1.5" y1="3" x2="22.5" y2="21.2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b062eb" />
                <stop offset="1" stopColor="#ed67ae" />
            </linearGradient>
        </defs>
    </svg>
);

const TrendingIcon = () => (
    <svg className="trending-icon-anim" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="url(#cap_grad_3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 6H23V12" stroke="url(#cap_grad_3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="cap_grad_3" x1="1" y1="6" x2="23" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b062eb" />
                <stop offset="1" stopColor="#ed67ae" />
            </linearGradient>
        </defs>
    </svg>
);

const Capabilities = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [phase, setPhase] = useState('center');
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [hoverIndex, setHoverIndex] = useState(null);
    const sectionRef = useRef(null);

    const cards = [
        {
            icon: <CompassIcon />,
            title: <>Establishing Brand<br />Foundations</>,
            longDesc: "We architect the brand identity and digital infrastructure that serves as the bedrock for scalable growth.",
            list: ["Brand Positioning: Defining your edge.", "Visual Identity: Premium aesthetics.", "Core Tech Setup: Robust systems."]
        },
        {
            icon: <TrendingIcon />,
            title: <>Promoting Market<br />Demand</>,
            longDesc: "Scaling reach and ROI through data-backed performance marketing and high conversion advertising funnels.",
            list: ["Performance Ads: High-intent targeting.", "Funnel Optimization: Lead to loyalty.", "Data Analytics: Actionable insights."]
        },
        {
            icon: <HeartIcon />,
            title: <>Strengthening Brand<br />Affinity</>,
            longDesc: "Deepening audience connection through immersive storytelling and community centric experiences.",
            list: ["Content Strategy: Narrative-driven.", "Social Engagement: Digital authority.", "Community Building: Brand advocates."]
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setPhase('fan'), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, cards.length]);

    return (
        <section className="capabilities-section container" id="services" ref={sectionRef}>
            <div className="capabilities-header">
                <p className="section-subtitle">CORE CAPABILITIES</p>
                <h2 className="section-title">Our Strategic Ecosystem</h2>
            </div>

            <div className="carousel-row-container">
                <div className="carousel-row">
                    {[-1, 0, 1].map((offset) => {
                        let i = (activeIndex + offset + cards.length) % cards.length;
                        const card = cards[i];

                        let zIndex = (hoverIndex === i) ? 100 : 10 - Math.abs(offset);
                        let translateY = 0;
                        let transitionDelay = '0s';

                        // Stacking parameters
                        let isHovered = i === hoverIndex;
                        let isFocused = isHovered || (hoverIndex === null && offset === 0);

                        let scale = isFocused ? 1.0 : 0.85;
                        let translateX = offset * 110;
                        let rotateY = 0;
                        let opacity = isFocused ? 1 : (hoverIndex !== null ? 0.3 : 0.6);

                        if (phase === 'center') {
                            if (offset !== 0) {
                                opacity = 0;
                                scale = 0.7;
                                zIndex = 1;
                                translateY = -60;
                            } else {
                                zIndex = 20;
                            }
                        } else if (offset !== 0) {
                            transitionDelay = `${0.1 * Math.abs(offset)}s`;
                        }

                        // Apply blur specifically when a card is hovered to draw focus
                        let blurValue = 0;
                        if (hoverIndex !== null && !isHovered) {
                            blurValue = 10; // Strong focus blur for non-hovered
                        } else if (hoverIndex === null && offset !== 0) {
                            blurValue = 2; // Very subtle depth blur normally
                        }
                        const blur = blurValue > 0 ? `blur(${blurValue}px)` : 'none';

                        return (
                            <div
                                key={i + '-' + offset}
                                className={`service-card carousel-card ${offset === 0 ? 'active' : ''} ${hoverIndex === i ? 'hovered' : ''}`}
                                style={{
                                    transform: `scale(${scale}) translateX(calc(${offset} * var(--card-translate-x))) translateY(${translateY}px) rotateY(${rotateY}deg)`,
                                    opacity,
                                    zIndex,
                                    filter: blur,
                                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                    transitionDelay,
                                }}
                                onMouseEnter={() => {
                                    setIsAutoPlaying(false);
                                    setHoverIndex(i);
                                }}
                                onMouseLeave={() => {
                                    setIsAutoPlaying(true);
                                    setHoverIndex(null);
                                }}
                                onClick={() => setActiveIndex(i)}
                            >
                                <div className="service-card-overlay">
                                    <div className="icon-wrapper">
                                        {card.icon}
                                    </div>
                                    <div className="service-card-title-gradient">{card.title}</div>
                                    <div className="service-card-desc">{card.longDesc}</div>
                                    <ul className="service-card-list">
                                        {card.list.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="carousel-pagination">
                {cards.map((_, idx) => (
                    <button
                        key={idx}
                        className={`pagination-dot ${idx === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Capabilities;
