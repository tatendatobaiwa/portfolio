import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        Whether you have a question, a project idea, or just want to connect, feel free to reach out!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/tatendatobaiwa" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
}

export default Contact;
