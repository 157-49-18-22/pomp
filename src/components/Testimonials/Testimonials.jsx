
import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

// SVG for Star


const reviews = [
    {
        id: 1,
        name: "Danny Sena",
        title: "Co Founder Of Xyz Compny",
        rating: "4.2",
        avatar: "/leftt.png",
        text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat."
    },
    {
        id: 2,
        name: "Yuki Driouech",
        title: "Product Manager at ABC",
        rating: "4.8",
        avatar: "/leftt.png",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        name: "Logan Barnes",
        title: "Creative Director",
        rating: "4.5",
        avatar: "/leftt.png",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        id: 4,
        name: "Tatjana Hamilton",
        title: "Tech Lead at StartUp",
        rating: "4.7",
        avatar: "/leftt.png",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
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
                    Trust that started with <br /> the first project
                </h2>
                <p className="testimonials-subtitle">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,
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
