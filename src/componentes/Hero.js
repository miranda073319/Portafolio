import React from 'react';
//import { Link } from 'react-router-dom';
import './css/Hero.css';
import laptopGif from '../assets/laptop.gif';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="greeting"></p>
          <h1>Bienvenido a mi Portafolio</h1>
          <p className="description">
            Mi nombre es Miranda Amaro Hernández
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">Contacto</a>
            <a href="#projects" className="btn secondary-btn">Ver mis Proyectos</a> 
          </div>
        </div>
        <div className="hero-image">
           <img src={laptopGif} alt="Developer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;