import React from 'react';
import './Capabilities.css';

const CompassIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    return (
        <section className="capabilities-section container" id="services">
            <div className="capabilities-header">
                <p className="section-subtitle text-gradient">CORE CAPABILITIES</p>
                <h2 className="section-title text-center">Our Strategic Ecosystem</h2>
            </div>

            <div className="ecosystem-cards-container">
                {/* Card 1 */}
                <div className="ecosystem-card">
                    <div className="icon-wrapper">
                        <CompassIcon />
                    </div>
                    <h3 className="card-title">Establishing Brand<br />Foundations</h3>
                    <p className="card-desc">
                        We build the core identity and digital
                        infrastructure that serves as the bedrock
                        for all future marketing efforts.
                    </p>
                    <ul className="card-list">
                        <li>Visual Identity Design</li>
                        <li>Core Tech Stack Setup</li>
                        <li>Brand Positioning</li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div className="ecosystem-card">
                    <div className="icon-wrapper">
                        <HeartIcon />
                    </div>
                    <h3 className="card-title">Strengthening Brand<br />Affinity</h3>
                    <p className="card-desc">
                        Deepening the connection with your
                        audience through immersive storytelling
                        and community-centric experiences.
                    </p>
                    <ul className="card-list">
                        <li>Content Strategy</li>
                        <li>Social Engagement</li>
                        <li>Community Building</li>
                    </ul>
                </div>

                {/* Card 3 */}
                <div className="ecosystem-card">
                    <div className="icon-wrapper">
                        <TrendingIcon />
                    </div>
                    <h3 className="card-title">Promoting Market<br />Demand</h3>
                    <p className="card-desc">
                        Scaling reach and conversion through
                        data-backed performance marketing and
                        strategic advertising funnels.
                    </p>
                    <ul className="card-list">
                        <li>Performance Ads</li>
                        <li>Funnel Optimization</li>
                        <li>Data Analytics</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
