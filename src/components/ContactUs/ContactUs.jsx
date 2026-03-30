import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './ContactUs.css';
import '../Footer/Footer.css';



const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [focus, setFocus] = useState('');

    return (
        <>
            <section className="contactus-section" id="contact">
                <div className="contactus-container">
                    <div className="contactus-top-section reveal-on-scroll">
                        <div className="contactus-form-card">
                            <h1 className="contactus-heading">Get in Touch</h1>
                            <form className="contactus-form-modern" action="https://formspree.io/f/xwvwooqn" method="POST">
                                <div className="contactus-row">
                                    <div className="contactus-field">
                                        {!(focus === 'name' || form.name) && <label>Name</label>}
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            onFocus={() => setFocus('name')}
                                            onBlur={() => setFocus('')}
                                            required
                                        />
                                    </div>
                                    <div className="contactus-field">
                                        {!(focus === 'phone' || form.phone) && <label>Phone</label>}
                                        <input
                                            type="text"
                                            name="phone"
                                            value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                            onFocus={() => setFocus('phone')}
                                            onBlur={() => setFocus('')}
                                        />
                                    </div>
                                </div>
                                <div className="contactus-field">
                                    {!(focus === 'email' || form.email) && <label>Email</label>}
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        onFocus={() => setFocus('email')}
                                        onBlur={() => setFocus('')}
                                        required
                                    />
                                </div>
                                <div className="contactus-field">
                                    {!(focus === 'message' || form.message) && <label>Message...</label>}
                                    <textarea
                                        rows={2}
                                        name="message"
                                        value={form.message}
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                        onFocus={() => setFocus('message')}
                                        onBlur={() => setFocus('')}
                                        required
                                    />
                                </div>
                                <button type="submit" className="contactus-submit-btn">SUBMIT</button>
                            </form>
                        </div>

                        <div className="contactus-info-card">
                            <h2 className="contactus-info-heading">Contact info</h2>
                            <div className="contactus-info-list">
                                <div className="contactus-info-item">
                                    <div className="contact-info-icon-wrapper">
                                        <FaPhoneAlt className="contactus-info-icon" />
                                    </div>
                                    <span>+91 8368375358</span>
                                </div>
                                <div className="contactus-info-item">
                                    <div className="contact-info-icon-wrapper">
                                        <FaEnvelope className="contactus-info-icon" />
                                    </div>
                                    <span>hello@pompnpepper.com</span>
                                </div>
                                <div className="contactus-info-item">
                                    <div className="contact-info-icon-wrapper">
                                        <FaMapMarkerAlt className="contactus-info-icon" />
                                    </div>
                                    <span>Puri High Street, Sector 81, Faridabad, India</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="contactus-map-card reveal-on-scroll">
                        <div className="office-location-header">
                            <div className="office-location-left">
                                <span className="office-label">OUR OFFICE</span>
                                <h3 className="office-title">Visit Us In Person</h3>
                                <p className="office-subtitle">We'd love to meet you. Our team is available Mon–Fri, 10 AM – 6 PM.</p>
                                <div className="office-address-block">
                                    <div className="office-address-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 4 15.3176 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 15.3176 12 22 12 22Z" stroke="#FF3BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="10" r="3" stroke="#FF3BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="office-addr-line">Puri High Street, Sector 81</p>
                                        <p className="office-addr-line">Faridabad, Haryana 121002</p>
                                        <p className="office-addr-line">India</p>
                                    </div>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Puri+High+Street+Sector+81+Faridabad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="office-directions-btn"
                                >
                                    Get Directions →
                                </a>
                            </div>
                            <div className="office-location-right">
                                <div className="contactus-map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.882853860267!2d77.3403438!3d28.392606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcf092932d57%3A0xdd996783965fdac4!2sPuri%20High%20Street%2C%20Sector%2081%2C%20Faridabad%2C%20Haryana%20121002!5e0!3m2!1sen!2sin!4v1772613827496!5m2!1sen!2sin"
                                        width="100%"
                                        height="380"
                                        style={{ border: 0, borderRadius: '20px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Pomp & Pepper Office Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactUs;
