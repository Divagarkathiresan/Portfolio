import React from 'react';
import { FaReact, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiMysql, SiPostman } from 'react-icons/si';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Skills.css';

const Skills = () => {
  useScrollAnimation();
  
  const skills = [
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Java', icon: <FaJava />, level: 90 },
    { name: 'Spring Boot', icon: <SiSpringboot />, level: 80 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
    { name: 'MySQL', icon: <SiMysql />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 80 },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Effective Communication',
    'Time Management',
    'Web Development',
    'Cloud Computing'
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
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="soft-skills animate-on-scroll from-right">
            <h3>Core Competencies</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  {skill}
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