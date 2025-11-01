import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
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
              An organized and motivated individual, eager to utilize time management and 
              organizational skills across diverse settings. Seeking entry-level opportunities 
              to enhance abilities while contributing to company growth.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
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
              <a href="https://wa.me/917010812682" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
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