import React from 'react';

function Contact() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #202034, #000000)',
      color: '#fff',
      padding: '40px 20px',
      minHeight: '100vh',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #9595e1, #67679f)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '700',
      }}>Get in Touch</h1>

      <p style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
        color: '#9595e1',
        marginBottom: '40px',
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: '0 auto',
        opacity: '0.9',
      }}>
        Whether you have a question, a project idea, or just want to connect, feel free to reach out!
      </p>

      <form style={{
        maxWidth: '600px',
        margin: '0 auto 40px',
        background: 'rgba(149, 149, 225, 0.1)',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(149, 149, 225, 0.1)',
      }}>
        <div style={{
          marginBottom: '20px',
          textAlign: 'left',
        }}>
          <label htmlFor="name" style={{
            display: 'block',
            marginBottom: '8px',
            color: '#9595e1',
            fontWeight: '600',
          }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            style={{
              width: '100%',
              padding: '10px',
              background: '#202034',
              border: '1px solid #9595e1',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
        </div>

        <div style={{
          marginBottom: '20px',
          textAlign: 'left',
        }}>
          <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '8px',
            color: '#9595e1',
            fontWeight: '600',
          }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              width: '100%',
              padding: '10px',
              background: '#202034',
              border: '1px solid #9595e1',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
        </div>

        <div style={{
          marginBottom: '20px',
          textAlign: 'left',
        }}>
          <label htmlFor="message" style={{
            display: 'block',
            marginBottom: '8px',
            color: '#9595e1',
            fontWeight: '600',
          }}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={{
              width: '100%',
              padding: '10px',
              background: '#202034',
              border: '1px solid #9595e1',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s',
            }}
          />
        </div>

        <button type="submit" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #9595e1, #67679f)',
          color: '#202034',
          padding: '16px 32px',
          borderRadius: '30px',
          border: 'none',
          fontWeight: '600',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(149, 149, 225, 0.3)',
        }}>Send Message</button>
      </form>
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

export default Contact;
