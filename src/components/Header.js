// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/advocatelogo.jpg" alt="Advocate Logo" className="advocate-logo" />
        <h1 className="logo-text">Justice is truth in action</h1>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#practice-areas">Practice Areas</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
