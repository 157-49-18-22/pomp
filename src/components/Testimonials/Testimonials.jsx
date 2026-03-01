import React from 'react';
import './Testimonials.css';

// SVG for Google "G" Logo
const GoogleIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

// CSS trick / SVG for Star
const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

const SmallStarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

const reviews = [
    {
        id: 1,
        name: "Yuki Driouech",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop", // Business woman
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..."
    },
    {
        id: 2,
        name: "Logan Barnes",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop", // Businessman
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1..."
    },
    {
        id: 3,
        name: "Tatjana Hamilton",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop", // Woman
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer to..."
    },
    {
        id: 4,
        name: "Jennifer Head",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop", // Business woman 2
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve..."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section container">
            <div className="testimonials-header">
                <h2 className="section-title">Testimonial</h2>

                <div className="google-review-badge">
                    <div className="google-logo">
                        <GoogleIcon />
                    </div>
                    <div className="google-rating-info">
                        <span className="google-label">Google-Review</span>
                        <div className="google-stars-wrapper">
                            <span className="google-score">4.6</span>
                            <div className="stars-row">
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews-grid">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <img src={review.avatar} alt={review.name} className="review-avatar" />
                            <div className="review-user-info">
                                <h4 className="review-name">{review.name}</h4>
                                <div className="review-stars">
                                    <SmallStarIcon /><SmallStarIcon /><SmallStarIcon /><SmallStarIcon /><SmallStarIcon />
                                </div>
                            </div>
                        </div>
                        <p className="review-text">
                            {review.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="testimonials-footer">
                <a href="#" className="read-more-link">Mehr Bewertungen lesen <span className="arrow">→</span></a>
            </div>
        </section>
    );
};

export default Testimonials;
