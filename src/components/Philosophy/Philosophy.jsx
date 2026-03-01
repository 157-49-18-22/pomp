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
                            We start with objectives—and<br />
                            build the right solutions<br />
                            around them.
                        </h2>
                        <p className="philosophy-desc">
                            By reverse-engineering your business goals, we create tailored<br />
                            roadmaps that focus on impact rather than just output.
                        </p>
                    </div>

                    <div className="philosophy-image-wrapper">
                        {/* Using a placeholder image similar to the professional with laptop */}
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Professional with laptop" className="philosophy-person" />
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
                                For organizations establishing their digital<br />
                                identity and seeking early credibility through<br />
                                structured positioning.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="philosophy-card middle-card">
                            <div className="card-number text-gradient">02</div>
                            <h3 className="card-title-light">Growing & Scaling Businesses</h3>
                            <p className="card-text-light">
                                For companies strengthening brand<br />
                                clarity and digital infrastructure to<br />
                                support rapid expansion.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="philosophy-card">
                            <div className="card-number text-gradient">03</div>
                            <h3 className="card-title-light">Enterprise & Complex Orgs</h3>
                            <p className="card-text-light">
                                For teams seeking integrated execution across<br />
                                technology, digital environments, and<br />
                                experiential marketing.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
