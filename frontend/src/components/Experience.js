import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../utils/scrollAnimation';
import image1 from '../Experiance_images/image.png';
import image2 from '../Experiance_images/image copy.png';
import image3 from '../Experiance_images/image copy 2.png';
import image4 from '../Experiance_images/image 123.jpeg';
import image5 from '../Experiance_images/WhatsApp Image 2026-05-26 at 01.24.12.jpeg';
import image6 from '../Experiance_images/WhatsApp Image 2026-05-26 at 01.24.14.jpeg';
import image7 from '../Experiance_images/WhatsApp Image 2026-05-26 at 01.24.16.jpeg';
import './Experience.css';

const Experience = () => {
  useScrollAnimation();
  const images = [ image3 , image4, image5, image6, image7];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Experience</h2>
        <div className="experience-content">
          <div className="experience-details animate-on-scroll">
            <h3>Hackathon Experience</h3>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Backend Developer</h4>
                <span className="experience-badge">Hackathon · IamNeo · 2026</span>
              </div>
              <p className="experience-duration">40-Hour Hackathon</p>
              <p className="experience-stack">React · FastAPI · ML</p>
              <ul className="experience-points">
                <li>Developed an AI-driven virtual health assistant for predictive diabetes risk assessment using ML models and rule-based inference.</li>
                <li>Built a responsive React frontend with interactive dashboards and conversational UI for real-time health insights.</li>
                <li>Integrated a FastAPI backend with explainable AI (XAI) techniques to provide transparent risk scoring and personalized recommendations.</li>
              </ul>
            </div>
          </div>
          <div className="experience-visuals animate-on-scroll from-right">
            <h3>Experience Visuals</h3>
            <div className="gallery-frame">
              <img src={images[currentImage]} alt={`Experience ${currentImage + 1}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
