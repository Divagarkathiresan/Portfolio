import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Projects.css';

const Projects = () => {
  useScrollAnimation();
  
  const projects = [
    {
      title: 'Dynamic Online Book Store',
      description: 'Designing the backend of a dynamic online book store with Spring Boot, creating RESTful APIs to manage books, users, and orders. Created JWT-based authentication, role-based access control (RBAC), and secure payments.',
      tech: ['Spring Boot', 'MySQL', 'JWT', 'REST API'],
      github: 'https://github.com/Divagarkathiresan/book-store-api-project',
      type: 'Backend'
    },
    {
      title: 'Food Delivery System',
      description: 'Created a React frontend for a food delivery system that allows users to navigate restaurants, add items to the cart, and place orders with ease. Built responsive UI with effective state management.',
      tech: ['React', 'JavaScript', 'CSS', 'API Integration'],
      github: 'https://github.com/Divagarkathiresan/food-delivery',
      type: 'Frontend'
    },
    {
      title: 'Learning Management System',
      description: 'Developed a full-stack application for managing courses, users, and assignments. Implemented backend using Spring Boot with RESTful APIs and frontend using React with responsive UI.',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
      github: 'https://github.com/iamneo-production/381ae5ba-c1d6-4e88-a7a6-d88dd444461d-e799d43d-bba0-4b4e-a758-5ee70f4c6e6a/tree/Learning-Management-System-Divagarkathiresan',
      type: 'Full Stack'
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
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> GitHub
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