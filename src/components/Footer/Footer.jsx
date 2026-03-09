import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Footer.css';

// Small 3D Ribbon for Footer (top logo area)
const SmallRibbonSVG = ({ className }) => (
    <svg width="26" height="26" viewBox="100 80 320 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M120 400C160 480 250 480 300 400L420 220"
            stroke="url(#f_flow_grad_base)" strokeWidth="45" strokeLinecap="square" />
        <path d="M420 220C460 160 400 80 320 80C220 80 140 180 140 280C140 380 220 430 300 380"
            stroke="url(#f_flow_grad_main)" strokeWidth="45" strokeLinecap="round" />
        <path d="M150 240C150 140 240 120 300 170C350 210 320 300 240 300C180 300 180 240 180 240"
            stroke="url(#f_flow_grad_top)" strokeWidth="35" strokeLinecap="round" />
        <defs>
            <linearGradient id="f_flow_grad_base" x1="120" y1="400" x2="420" y2="220" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6d28d9" />
                <stop offset="1" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="f_flow_grad_main" x1="140" y1="80" x2="420" y2="430" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8b5cf6" />
                <stop offset="0.5" stopColor="#d946ef" />
                <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="f_flow_grad_top" x1="150" y1="120" x2="350" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899" />
                <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
        </defs>
    </svg>
);



// Map Pin SVG
const LocationIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 4 15.3176 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 15.3176 12 22 12 22Z" stroke="#b062eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" stroke="#b062eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Email Envelope SVG
const EmailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7.00005L10.2 11.6501C11.2667 12.4501 12.7333 12.4501 13.8 11.6501L20 7" stroke="#b062eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#b062eb" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleFooterNav = (e, targetId) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: targetId } });
        }
    };

    return (
        <footer className="footer-section">
            <div className="container footer-content-wrap">

                <div className="footer-top">
                    <div className="footer-links-col col-left">
                        <h4 className="footer-col-title">Our Expertise</h4>
                        <div className="footer-desc-container">
                            <div className="footer-desc-item"><a href="#about" onClick={(e) => handleFooterNav(e, 'about')}>GTM Strategy & Brand Foundations</a></div>
                            <div className="footer-desc-item"><a href="#services" onClick={(e) => handleFooterNav(e, 'services')}>Performance Marketing & Lead Gen</a></div>
                            <div className="footer-desc-item"><a href="#work" onClick={(e) => handleFooterNav(e, 'work')}>Experiential & Event Architecture</a></div>
                            <div className="footer-desc-item"><a href="#services" onClick={(e) => handleFooterNav(e, 'services')}>Creative Direction & Design</a></div>
                        </div>
                    </div>

                    <div className="footer-links-col col-center">
                        <h4 className="footer-col-title">Get in Touch</h4>
                        <div className="footer-desc-container">
                            <div className="footer-desc-item">Pomp & Pepper Marketing Pvt Ltd</div>
                            <div className="footer-desc-item">hello@pompnpepper.com</div>
                            <div className="footer-desc-item">Puri High Street, Sector 81, Faridabad, India</div>
                        </div>
                    </div>

                    <div className="footer-links-col col-right">
                        <h4 className="footer-col-title">New Business</h4>
                        <div className="footer-desc-container">
                            <div className="footer-desc-item">Interested in building together? Tell us about your objectives — we'll architect the solution.</div>
                        </div>
                        <Link to="/contact" style={{ textDecoration: 'none', display: 'flex', width: 'fit-content' }} className="btn-wrapper">
                            <button className="btn-get-started">
                                Get in Touch
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Watermark Image Row */}
                <div className="footer-mark-wrapper">
                    <img src="logo1.png" alt="Watermark" className="footer-mark-img" />
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright-text">
                        <span className="copyright-line">© 2026 Pomp & Pepper Marketing Pvt. Ltd. | All Rights Reserved.</span>
                        <span className="copyright-line">Based in India, Serving Global Tech Ecosystems.</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
