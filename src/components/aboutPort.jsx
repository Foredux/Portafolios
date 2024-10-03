import React from "react";
import "../assets/styles/about.css";
import htmlIcon from "../assets/images/html.png";
import javaIcon from "../assets/images/java.png";
import kotlinIcon from "../assets/images/kotlin.png";
import javascriptIcon from "../assets/images/javascript.png";
import reactIcon from "../assets/images/react.png";
import springBootIcon from "../assets/images/spring-boot.png";
import gitIcon from "../assets/images/git.png";

export const AboutPort = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-box">
        <section className="dashboard-section">
          <h2 className="section-title">Formación</h2>
          <div className="education-cards">
            <div className="education-card">
              <h3>Sistemas Microinformáticos y Redes</h3>
              <p>
                Me enfoco en diseñar, implementar y mantener sistemas
                informáticos y redes de computadoras a pequeña escala,
                asegurando la eficiencia y seguridad en la administración de
                hardware, software y servicios relacionados.
              </p>
            </div>
            <div className="education-card">
              <h3>Desarrollo de Aplicaciones Web</h3>
              <p>
                Me centro en el desarrollo y mantenimiento de aplicaciones web,
                incluyendo el diseño de interfaces, la programación del lado del
                servidor y del cliente, y la gestión de bases de datos.
              </p>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title">Habilidades</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <img src={htmlIcon} alt="HTML y CSS" className="skill-icon" />
              <span>HTML y CSS</span>
            </li>
            <li className="skill-item">
              <img src={javaIcon} alt="Java" className="skill-icon" />
              <span>Java</span>
            </li>
            <li className="skill-item">
              <img src={kotlinIcon} alt="Kotlin" className="skill-icon" />
              <span>Kotlin</span>
            </li>
            <li className="skill-item">
              <img
                src={javascriptIcon}
                alt="JavaScript"
                className="skill-icon"
              />
              <span>JavaScript</span>
            </li>
            <li className="skill-item">
              <img src={reactIcon} alt="React JS" className="skill-icon" />
              <span>React JS</span>
            </li>
            <li className="skill-item">
              <img
                src={springBootIcon}
                alt="Spring Boot"
                className="skill-icon"
              />
              <span>Spring Boot</span>
            </li>
            <li className="skill-item">
              <img
                src={gitIcon}
                alt="Git y Control de Versiones"
                className="skill-icon"
              />
              <span>Git y Control de Versiones</span>
            </li>
          </ul>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title">Experiencia</h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Técnico Informático</h3>
                <span className="company">Ayuntamiento de Casariche</span>
              </div>
              <p className="experience-period">Marzo 2021 - Junio 2021</p>
              <p className="experience-description">
                Instalación, actualización y reparación de hardware.
                Instalación, configuración y mantenimiento de servicios
                multiusuario, administración de servidores y cuentas para
                múltiples usuarios.
              </p>
            </div>
            <div className="experience-card">
              <div className="experience-header">
                <h3>Desarrollador Web</h3>
                <span className="company">Eviden</span>
              </div>
              <p className="experience-period">Marzo 2024 - Junio 2024</p>
              <p className="experience-description">
                Proyectos con Angular, API REST y Spring Boot. Desarrollé
                aplicaciones web con Angular, implementé API REST para
                comunicación eficiente, y desplegué microservicios con Spring
                Boot.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPort;
