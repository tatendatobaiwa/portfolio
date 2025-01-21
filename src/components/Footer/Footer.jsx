import React from 'react';
import logo from '../../assets/tobaiwastudios.webp'; 

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
        <div>
          <img
            src={logo} // Use the imported logo
            alt="Tobaiwa Studios Logo"
            style={{
              height: '60px', // Adjust height as needed
              width: 'auto', // Maintain aspect ratio
            }}
          />
        </div>
        {/* Footer Text */}
        <p style={{
          fontSize: '0.9rem',
          color: '#9595e1', // Light purple text
        }}>
          © 2025 tobaiwastudios. All Rights Reserved.
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
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9595e1'; // Revert to original color
          }}>
            Home
          </a></li>
          <li><a href="/about" style={{
            textDecoration: 'none',
            fontSize: '1rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9595e1'; // Revert to original color
          }}>
            About
          </a></li>
          <li><a href="/projects" style={{
            textDecoration: 'none',
            fontSize: '1rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9595e1'; // Revert to original color
          }}>
            Projects
          </a></li>
          <li><a href="/contact" style={{
            textDecoration: 'none',
            fontSize: '1rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9595e1'; // Revert to original color
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
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9595e1'; // Revert to original color
          }}>
            <i className="fab fa-github"></i>
          </a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '1.2rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9595e1'; // Revert to original color
          }}>
            <i className="fab fa-linkedin"></i>
          </a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '1.2rem',
            color: '#9595e1', // Light purple text
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9595e1'; // Revert to original color
          }}>
            <i className="fab fa-twitter"></i>
          </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;