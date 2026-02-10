import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useScrollAnimation } from '../utils/scrollAnimation';
import whatsappImage from './Photo.jpg';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  useScrollAnimation();
  
  useEffect(() => {
    // Cinematic entrance animation
    const timer = setTimeout(() => {
      const elements = heroRef.current?.querySelectorAll('.hero-element');
      elements?.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-in');
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-atmosphere"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title hero-element">Divagar K</h1>
            <h2 className="hero-subtitle hero-element">Full Stack Developer</h2>
            <p className="hero-description hero-element">
              Crafting scalable web applications with React & Spring Boot. 
              Building secure, user-centric solutions with modern technologies.
            </p>
            <div className="hero-status hero-element">
              <span className="status-indicator"></span>
              Currently open to opportunities
            </div>
            <div className="hero-buttons hero-element">
              <a href="#projects" className="btn">View Work</a>
              <a href="#contact" className="btn btn-outline">Connect</a>
            </div>
            <div className="social-links hero-element">
              <a href="https://github.com/Divagarkathiresan" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/divagar-kathiresan-a789352a0" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/Divagar_k/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
              </a>
              <a href="mailto:divagar656@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container hero-element parallax" data-speed="0.3">
              <img 
                src={whatsappImage}
                alt="Divagar K"
                className="profile-image"
              />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Hero;