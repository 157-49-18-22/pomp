import React from 'react';
import './WhoWeWorkWith.css';

const projects = [
    {
        id: 1,
        title: 'App Design',
        desc: 'Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum',
        theme: 'light', // Cream bg, dark text
        images: [
            'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=400&auto=format&fit=crop', // Stadium/Sports
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=400&auto=format&fit=crop'
        ],
        mode: 'dark-ui'
    },
    {
        id: 2,
        title: 'App Design',
        desc: 'Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum',
        theme: 'dark', // Dark bg, light text
        images: [
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop', // Portrait male
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
        ],
        mode: 'dark-ui'
    },
    {
        id: 3,
        title: 'App Design',
        desc: 'Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum',
        theme: 'light',
        images: [
            'https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=400&auto=format&fit=crop', // Concert/Red
            'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=400&auto=format&fit=crop'
        ],
        mode: 'dark-ui'
    },
    {
        id: 4,
        title: 'App Design',
        desc: 'Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum',
        theme: 'dark',
        images: [
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop', // Pizza/Food
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop' // Food
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
                <h2 className="section-title text-center">Who We Work Best With</h2>
                <p className="work-desc text-center">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's<br />
                    Standard Dummy Text Ever Since The 1500s. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting<br />
                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
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
