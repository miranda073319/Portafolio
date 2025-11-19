import React from 'react';
import { Link } from 'react-router-dom'; 
import './css/Footer.css';

function Footer() {
  return (
    <footer className="pastel-footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <a 
            href="https://github.com/miranda073319" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:al073319@uacam.mx">
            Gmail
          </a>

          <Link to="/">
            Portafolio
          </Link>
        </div>

        <p className="footer-copyright">
          2025 Creado por Miranda
        </p>
      </div>
    </footer>
  );
}

export default Footer;