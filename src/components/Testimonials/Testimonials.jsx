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
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="quote-icon">
        <path d="M9.13456 9C10.7171 9 12 10.3431 12 12C12 13.6569 10.7171 15 9.13456 15C8.30756 15 7.56201 14.636 7.04353 14.0537C6.86675 16.3151 5.48514 18.2323 3.51855 19L2.61111 17.5C4.26629 16.5 5.13456 15.1111 5.13456 13.5V11C5.13456 9.89543 6.02999 9 7.13456 9H9.13456ZM21.1346 9C22.7171 9 24 10.3431 24 12C24 13.6569 22.7171 15 21.1346 15C20.3076 15 19.562 14.636 19.0435 14.0537C18.8668 16.3151 17.4851 18.2323 15.5186 19L14.6111 17.5C16.2663 16.5 17.1346 15.1111 17.1346 13.5V11C17.1346 9.89543 18.03 9 19.1346 9H21.1346Z" fill="url(#quote-gradient)" />
        <defs>
            <linearGradient id="quote-gradient" x1="2" y1="9" x2="24" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b062eb" />
                <stop offset="1" stopColor="#ed67ae" />
            </linearGradient>
        </defs>
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

