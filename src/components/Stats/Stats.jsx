import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out expo for a smooth finish
            const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            const currentCount = Math.floor(easeOut * end);

            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}</span>;
};

const Stats = () => {
    return (
        <section className="stats-section container">
            <div className="stat-item">
                <div className="stat-number">
                    <CountUp end={13} />+
                </div>
                <div className="stat-label">BRAND ENGAGEMENTS</div>
            </div>

            <div className="stat-item">
                <div className="stat-number">
                    <CountUp end={43} />+
                </div>
                <div className="stat-label">CITIES REACHED</div>
            </div>

            <div className="stat-item">
                <div className="stat-number">
                    <CountUp end={22} />+
                </div>
                <div className="stat-label">CAMPAIGNS EXECUTED</div>
            </div>

            <div className="stat-item">
                <div className="stat-number text-gradient-alt">
                    <CountUp end={34} />+
                </div>
                <div className="stat-label">YEARS INDUSTRY EXPERTISE</div>
            </div>
        </section>
    );
};

export default Stats;
