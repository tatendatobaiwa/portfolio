import React from 'react';

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
    <div style={{
      background: 'linear-gradient(135deg, #202034, #000000)',
      color: '#1d1d1f',
      padding: '80px 20px',
      minHeight: '100vh',
    }}>
      {/* Updated "Featured Projects" heading */}
      <h1 style={{
        fontSize: '48px',
        fontWeight: '700',
        marginBottom: '60px',
        textAlign: 'center',
        color: '#9595e1', // Plain light purple
        letterSpacing: '-0.5px'
      }}>
        Featured Projects
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: '#202034',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              backdropFilter: 'blur(20px)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
            }}
          >
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#9595e1'
            }}>
              {project.title}
            </h2>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#9595e1',
              marginBottom: '24px'
            }}>
              {project.description}
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '30px'
            }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} style={{
                  background: '#f5f5f7',
                  color: '#1d1d1f',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              style={{
                display: 'inline-block',
                background: '#9595e1',
                color: '#202034',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '16px',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#67679f';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#9595e1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;