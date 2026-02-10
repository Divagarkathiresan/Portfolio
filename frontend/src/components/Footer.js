import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* <div className="footer-text">
            <p>&copy; 2025 Divagar K. All rights reserved. | Open to opportunities | Let's build something amazing!</p>
          </div> */}
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/Divagarkathiresan" target="_blank" rel="noopener noreferrer" title="View GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/divagar-kathiresan-a789352a0" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/Divagar_k/" target="_blank" rel="noopener noreferrer" title="View LeetCode">
              <SiLeetcode />
            </a>
            <a href="mailto:divagar656@gmail.com" title="Send Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;