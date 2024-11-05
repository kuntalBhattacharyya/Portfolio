// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/advocate.jpg" alt="Advocate" className="advocate-image" />
        <h2 className="advocate-name">Souravi Banerjee, District Court Hooghly</h2>
        <p className="advocate-name">Hoogly District Bar Association</p>
        <p>Professional Legal Services You Can Trust</p>
        <p>Specializing in Family Law, Criminal Defense, and Corporate Law</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;
