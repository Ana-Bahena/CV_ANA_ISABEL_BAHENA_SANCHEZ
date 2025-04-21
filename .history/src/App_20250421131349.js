import React, { useState } from 'react';
import './App.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaUserAlt, FaBriefcase, FaGraduationCap, FaCogs, FaLightbulb, FaCertificate } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="profile-container">
          <div className="profile-image">
            
            <img src="/profile-placeholder.jpg" alt="Ana Isabel Bahena Sánchez" />
          </div>
          <div className="profile-info">
            <h1>Ana Isabel Bahena Sánchez</h1>
            <h2>Desarrolladora de Software</h2>
            <div className="contact-info">
              <a href="mailto:anabahena12345@gmail.com" className="contact-item">
                <FaEnvelope className="icon" />
                <span>anabahena12345@gmail.com</span>
              </a>
              <a href="tel:+524422873651" className="contact-item">
                <FaPhone className="icon" />
                <span>+52 442-287-36-51</span>
              </a>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>Av. Monte Sacro 220, Lomas de San Pedrito, CP: 76148, Santiago de Queretaro, Qro.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <ul>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <button onClick={() => handleNavClick('about')}>
              <FaUserAlt className="nav-icon" />
              <span>Acerca de mí</span>
            </button>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <button onClick={() => handleNavClick('experience')}>
              <FaBriefcase className="nav-icon" />
              <span>Experiencia</span>
            </button>
          </li>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <button onClick={() => handleNavClick('education')}>
              <FaGraduationCap className="nav-icon" />
              <span>Educación</span>
            </button>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <button onClick={() => handleNavClick('skills')}>
              <FaCogs className="nav-icon" />
              <span>Habilidades</span>
            </button>
          </li>
          <li className={activeSection === 'interests' ? 'active' : ''}>
            <button onClick={() => handleNavClick('interests')}>
              <FaLightbulb className="nav-icon" />
              <span>Intereses</span>
            </button>
          </li>
        </ul>
      </nav>

      <main>
        <section id="about" className="section">
          <h2>Acerca de mí</h2>
          <div className="content">
            <p>
              Desarrollador de software con experiencia en la creación de aplicaciones web y móviles, 
              utilizando tecnologías modernas como JavaScript, PHP y React Native; conocimientos en el 
              diseño y administración de bases de datos (MySQL), conexión entre API JS.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experiencia Laboral</h2>
          <div className="content">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2023-2024</div>
              <div className="timeline-content">
                <h3>Ejecutivo en ventas</h3>
                <h4>Banco Santander, Institución de Banca Múltiple S.A.</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Educación</h2>
          <div className="content">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2022 – Actualmente</div>
              <div className="timeline-content">
                <h3>Técnico Superior Universitario en Desarrollo de Software Multiplataforma</h3>
                <h4>Universidad Tecnológica de Querétaro</h4>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2019-2022</div>
              <div className="timeline-content">
                <h3>Técnico en Programación</h3>
                <h4>Colegio de Estudios Científicos y Tecnológicos del Estado de Guanajuato, Plantel Coroneo</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Habilidades</h2>
          <div className="content">
            <div className="skills-group">
              <h3>Habilidades Técnicas</h3>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">API</span>
              </div>
            </div>
            <div className="skills-group">
              <h3>Habilidades Personales</h3>
              <div className="skill-tags">
                <span className="skill-tag">Atención al cliente</span>
                <span className="skill-tag">Liderazgo</span>
                <span className="skill-tag">Comunicación asertiva</span>
                <span className="skill-tag">Resolución de problemas</span>
                <span className="skill-tag">Trabajo en equipo</span>
                <span className="skill-tag">Adaptabilidad y aprendizaje continuo</span>
              </div>
            </div>
            <div className="skills-group">
              <h3>Certificaciones</h3>
              <div className="certification-item">
                <FaCertificate className="cert-icon" />
                <div>
                  <h4>Become a Rapid Developer</h4>
                  <p>Mendix Academy | Enero 2025 - Marzo 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="interests" className="section">
          <h2>Interés Laboral</h2>
          <div className="content">
            <p>
              Interés en ampliar conocimientos en desarrollo web y móvil, explorando nuevos lenguajes,
              paradigmas de programación, incluyendo SQL y NoSQL; buscando oportunidades para
              aplicar fortaleciendo habilidades en arquitecturas modernas.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Ana Isabel Bahena Sánchez</p>
      </footer>
    </div>
  );
}

export default App;