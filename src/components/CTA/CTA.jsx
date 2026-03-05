import React from 'react';
import './CTA.css';


const CTA = () => {
    return (
        <section className="cta-section container">
            <div className="cta-container">
                {/* Decorative background elements */}
                <div className="cta-blob cta-blob-1"></div>
                <div className="cta-blob cta-blob-2"></div>

                {/* Decorative Background Images */}


                <div className="cta-content text-center">
                    <span className="cta-tagline">Scale Your Vision</span>
                    <h2 className="cta-title">Ready to Build Your <span className="highlight-text">Foundation?</span></h2>
                    <p className="cta-subtitle">
                        Let’s transition your brand from utility to icon. Whether you are
                        launching a new tech GTM or scaling an established lifestyle brand,
                        we have the infrastructure to make it happen.
                    </p>
                    <div className="cta-action">
                        <button className="btn-primary cta-btn">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
