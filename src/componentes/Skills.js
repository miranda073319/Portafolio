import React from 'react';
import './css/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Habilidades</h2>
        
        <div className="skills-grid">
            
            <div className="skill-card card-blue">
                <h3>Frontend</h3>
                <ul>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Flutter</li>
                </ul>
                <span className="emoji">🎨</span>
            </div>

            <div className="skill-card card-pink">
                <h3>Diseño</h3>
                <ul>
                    <li>Figma</li>
                </ul>
                <span className="emoji">✨</span>
            </div>

            <div className="skill-card card-purple">
                <h3>Backend</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>C / C++</li>
                    <li>MySQL</li>
                </ul>
                <span className="emoji">🚀</span>
            </div>

             <div className="skill-card card-light">
                <h3>Herramientas</h3>
                <ul>
                    <li>Git & Github</li>
                    <li>VS Code</li>
                    <li>Vite</li>
                    <li>SceneBuilder</li>
                    <li>IntelliJ IDEA</li>
                </ul>
                <span className="emoji">🛠️</span>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;