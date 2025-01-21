import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MyPortfolio</h1>
          <p className="hero-subtitle">
            Crafting premium experiences through clean design and modern solutions.
          </p>
          <a href="/projects" className="cta-button">View My Work</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
