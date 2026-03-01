import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Capabilities from './components/Capabilities/Capabilities';
import Philosophy from './components/Philosophy/Philosophy';
import WhoWeWorkWith from './components/WhoWeWorkWith/WhoWeWorkWith';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15, // Reveal when 15% is visible
      rootMargin: '0px 0px -50px 0px' // Slightly before it hits the bottom
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Toggle 'active' class based on visibility to re-trigger animation on scroll up/down
        entry.target.classList.toggle('active', entry.isIntersecting);
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-wrapper">
      <Background />
      <Navbar />

      {/* Sections with alternating reveal effect */}
      <div className="reveal-on-scroll"><Hero /></div>
      <div className="reveal-on-scroll"><Stats /></div>
      <div className="reveal-on-scroll"><About /></div>
      <div className="reveal-on-scroll"><Capabilities /></div>
      <div className="reveal-on-scroll"><Philosophy /></div>
      <div className="reveal-on-scroll"><WhoWeWorkWith /></div>
      <div className="reveal-on-scroll"><Testimonials /></div>

      <Footer />
    </div>
  );
}

export default App;
