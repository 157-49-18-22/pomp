import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    return (
        <section className="philosophy-wrapper">
            <div className="philosophy-container container">

                {/* Top Section: Text and Image */}
                <div className="philosophy-top">
                    <div className="philosophy-content">
                        <p className="section-subtitle text-gradient">OUR PHILOSOPHY</p>
                        <h2 className="philosophy-title">
                            We don't start with services.<br />
                            We start with objectives.
                        </h2>
                        <p className="philosophy-desc">
                            By reverse-engineering your business goals, we create tailored GTM roadmaps
                            focused on long-term impact rather than just tactical output. We build solutions
                            around your specific stage of growth:
                        </p>
                    </div>

                    <div className="philosophy-image-wrapper">
                        {/* Using a placeholder image similar to the professional with laptop */}
                        <img src="/bulb.png" alt="Bulb Icon" className="philosophy-person" />
                    </div>
                </div>

                {/* Bottom Section: 3 Columns Background Image / Cards */}
                <div className="philosophy-bottom">
                    <div className="philosophy-grid">

                        {/* Item 1 */}
                        <div className="philosophy-card">
                            <div className="card-number text-gradient">01</div>
                            <h3 className="card-title-light">Founders & Emerging Brands</h3>
                            <p className="card-text-light">
                                For organizations establishing a digital-first identity and seeking market credibility through structured brand positioning.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="philosophy-card middle-card">
                            <div className="card-number text-gradient">02</div>
                            <h3 className="card-title-light">Growing & Scaling Businesses</h3>
                            <p className="card-text-light">
                                For companies optimizing digital infrastructure and brand clarity to support rapid, sustainable expansion.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="philosophy-card">
                            <div className="card-number text-gradient">03</div>
                            <h3 className="card-title-light">Enterprise & Complex Organizations</h3>
                            <p className="card-text-light">
                                For leadership teams requiring integrated execution across technology, digital ecosystems, and experiential marketing.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
