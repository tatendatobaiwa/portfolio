import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-section">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hello! I'm Tatenda, a passionate software engineer and designer with a knack for crafting elegant, intuitive, and efficient digital experiences. Whether it's designing a clean user interface or building a robust backend system, I thrive on solving challenging problems and bringing ideas to life.
        </p>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <ul className="skills-list">
          <li>Web Development (React, Vite, HTML, CSS, JavaScript)</li>
          <li>Backend Development (Node.js, Express)</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>AI and Machine Learning (Python, TensorFlow)</li>
          <li>UI/UX Design (Figma, Adobe XD)</li>
        </ul>
      </section>

      <section className="fun-facts-section">
        <h2 className="section-title">Fun Facts</h2>
        <p className="fun-facts">
          - I love exploring the intersection of technology and creativity.<br />
          - In my free time, I enjoy photography and creating digital art.<br />
          - I'm on a mission to make impactful software for NGOs and underserved communities.
        </p>
      </section>
    </div>
  );
}

export default About;
