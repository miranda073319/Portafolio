import React from 'react';
import './css/About.css';
import hobby from '../assets/Interfaz.jpg';
import software from '../assets/software.jpg';
import team from '../assets/team.png';
import problem from '../assets/problems.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Acerca de mí</h2>
        <p className="about-description">
          Me encuentro estudiando el quinto semestre de la carrera de Ingeniería de Software. Actualmente estoy aprendiendo el entorno de desarrollo web.
          Me encanta el diseño y crear nuevos proyectos, sigo desarrollando mis habilidades y buscando mi especialidad.
          Aca hay un poco de lo que mas disfruto hacer. 
        </p>

        <div className="about-grid">
            <div className="about-card">
                <img src={hobby} alt="Hobby" />
                <h4>Diseñar Interfaces</h4>
            </div>

            <div className="about-card">
                <img src={software} alt="Aprendizaje" />
                <h4>Aprendizaje Continuo</h4>
            </div>

            <div className="about-card">
                <img src={team} alt="Trabajo en Equipo" />
                <h4>Trabajo en Equipo</h4>
            </div>

            <div className="about-card">
                <img src={problem} alt="Resolución" />
                <h4>Resolución de Problemas</h4>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;