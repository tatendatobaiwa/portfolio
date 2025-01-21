import React from 'react';

function Home() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #202034, #000000)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
    }}>
      <section style={{
        textAlign: 'center',
        maxWidth: '900px',
        animation: 'fadeIn 1.2s ease-out',
      }}>
        <div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #9595e1, #67679f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
            lineHeight: '1.2',
          }}>
            Welcome to MyPortfolio
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#9595e1',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 40px',
            opacity: '0.9',
          }}>
            Crafting premium experiences through clean design and modern solutions.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <a
              href="/projects"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #9595e1, #67679f)',
                color: '#202034',
                padding: '16px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(149, 149, 225, 0.3)',
                border: '2px solid transparent',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(149, 149, 225, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(149, 149, 225, 0.3)';
              }}
            >
              View My Work
            </a>

            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#9595e1',
                padding: '14px 30px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                border: '2px solid #9595e1',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(149, 149, 225, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;