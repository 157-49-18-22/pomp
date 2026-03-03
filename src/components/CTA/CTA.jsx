import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section container">
            <div className="cta-content text-center">
                <h2 className="cta-title">Ready to Build Your Foundation?</h2>
                <p className="cta-subtitle">
                    Let’s transition your brand from utility to icon. Whether you are
                    launching a new tech GTM or scaling an established lifestyle brand,
                    we have the infrastructure to make it happen.
                </p>
                <button className="btn-primary cta-btn">
                    Get Started
                    <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default CTA;
