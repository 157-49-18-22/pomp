import React from 'react';
import './WhoWeWorkWith.css';

const projects = [
    {
        id: 1,
        title: 'Experiential & Event Architecture',
        desc: 'Architecting high-stakes physical environments for global tech leaders.',
        theme: 'light',
        images: [
            '/new1.png',
            '/new1.png'
        ],
        mode: 'dark-ui'
    },
    {
        id: 2,
        title: 'Multi-Channel Creative Direction',
        desc: 'Defining the visual narrative for premium lifestyle and IT brands.',
        theme: 'dark',
        images: [
            '/new2.png',
            '/new2.png'
        ],
        mode: 'dark-ui'
    },
    {
        id: 3,
        title: 'Retail & Phygital Augmentation',
        desc: 'Bridging the gap between digital convenience and physical retail impact.',
        theme: 'light',
        images: [
            '/new3.png',
            '/new3.png'
        ],
        mode: 'dark-ui'
    },
    {
        id: 4,
        title: 'Enterprise GTM & Lead Generation',
        desc: 'Driving measurable B2B growth through structured GTM outreach.',
        theme: 'dark',
        images: [
            '/new4.png',
            '/new4.png'
        ],
        mode: 'light-ui'
    }
];

// Reusable CSS Phone component
const MockupPhone = ({ imgUrl, isFront, uiMode }) => {
    return (
        <div className={`mockup-phone ${isFront ? 'phone-front' : 'phone-back'} ${uiMode}`}>
            <div className="phone-notch"></div>
            <div className="phone-screen" style={{ backgroundImage: `url(${imgUrl})` }}>
                <div className="phone-glare"></div>
                {/* Genuine App Status & Nav Bars to look like real OS UI */}
                <div className="real-ui-topbar">
                    <span className="ui-time">9:41</span>
                    <div className="ui-icons">
                        <div className="ui-icon-dot"></div>
                        <div className="ui-icon-battery"></div>
                    </div>
                </div>

                <div className="real-ui-bottombar">
                    <div className="ui-tab active"></div>
                    <div className="ui-tab"></div>
                    <div className="ui-tab"></div>
                </div>
            </div>
        </div>
    );
}

const WhoWeWorkWith = () => {
    return (
        <section className="work-section container" id="work">
            <div className="work-header">
                <p className="section-subtitle text-center text-gradient">Work in Focus</p>
                <h2 className="section-title text-center">High-Performance Brand Environments</h2>
                <p className="work-desc text-center">
                    We design and execute integrated environments that turn brand touchpoints into growth engines. Whether through physical Experiential Architecture or digital Enterprise GTM strategies, our work is engineered to command attention and convert intent into lasting loyalty.
                </p>
            </div>

            <div className="work-grid">
                {projects.map((proj) => (
                    <div key={proj.id} className={`work-card theme-${proj.theme}`}>
                        <div className="work-card-visuals">
                            {/* Back Phone */}
                            <MockupPhone imgUrl={proj.images[0]} isFront={false} uiMode={proj.mode} />
                            {/* Front Phone */}
                            <MockupPhone imgUrl={proj.images[1]} isFront={true} uiMode={proj.mode} />
                        </div>

                        <div className="work-card-content">
                            <h3 className="work-card-title">{proj.title}</h3>
                            <p className="work-card-desc">{proj.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhoWeWorkWith;
