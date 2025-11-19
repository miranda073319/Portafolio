import React from 'react';
import './css/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card-wrapper">
            <h2>Contacto</h2>
            <p>¡Conectemos en mis redes o envíame un correo!</p>
            
            <div className="contact-links">
                <a href="https://github.com/miranda073319" target="_blank" rel="noopener noreferrer" className="social-btn github">
                    <span className="icon">🐱</span> GitHub
                </a>

                <a href="/" className="social-btn blog">
                    <span className="icon">💻</span> Portafolio
                </a>

                <a href="al073319@uacam.mx" className="social-btn email">
                    <span className="icon">📧</span> al073319@uacam.mx
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;