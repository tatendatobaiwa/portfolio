import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'UniVault',
    description: 'A platform providing comprehensive university information in Botswana.',
    technologies: ['React', 'TypeScript', 'CSS'],
    link: 'https://example.com',
  },
  {
    title: 'Able Hearts NGO Website',
    description: 'A website built for an NGO, focusing on accessibility and usability.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://example.com',
  },
  {
    title: 'Lung Cancer Detection AI',
    description: 'A CNN-based AI project for analyzing DICOM images for lung cancer diagnosis.',
    technologies: ['Python', 'TensorFlow', 'Explainable AI'],
    link: 'https://example.com',
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span className="technology" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
