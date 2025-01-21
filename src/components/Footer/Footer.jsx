import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">MyPortfolio</div>
        <p className="footer-text">© 2025 MyPortfolio. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <ul className="social-icons">
          <li><a href="https://github.com/tatendatobaiwa" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
