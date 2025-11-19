import React from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css';
import proyecto1 from '../assets/tarea1.png';
import proyecto2 from '../assets/redsocial.png';
import proyecto3 from '../assets/cheatsheet.png';
import proyecto4 from '../assets/escape.png';
import proyecto5 from '../assets/tictac.png';

function ProyectosPage() {

  const projectsData = [
    {
      id: 1,
      title: "Tarea 1: Sitio de e-Commerce accesible",
      description: "Un sitio accesible para personas discapacitadas, se usaron herramientas de voz guia como Lighthouse, que demuestran el funcionamiento del sitio web.",
      image: proyecto1,
      websiteLink: "https://miranda073319.github.io/Tarea1-E-commerce/", 
      githubLink: "https://github.com/miranda073319/Tarea1-E-commerce"
    },
    {
      id: 2,
      title: "Tarea 2: Mi Red Social",
      description: "Un mockup de una red social, es un sitio web responsivo, pero no tiene ninguna funcionalidad de momento, fue hecho sin librerias ni frameworks CSS.",
      image: proyecto2,
      websiteLink: "https://miranda073319.github.io/Tarea2_Mi_Red_Social/#",
      githubLink: "https://github.com/miranda073319/Tarea2_Mi_Red_Social"
    },
    {
      id: 3,
      title: "Tarea 3: Cheat sheet",
      description: "Sitio web que contiene los elementos principales de HTML, indican su funcionalidad y ejemplos practicos",
      image: proyecto3,
      websiteLink: "https://miranda073319.github.io/Tarea3-Cheat-sheet/",
      githubLink: "https://github.com/miranda073319/Tarea3-Cheat-sheet"
    },
    {
      id: 4,
      title: "Ejercicio JavaScript: Escapa de ...",
      description: "Un juego sencillo de navegador usando estructuras basicas de Javascript, como objetos, variables, arreglos, manejo de eventos en el navegador, etc.",
      image: proyecto4,
      websiteLink: "https://miranda073319.github.io/Ejercicio-Escapa-del-labubu/", 
      githubLink: "https://github.com/miranda073319/Ejercicio-Escapa-del-labubu"
    },
    {
      id: 5,
      title: "Ejercicio: Tic-Tac-Toe",
      description: "Utilizando React, del tutorial para principiantes, se realizo un juego sencillo de Tic-tac-toe, agreagando nuestras propias configuraciones.",
      image: proyecto5,
      websiteLink: "https://miranda073319.github.io/tictactoe/",
      githubLink: "https://github.com/miranda073319/tictactoe"
    }
  ];

  return (
    <div className="proyectos-page-container">
      <div className="container">
        <div className="proyectos-header">
          <h1>Mis Proyectos Destacados</h1>
          <p className="proyectos-subtitle">
            Aqui estan todos mis proyectos realizados y enfocados en el Diseño Web.
          </p>
        </div>


        <div className="proyectos-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="proyecto-card-list">
    
              <div className="proyecto-image-wrapper">
                <img src={project.image} alt={project.title} className="proyecto-card-image" />
              </div>
              

              <div className="proyecto-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <a 
                  href={project.websiteLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-ver-web"
                >
                  Ver página web
                </a>

                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="proyecto-link-list"
                >
                  Ver en GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="back-to-home-container" style={{textAlign: 'center', marginTop: '60px'}}>
          <Link to="/" className="btn secondary-btn">← Volver al Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default ProyectosPage;