import React, { useState } from 'react';
import logo from '../../assets/tobaiwastudios.webp'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{
      background: '#000000', // Plain black background
      padding: '10px 20px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(149, 149, 225, 0.1)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px', // Updated to match the home page
        margin: '0 auto',
        padding: '0 20px', // Added padding to align with body and footer
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

        {/* Navigation */}
        <nav>
          {/* Hamburger Menu (Font Awesome Icon) */}
          <div
            style={{
              display: 'none',
              cursor: 'pointer',
              color: '#9595e1',
              fontSize: '1.5rem',
              transition: 'color 0.3s',
            }}
            onClick={toggleMenu}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#9595e1'; // Revert to original color
            }}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          {/* Nav Links */}
          <ul style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            ...(isMenuOpen && {
              flexDirection: 'column',
              position: 'absolute',
              top: '50px',
              right: '20px',
              width: '200px',
              padding: '20px',
              background: 'rgba(149, 149, 225, 0.05)',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(149, 149, 225, 0.1)',
            }),
          }}>
            <li>
              <a href="/" style={{
                textDecoration: 'none',
                fontSize: '1rem',
                color: '#9595e1',
                padding: '5px 10px',
                transition: 'color 0.3s, background-color 0.3s',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#9595e1'; // Revert to original color
              }}>
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="/about" style={{
                textDecoration: 'none',
                fontSize: '1rem',
                color: '#9595e1',
                padding: '5px 10px',
                transition: 'color 0.3s, background-color 0.3s',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#9595e1'; // Revert to original color
              }}>
                <i className="fas fa-user"></i> About
              </a>
            </li>
            <li>
              <a href="/projects" style={{
                textDecoration: 'none',
                fontSize: '1rem',
                color: '#9595e1',
                padding: '5px 10px',
                transition: 'color 0.3s, background-color 0.3s',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#9595e1'; // Revert to original color
              }}>
                <i className="fas fa-code"></i> Projects
              </a>
            </li>
            <li>
              <a href="/contact" style={{
                textDecoration: 'none',
                fontSize: '1rem',
                color: '#9595e1',
                padding: '5px 10px',
                transition: 'color 0.3s, background-color 0.3s',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#b3b3ff'; // Lighter purple on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#9595e1'; // Revert to original color
              }}>
                <i className="fas fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;