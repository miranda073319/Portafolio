import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Hero from './componentes/Hero';
import About from './componentes/About';
import Skills from './componentes/Skills';
import HomeProjects from './componentes/HomeProjects'; 
import Contact from './componentes/Contact';
import ProyectosPage from './paginas/ProyectosPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router> 
      <ScrollToTop />
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