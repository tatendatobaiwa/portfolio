import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#000000', // Plain black background
      color: '#fff',
      padding: '20px 40px',
      textAlign: 'center',
      position: 'relative',
      borderTop: '1px solid rgba(149, 149, 225, 0.1)', // Matching the header border
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', // San Francisco font
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #9595e1, #67679f)', // Gradient text
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          MyPortfolio
        </div>

        {/* Footer Text */}
        <p style={{
          fontSize: '0.9rem',
          color: '#9595e1', // Light purple text
        }}>
          © 2025 MyPortfolio. All Rights Reserved.
        </p>

        {/* Footer Links */}
        <ul style={{
          display: 'flex',
          gap: '15px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}>
          <li><a href="/" style={{
            textDecoration: 'none',
            fontSize: '1rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}>
            Home
          </a></li>
          <li><a href="/about" style={{
            textDecoration: 'none',
            fontSize: '1rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}>
            About
          </a></li>
          <li><a href="/projects" style={{
            textDecoration: 'none',
            fontSize: '1rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}>
            Projects
          </a></li>
          <li><a href="/contact" style={{
            textDecoration: 'none',
            fontSize: '1rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}>
            Contact
          </a></li>
        </ul>

        {/* Social Icons */}
        <ul style={{
          display: 'flex',
          gap: '15px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}>
          <li><a href="https://github.com/tatendatobaiwa" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '1.2rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}>
            <i className="fab fa-github"></i>
          </a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '1.2rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}>
            <i className="fab fa-linkedin"></i>
          </a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '1.2rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}>
            <i className="fab fa-twitter"></i>
          </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;