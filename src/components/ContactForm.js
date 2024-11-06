// src/components/ContactForm.js
import React from 'react';
import '../styles/ContactForm.css'

function ContactForm() {
  return (
    <section id="contact" className="contact-form">
      <h2>Contact Me</h2>
      <p>If you have any questions, feel free to reach out to me directly.</p>
      <div className="contact-info">
        <p><strong>Phone:</strong> +91-6290402870</p>
        <p><strong>Email:</strong> souravibanerjee863@gmail.com</p>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
