import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Projects.css';

const Projects = () => {
  useScrollAnimation();
  
  const projects = [
    {
      title: 'Dynamic Online Book Store',
      description: 'Designed scalable backend for online book store with Spring Boot, creating RESTful APIs managing 1000+ books and user transactions. Reduced API response time by 45% through query optimization and caching. Implemented RBAC system securing access for 3 user roles (Admin, Vendor, Customer) and handled concurrent transactions for 100+ simultaneous users without data loss.',
      tech: ['Spring Boot', 'MySQL', 'JWT', 'REST API', 'Query Optimization'],
      github: 'https://github.com/Divagarkathiresan/book-store-api-project',
      type: 'Backend - API Design - Database Architecture',
      metrics: ['45% faster API response', '100+ concurrent users', '3-tier RBAC system']
    },
    {
      title: 'Food Delivery System',
      description: 'Built responsive React frontend for food delivery platform with real-time order tracking using WebSockets. Designed mobile-first UI supporting 98% browser compatibility and integrated Razorpay payment gateway processing 50+ transactions daily. Implemented efficient state management reducing component re-renders by 30%.',
      tech: ['React', 'JavaScript', 'CSS', 'WebSockets', 'Razorpay API'],
      github: 'https://github.com/Divagarkathiresan/food-delivery',
      type: 'Frontend - UI/UX - Responsive Design',
      metrics: ['98% browser compatibility', '50+ daily transactions', '30% fewer re-renders']
    },
    {
      title: 'Learning Management System',
      description: 'Architected comprehensive LMS managing 1000+ courses and 5000+ student records with efficient database indexing. Implemented role-based access control for Admins, Instructors, and Students. Built automated assignment grading system saving 20 hours/week of manual work and developed real-time progress tracking dashboard.',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API', 'Automated Grading'],
      github: 'https://github.com/iamneo-production/381ae5ba-c1d6-4e88-a7a6-d88dd444461d-e799d43d-bba0-4b4e-a758-5ee70f4c6e6a/tree/Learning-Management-System-Divagarkathiresan',
      type: 'Full Stack - System Architecture - Automation',
      metrics: ['5000+ student records', '20 hours/week saved', 'Real-time tracking']
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.metrics && (
                <div className="project-metrics">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex}>{metric}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;