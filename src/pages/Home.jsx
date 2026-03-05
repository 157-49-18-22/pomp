import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import Capabilities from '../components/Capabilities/Capabilities';
import Philosophy from '../components/Philosophy/Philosophy';
import WhoWeWorkWith from '../components/WhoWeWorkWith/WhoWeWorkWith';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1, // Lower threshold for mobile
            rootMargin: '-20px 0px' // Slightly better trigger area
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach(el => observer.observe(el));

        // Force active state for hash-linked sections immediately
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Find the reveal-on-scroll wrapper
                const wrapper = targetSection.closest('.reveal-on-scroll');
                if (wrapper) wrapper.classList.add('active');
            }
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="reveal-on-scroll"><Hero /></div>
            <div className="reveal-on-scroll"><Stats /></div>
            <div className="reveal-on-scroll"><About /></div>
            <div className="reveal-on-scroll"><Capabilities /></div>
            <div className="reveal-on-scroll"><Philosophy /></div>
            <div className="reveal-on-scroll"><WhoWeWorkWith /></div>
            <div className="reveal-on-scroll"><Testimonials /></div>
            <div className="reveal-on-scroll"><CTA /></div>
        </>
    );
};

export default Home;
