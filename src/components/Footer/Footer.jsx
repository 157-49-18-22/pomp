import React from 'react';
import './Footer.css';

// Small 3D Ribbon for Footer matches Navbar exactly
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

                    {/* Column 1: Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Pomp & Pepper Logo" className="footer-logo-img" />
                        </div>
                        <p className="footer-brand-desc">
                            Elevating brands through strategic<br />
                            precision and digital spectacle.<br />
                            Let's build something remarkable<br />
                            together.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon"><span>f</span></a>
                            <a href="#" className="social-icon"><span>in</span></a>
                            <a href="#" className="social-icon"><span>𝕏</span></a>
                            <a href="#" className="social-icon"><span>▶</span></a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Brand Identity</a></li>
                            <li><a href="#">Digital Strategy</a></li>
                            <li><a href="#">Growth Marketing</a></li>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Web Development</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Contact</h4>
                        <div className="footer-contact-item">
                            <div className="contact-icon"><LocationIcon /></div>
                            <p>DLF Corporate Greens,<br />Faridabad, India</p>
                        </div>
                        <div className="footer-contact-item">
                            <div className="contact-icon"><EmailIcon /></div>
                            <p>hello@pompandpepper.com</p>
                        </div>
                    </div>

                    {/* Column 4: New Business */}
                    <div className="footer-links-col">
                        <h4 className="footer-col-title">New Business</h4>
                        <p className="footer-business-desc">
                            Interested in working together? Tell us<br />about your project.
                        </p>
                        <button className="btn-get-started">Get Started</button>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright-text">© 2026 Pomp & Pepper Agency. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
