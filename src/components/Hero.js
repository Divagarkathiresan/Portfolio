import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useScrollAnimation } from '../utils/scrollAnimation';
import whatsappImage from './Photo.jpg';
import './Hero.css';

const Hero = () => {
  useScrollAnimation();
  
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1>Hi, I'm <span>Divagar K</span></h1>
            <h2>Full Stack Developer</h2>
            <p>
              Full Stack Developer crafting scalable web applications with React & Spring Boot. 
              Building secure, user-centric solutions with modern technologies and delivering 
              measurable performance improvements.
            </p>
            <div className="hero-cta">
              <p className="availability-status">
                🟢 Currently open to full-time opportunities & freelance projects
              </p>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Let's Connect</a>
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
              <a href="mailto:divagar656@gmail.com">
                <FaEnvelope />
              </a>

            </div>
          </div>
          <div className="hero-image animate-on-scroll from-right">
            <img 
              src={whatsappImage}
              alt="Divagar K"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;