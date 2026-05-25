import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Contact.css';

const RECIPIENT_EMAIL = 'divagar656@gmail.com';

const Contact = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const payload = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `Portfolio Contact: ${formData.name}`,
        _captcha: 'false',
        _template: 'table',
        replyto: formData.email,
        _replyto: formData.email
      });

      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Accept: 'application/json'
        },
        body: payload.toString()
      });

      const responseType = response.headers.get('content-type') || '';
      let result = {};

      if (responseType.includes('application/json')) {
        result = await response.json();
      } else {
        const responseText = await response.text();
        try {
          result = JSON.parse(responseText);
        } catch {
          result = { message: responseText };
        }
      }

      const isSuccess =
        result.success === true ||
        result.success === 'true' ||
        (typeof result.message === 'string' && /sent|success/i.test(result.message));

      if (!response.ok || !isSuccess) {
        throw new Error(result.message || `Unable to send message (HTTP ${response.status}).`);
      }

      setSubmitStatus({
        type: 'success',
        message: "Message sent successfully. I'll reply within 24 hours."
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Message sending failed. Please try again.'
      });
      // Fallback: open user's default mail client with prefilled message so they can send the message
      try {
        // small delay so the error message is visible briefly
        setTimeout(() => {
          window.location.href = mailtoHref;
        }, 600);
      } catch (mailtoErr) {
        // ignore if mailto fails
        console.error('Mailto fallback failed:', mailtoErr);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
    `Portfolio Contact: ${formData.name || 'Website Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development. I typically reply 
              within 24 hours via email.
            </p>
            <p>
              <strong>Currently open to full-time opportunities & freelance projects in Full Stack Development.</strong>
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <span>Salem, India</span>
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
              <a href="https://leetcode.com/u/Divagar_k/" target="_blank" rel="noopener noreferrer">
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
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus.message && (
              <p className={`form-status ${submitStatus.type}`} role="status">
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
