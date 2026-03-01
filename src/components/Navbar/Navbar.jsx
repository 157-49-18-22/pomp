import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`nav-inner ${isMenuOpen ? 'menu-active' : ''}`}>
                <div className="logo-area">
                    <img src="/logo.png" alt="Pomp &amp; Pepper Logo" className="navbar-logo-img" />
                </div>

                <div className={`nav-menu-container ${isMenuOpen ? 'open' : ''}`}>
                    {/* Decorative Background Icons */}
                    <img src="/hero.png" className="menu-bg-icon icon-1" alt="" />
                    <img src="/hero.png" className="menu-bg-icon icon-2" alt="" />
                    <img src="/hero.png" className="menu-bg-icon icon-3" alt="" />

                    <ul className="nav-links">
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                        <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
                    </ul>
                    <button className="btn-contact mobile-only">Contact Us</button>
                </div>

                <div className="nav-actions">
                    <button className="btn-contact desktop-only">Contact Us</button>
                    <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
