import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section container">
            <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">BRAND ENGAGEMENTS</div>
            </div>
            <div className="stat-divider"></div>

            <div className="stat-item">
                <div className="stat-number">13+</div>
                <div className="stat-label">CITIES REACHED</div>
            </div>
            <div className="stat-divider"></div>

            <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">CAMPAIGNS LIVE</div>
            </div>
            <div className="stat-divider"></div>

            <div className="stat-item">
                <div className="stat-number text-gradient-alt">Multi</div>
                <div className="stat-label">INDUSTRY EXPERTISE</div>
            </div>
        </section>
    );
};

export default Stats;
