import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../utils/scrollAnimation';
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
                <h4>Frontend Developer</h4>
                <span className="experience-badge">Hackathon · IamNeo · 2026</span>
              </div>
              <p className="experience-duration">40-Hour Hackathon</p>
              <p className="experience-stack">React · FastAPI · ML</p>
              <ul className="experience-points">
                  <li>Developed a responsive and user-friendly React frontend for an AI-driven virtual health assistant focused on predictive diabetes risk assessment.</li>
                  <li>Designed and implemented interactive dashboards, data visualization components, and conversational UI to deliver real-time health insights.</li>
                  <li>Integrated frontend modules with FastAPI APIs, ensuring seamless data flow between the user interface and machine learning services.</li>
                  <li>Enhanced user experience by presenting explainable AI (XAI) results through intuitive visualizations, transparent risk scores, and personalized health recommendations.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
