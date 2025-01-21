import React from 'react';

function About() {
  const skills = [
    'Web Development (React, Vite, HTML, CSS, JavaScript)',
    'Backend Development (Node.js, Express)',
    'Database Management (MySQL, MongoDB)',
    'AI and Machine Learning (Python, TensorFlow)',
    'UI/UX Design (Figma, Adobe XD)',
  ];

  const funFacts = [
    'I love exploring the intersection of technology and creativity.',
    'In my free time, I enjoy photography and creating digital art.',
    'I am on a mission to make impactful software for NGOs and underserved communities.',
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #202034, #000000)',
      color: '#fff',
      padding: '60px 20px',
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <section style={{ marginBottom: '60px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            background: 'linear-gradient(135deg, #9595e1, #67679f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '30px',
            textAlign: 'center',
            letterSpacing: '-0.5px',
          }}>
            About Me
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.2rem)',
            lineHeight: '1.8',
            color: '#9595e1',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            Hello! I'm Tatenda, a passionate software engineer and designer with a knack for crafting elegant, intuitive, and efficient digital experiences. Whether it's designing a clean user interface or building a robust backend system, I thrive on solving challenging problems and bringing ideas to life.
          </p>
        </section>

        <section style={{
          background: 'rgba(149, 149, 225, 0.05)',
          padding: '40px',
          borderRadius: '20px',
          marginBottom: '60px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(149, 149, 225, 0.1)',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
            color: '#9595e1',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            Skills & Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {skills.map((skill, index) => (
              <div key={index} style={{
                background: 'rgba(149, 149, 225, 0.08)',
                padding: '20px',
                borderRadius: '15px',
                color: '#9595e1',
                fontSize: '1rem',
                lineHeight: '1.6',
                transition: 'transform 0.3s ease',
                cursor: 'default',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section style={{
          background: 'rgba(149, 149, 225, 0.05)',
          padding: '40px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(149, 149, 225, 0.1)',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
            color: '#9595e1',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            Fun Facts
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}>
            {funFacts.map((fact, index) => (
              <div key={index} style={{
                color: '#9595e1',
                fontSize: '1rem',
                lineHeight: '1.8',
                padding: '15px',
                background: 'rgba(149, 149, 225, 0.08)',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                {fact}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;