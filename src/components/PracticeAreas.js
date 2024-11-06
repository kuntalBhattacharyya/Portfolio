// src/components/PracticeAreas.js
import React from 'react';
//import './PracticeAreas.css';
import '../styles/PracticeAreas.css';

function PracticeAreas() {
  return (
    <section id="practice-areas" className="practice-areas">
      <h2>Practice Areas</h2>
      <div className="practice-item">
        <h3>Family Law</h3>
        <p>Providing compassionate and thorough legal representation for families.</p>
      </div>
      <div className="practice-item">
        <h3>Criminal Defense</h3>
        <p>Defending clients with professionalism and dedication to justice.</p>
      </div>
      <div className="practice-item">
        <h3>Corporate Law</h3>
        <p>Offering strategic legal solutions for businesses.</p>
      </div>
    </section>
  );
}

export default PracticeAreas;
