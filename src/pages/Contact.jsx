import React, { useEffect } from 'react';
import ContactUs from '../components/ContactUs/ContactUs';

const Contact = () => {
    useEffect(() => {
        // Simple scroll reveal for the standalone page
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('active', entry.isIntersecting);
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page-wrapper">
            <ContactUs />
        </div>
    );
};

export default Contact;
