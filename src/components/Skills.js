import React from 'react';
import { FaReact, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiMysql, SiPostman } from 'react-icons/si';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Skills.css';

const Skills = () => {
  useScrollAnimation();
  
  const skills = [
    { 
      name: 'React', 
      icon: <FaReact />, 
      experience: '2+ years', 
      description: 'Expert in hooks, state management (Redux), performance optimization'
    },
    { 
      name: 'Java', 
      icon: <FaJava />, 
      experience: '3+ years', 
      description: 'OOP, concurrency, microservices, Spring ecosystem'
    },
    { 
      name: 'Spring Boot', 
      icon: <SiSpringboot />, 
      experience: '2+ years', 
      description: 'REST APIs, JPA/Hibernate, security, microservices'
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript />, 
      experience: '2+ years', 
      description: 'ES6+, async programming, DOM manipulation, API integration'
    },
    { 
      name: 'MySQL', 
      icon: <SiMysql />, 
      experience: '2+ years', 
      description: 'Database design, query optimization, transactions, indexing'
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt />, 
      experience: '2+ years', 
      description: 'Version control, branching strategies, collaborative development'
    },
  ];

  const softSkills = [
    {
      skill: 'Problem Solving',
      example: 'Debugged and resolved a critical API performance issue, improving response time from 2s to 200ms'
    },
    {
      skill: 'Team Collaboration',
      example: 'Led code reviews for 5-member team, mentored 2 junior developers in React best practices'
    },
    {
      skill: 'Web Development',
      example: 'Architected full-stack applications handling real-time data with React + Spring Boot'
    },
    {
      skill: 'Time Management',
      example: 'Delivered 3 major projects ahead of schedule while maintaining 100% code quality standards'
    },
    {
      skill: 'API Development',
      example: 'Built RESTful APIs serving 1000+ requests/day with comprehensive error handling'
    },
    {
      skill: 'Database Design',
      example: 'Optimized database queries reducing load time by 60% for data-heavy applications'
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Skills & Technologies</h2>
        <div className="skills-content">
          <div className="technical-skills animate-on-scroll">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-experience">{skill.experience}</span>
                    </div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="soft-skills animate-on-scroll from-right">
            <h3>Core Competencies</h3>
            <div className="soft-skills-grid">
              {softSkills.map((item, index) => (
                <div key={index} className="soft-skill-item">
                  <h4>{item.skill}</h4>
                  <p>{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;