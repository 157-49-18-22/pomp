
import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

// SVG for Star


const reviews = [
    {
        id: 1,
        name: "Piyush Munjal",
        title: "Business Head India and SAARC, Micron",
        rating: "5.0",
        avatar: "/leftt.png",
        text: "Pomp & Pepper showed strong execution skills in digital, engagement, and experiential activations, delivering consistently with discipline. Their reporting, timelines, and teamwork made them a reliable extension of our team"
    },
    {
        id: 2,
        name: "Ishaan Arya",
        title: "VP, Nodwin",
        rating: "5.0",
        avatar: "/leftt.png",
        text: "Pomp & Pepper team brings forth the understanding and bright ideas needed to execute large events. Comic Con audiences expect immersive brand experiences, and Pomp & Pepper delivered exactly that. The execution was creative, precise, and perfectly aligned with the energy of the event."
    },
    {
        id: 3,
        name: "Marketing Manager",
        title: "GIGABYTE",
        rating: "5.0",
        avatar: "/leftt.png",
        text: "\"Pomp & Pepper understood our brand before we even finished our brief.\" From strategy to final build, they brought genuine care and sharp expertise to every stage. The booth they created didn't just represent us — it opened doors. Visitors gravitated toward it, conversations flowed naturally, and our team felt proud to stand in that space. They're the kind of partners you hope for but rarely find."
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, []);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentReview = reviews[activeIndex];

    return (
        <section className="testimonials-section container">
            <div className="testimonials-header-group">
                <div className="testimonials-badge">
                    <h4 className="badge-text text-gradient">TESTIMONIAL</h4>
                </div>
                <h2 className="testimonials-headline">
                    Proven Impact. <br /> Measured Growth.
                </h2>
                <p className="testimonials-subtitle">
                    Moving the needle for tech and lifestyle leaders through strategic storytelling and robust digital infrastructure.
                </p>
            </div>

            <div className="testimonial-card-container">
                <div className="testimonial-card">
                    <div className="testimonial-card-image-box">
                        <img
                            src={currentReview.avatar}
                            alt={currentReview.name}
                            className="testimonial-card-image"
                            key={`img-${currentReview.id}`}
                        />
                    </div>
                    <div className="testimonial-card-content">
                        <div className="testimonial-card-top">

                            <div className="testimonial-user-info">
                                <h3 className="user-name">{currentReview.name}</h3>
                                <p className="user-title">{currentReview.title}</p>
                            </div>
                        </div>

                        <div className="testimonial-text-box">
                            <p className="testimonial-text" key={`text-${currentReview.id}`}>
                                {currentReview.text}
                            </p>
                        </div>

                        <div className="testimonial-card-footer">
                            <div className="pagination-dots">
                                {reviews.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
