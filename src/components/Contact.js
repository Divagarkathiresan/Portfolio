import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Contact.css';

const Contact = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:divagar656@gmail.com">divagar656@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917010812682">+91 7010812682</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <span>Salem, India 636401</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Divagarkathiresan" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/divagar-kathiresan-a789352a0" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/Divagar_k/AN/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
              </a>
            </div>
          </div>
          <form className="contact-form animate-on-scroll from-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;