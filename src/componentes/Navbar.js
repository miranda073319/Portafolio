import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">Inicio</Link> 
        
        <ul className="navbar-links">
          <li><Link to="/proyectos">Mis Trabajos</Link></li> 
          <li><a href="/skills">Habilidades</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;