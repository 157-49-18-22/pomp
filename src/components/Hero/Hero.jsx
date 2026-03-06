import { useNavigate, useLocation } from 'react-router-dom';
import './Hero.css';

const RightGraphic = () => (
    <div className="hero-graphic-image-wrapper">
        <img
            src="/herro.png"
            alt="Hero Graphic"
            className="hero-graphic-image"
        />
    </div>
);

const Hero = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToWork = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: 'work' } });
        }
    };

    return (
        <section className="hero-section container">
            <div className="hero-header">
                <p className="hero-subtitle text-gradient">full-stack marketing agency for tech and lifestyle brands</p>
            </div>
            <div className="hero-main">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Where Strategy<br />
                        <span className="text-gradient">Meets Spectacle</span>
                    </h1>
                    <p className="hero-description">
                        We build high-growth engines for B2B and consumer brands<br />
                        through robust digital infrastructure and performance-driven<br />
                        storytelling. From GTM strategy to lifestyle positioning, we<br />
                        build foundations that last.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => navigate('/contact')}>
                            Start Your Brand Audit
                            <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </button>
                        <button className="btn-secondary" onClick={handleScrollToWork}>View Company Showreel</button>
                    </div>
                </div>

                <div className="hero-visual">
                    <RightGraphic />
                </div>
            </div>
        </section>
    );
};

export default Hero;