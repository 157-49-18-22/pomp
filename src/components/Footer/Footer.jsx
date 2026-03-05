import React from 'react';
import { Link } from 'react-router-dom';
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
    return (
        <footer className="footer-section">
            <div className="container footer-content-wrap">

                <div className="footer-top">
                    {/* Column 1: Our Expertise */}
                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Our Expertise</h4>
                        <ul className="footer-links">
                            <li><a href="#">GTM Strategy & Brand Foundations</a></li>
                            <li><a href="#">Performance Marketing & Lead Gen</a></li>
                            <li><a href="#">Experiential & Event Architecture</a></li>
                            <li><a href="#">Creative Direction & Design</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Connect & Location */}
                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Connect & Location</h4>
                        <div className="footer-contact-item">
                            <div className="contact-icon"><LocationIcon /></div>
                            <p>HQ: Puri High Street, Sector 81,<br />Faridabad, India</p>
                        </div>
                        <div className="footer-contact-item">
                            <div className="contact-icon"><EmailIcon /></div>
                            <p>hello@pompnpepper.com</p>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-col-title">New Business</h4>
                        <p className="footer-desc">Interested in building together?<br />Tell us about your objectives—we’ll architect the solution.</p>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Get in Touch</h4>
                        <p className="footer-desc">Pomp & Pepper Marketing<br />Strategy. Spectacle. Scale.<br />A technology-first growth partner for B2B tech and<br />premium consumer lifestyle brands.</p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/share/1AifayycCA/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/pompnpepper/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://www.instagram.com/pompnpepper?igsh=MXU1ZHNrcnVhNDZuZA==" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                        <Link to="/contact" style={{ textDecoration: 'none', display: 'flex', marginTop: '1.2rem', width: 'fit-content' }}>
                            <button className="btn-get-started">
                                Get Started
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Watermark Image Row */}
                <div className="footer-mark-wrapper">
                    <img src="/mark.png" alt="Watermark" className="footer-mark-img" />
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright-text">© 2026 Pomp & Pepper Marketing Pvt. Ltd. | All Rights Reserved. | Based in India, Serving Global Tech Ecosystems.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
