import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

// SVG for Star


const reviews = [
    {
        id: 1,
        name: "Danny Sena",
        title: "Co Founder Of Xyz Compny",
        rating: "4.2",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat."
    },
    {
        id: 2,
        name: "Yuki Driouech",
        title: "Product Manager at ABC",
        rating: "4.8",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        name: "Logan Barnes",
        title: "Creative Director",
        rating: "4.5",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        id: 4,
        name: "Tatjana Hamilton",
        title: "Tech Lead at StartUp",
        rating: "4.7",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    }
];

const QuoteIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="quote-icon">
        <path d="M14.017 21L14.017 18C14.017 11.142 16.942 9.447 19.344 7.553C20.108 6.949 21.056 6.551 22 5.999L22 4.02C18.845 3.821 16.21 4.316 14.12 5.37C11.531 6.674 10.017 9.079 10.017 12.499V21H14.017ZM4 21H8V12.499C8 9.079 9.514 6.674 12.103 5.37C14.193 4.316 16.828 3.821 19.983 4.02L19.983 5.999C19.039 6.551 18.09 6.949 17.327 7.553C14.925 9.447 12 11.142 12 18V21H4Z" fill="currentColor" />
    </svg>
);

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = useCallback(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % reviews.length);
            setIsAnimating(false);
        }, 500);
    }, []);

    const handleDotClick = (index) => {
        if (index === activeIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
        }, 500);
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentReview = reviews[activeIndex];

    return (
        <section className="testimonials-section container" id="testimonials">
            <div className="testimonials-grid">
                <div className="testimonials-header-content">
                    <div className="testimonials-badge-wrapper">
                        <h4 className="badge-text text-gradient">TESTIMONIALS</h4>
                    </div>
                    <h2 className="testimonials-headline">
                        Voices of <br />
                        <span className="text-gradient">Success</span>
                    </h2>
                    <p className="testimonials-subtitle">
                        We don't just build brands; we build lasting partnerships. Our clients' growth is the ultimate measure of our success.
                    </p>

                    <div className="pagination-wrapper">
                        <div className="pagination-dots">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                >
                                    <span className="dot-inner"></span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="testimonial-card-wrapper">
                    <div className={`testimonial-card-v2 ${isAnimating ? 'animating' : ''}`}>
                        <div className="card-top-decoration">
                            <QuoteIcon />
                        </div>

                        <div className="testimonial-body">
                            <p className="testimonial-quote">
                                "{currentReview.text}"
                            </p>
                        </div>

                        <div className="testimonial-author">
                            <div className="author-info">
                                <h3 className="author-name">{currentReview.name}</h3>
                                <p className="author-role">{currentReview.title}</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="decorative-glow"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

