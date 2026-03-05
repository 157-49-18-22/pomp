import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    return (
        <section className="philosophy-wrapper">
            {/* Floating Background Elements */}
            <div className="philosophy-graph-bg">
                <div className="graph-grid"></div>
                <svg className="graph-lines-svg" viewBox="0 0 1440 400" preserveAspectRatio="none">
                    <path className="graph-path path-1" d="M0 400 L200 350 L400 380 L600 300 L800 320 L1000 200 L1200 250 L1440 100" />
                    <path className="graph-path path-2" d="M0 380 L300 320 L600 350 L900 250 L1200 280 L1440 150" />
                </svg>
                <div className="float-arrow arrow-1">↑</div>
                <div className="float-arrow arrow-2">↑</div>
                <div className="float-arrow arrow-3">↑</div>
                <div className="float-arrow arrow-4">↑</div>
                <div className="float-arrow arrow-5">↑</div>
                <div className="float-arrow arrow-6">↑</div>
            </div>
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
