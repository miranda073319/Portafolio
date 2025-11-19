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
          <li><Link to="/#skills">Habilidades</Link></li>
          <li><Link to="/#contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;