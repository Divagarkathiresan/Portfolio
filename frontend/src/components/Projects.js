import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Projects.css';

const Projects = () => {
  useScrollAnimation();
  
  const projects = [
    {
      title: 'Dynamic Online Book Store',
      description: 'Built a Spring Boot backend with REST APIs for books, users,cart, and orders. Implemented JWT authentication and RBAC, designed scalable MySQL schemas, and developed admin endpoints for product management, order tracking, and system operations.',
      tech: ['Spring Boot', 'MySQL', 'JWT', 'REST API', 'Query Optimization'],
      github: 'https://github.com/Divagarkathiresan/book-store-api-project',
      type: 'Backend - API Design - Database Architecture'
    },
    {
      title: 'Food Delivery System',
      description:'Developed a responsive React-based food delivery interface with restaurant browsing, cart management, and order placement. Implemented Hooks Context for state management, integrated REST APIs for live order updates, and focused on clean UI and smooth userexperience.',
      tech: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/Divagarkathiresan/food-delivery',
      live: 'https://food-delivery-frontend-uixs.onrender.com',
      type: 'Frontend - UI/UX - Responsive Design'
    },
    {
      title: 'Learning Management System',
      description: 'Created a full-stack LMS using Spring Boot and React.Developed APIs for authentication, courses, assignments, and roles (student/admin). Implemented JWT + RBAC security and built a responsive frontend with Hooks/Context for seamless interaction.',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
      github: 'https://github.com/iamneo-production/381ae5ba-c1d6-4e88-a7a6-d88dd444461d-e799d43d-bba0-4b4e-a758-5ee70f4c6e6a/tree/Learning-Management-System-Divagarkathiresan',
      type: 'Full Stack - System Architecture - Automation'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-on-scroll"
              onClick={() => project.live && window.open(project.live, '_blank', 'noopener,noreferrer')}
              onKeyDown={(e) => { if (project.live && (e.key === 'Enter' || e.key === ' ')) window.open(project.live, '_blank', 'noopener,noreferrer'); }}
              role={project.live ? 'link' : undefined}
              tabIndex={project.live ? 0 : -1}
              style={{ animationDelay: `${index * 0.2}s`, cursor: project.live ? 'pointer' : 'default' }}
            >
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