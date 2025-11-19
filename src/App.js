import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Hero from './componentes/Hero';
import About from './componentes/About';
import Skills from './componentes/Skills';
import HomeProjects from './componentes/HomeProjects.js'; 
import Contact from './componentes/Contact';
import ProyectosPage from './paginas/ProyectosPage';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes>
  
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <HomeProjects /> 
              <Contact />
            </>
          } />

          <Route path="/proyectos" element={<ProyectosPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;