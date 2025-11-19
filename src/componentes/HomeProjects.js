import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import tarea1 from '../assets/tarea1.png';
import tarea2 from '../assets/redsocial.png';
import tarea3 from '../assets/cheatsheet.png';

function HomeProjects() {
  return (
    <section id="projects" className="home-projects-section">
      <div className="container">
        <h2>Proyectos Destacados</h2>
        <p className="subtitle">Un vistazo rápido a lo que he construido</p>

        <div className="preview-grid">
   
            <div className="preview-card">
                <img src={tarea1} alt="Proyecto 1" />
                <div className="preview-info">
                    <h3>Proyecto 1: Sitio de e-Commerce accesible</h3>
                    <Link to="/proyectos" className="btn-small">Ver Detalles</Link>
                </div>
            </div>

            <div className="preview-card">
                <img src={tarea2} alt="Proyecto 2" />
                <div className="preview-info">
                    <h3>Proyecto 2: Mi Red Social</h3>
                    <Link to="/proyectos" className="btn-small">Ver Detalles</Link>
                </div>
            </div>

            <div className="preview-card centered-card">
            <img src={tarea3} alt="Proyecto 3" />
                <div className="preview-info">
                    <h3>Proyecto 3: Cheat sheet</h3>
                    <Link to="/proyectos" className="btn-small">Ver Detalles</Link>
                </div>
            </div>
        </div>

        <div className="home-projects-actions">
            <Link to="/proyectos" className="btn primary-btn">Ver Todos los Proyectos</Link>
            
        </div>

      </div>
    </section>
  );
}

export default HomeProjects;