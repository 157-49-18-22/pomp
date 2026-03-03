import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section container">
            <div className="stat-item">
                <div className="stat-number">13+</div>
                <div className="stat-label">BRAND ENGAGEMENTS</div>
            </div>


            <div className="stat-item">
                <div className="stat-number">43+</div>
                <div className="stat-label">CITIES REACHED</div>
            </div>


            <div className="stat-item">
                <div className="stat-number">22+</div>
                <div className="stat-label">CAMPAIGNS EXECUTED</div>
            </div>


            <div className="stat-item">
                <div className="stat-number text-gradient-alt">34+</div>
                <div className="stat-label">YEARS INDUSTRY EXPERTISE</div>
            </div>
        </section>
    );
};

export default Stats;
