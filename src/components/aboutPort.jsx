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
    <div className="aboutme-container container">
      <div className="aboutme-box row">
        <section className="dashboard-section col-12">
          <h3>Formación</h3>
          <ul className="list-unstyled">
            <li>
              <strong>Sistemas Microinformáticos y Redes</strong>
              <br />
              Me enfoco en diseñar, implementar y mantener sistemas informáticos
              y redes de computadoras a pequeña escala, asegurando la eficiencia
              y seguridad en la administración de hardware, software y servicios
              relacionados.
            </li>
            <li>
              <strong>Desarrollo de Aplicaciones Web</strong>
              <br />
              Me centro en el desarrollo y mantenimiento de aplicaciones web,
              incluyendo el diseño de interfaces, la programación del lado del
              servidor y del cliente, y la gestión de bases de datos.
            </li>
          </ul>
        </section>

        <section className="dashboard-section col-12">
          <h3>Habilidades</h3>
          <ul className="skills-list">
            <li>
              <img src={htmlIcon} alt="HTML y CSS" className="skill-icon" />
              HTML y CSS
            </li>
            <li>
              <img src={javaIcon} alt="Java" className="skill-icon" />
              Java
            </li>
            <li>
              <img src={kotlinIcon} alt="Kotlin" className="skill-icon" />
              Kotlin
            </li>
            <li>
              <img
                src={javascriptIcon}
                alt="JavaScript"
                className="skill-icon"
              />
              JavaScript
            </li>
            <li>
              <img src={reactIcon} alt="React JS" className="skill-icon" />
              React JS
            </li>
            <li>
              <img
                src={springBootIcon}
                alt="Spring Boot"
                className="skill-icon"
              />
              Spring Boot
            </li>
            <li>
              <img
                src={gitIcon}
                alt="Git y Control de Versiones"
                className="skill-icon"
              />
              Git y Control de Versiones
            </li>
          </ul>
        </section>

        <section className="dashboard-section col-12">
          <h3>Experiencia</h3>
          <div className="experience-list">
            <div className="experience-card">
              <h2>
                <strong>Técnico Informático</strong>
              </h2>
              <h5>Ayuntamiento de Casariche</h5>
              <h6>
                <strong>Marzo 2021 - Junio 2021</strong>
              </h6>
              <p>
                Instalación, actualización y reparación de hardware.
                Instalación, configuración y mantenimiento de servicios
                multiusuario, administración de servidores y cuentas para
                múltiples usuarios.
              </p>
            </div>
            <div className="experience-card">
              <h2>
                <strong>Desarrollador Web</strong>
              </h2>
              <h5>Eviden</h5>
              <h6>
                <strong>Marzo 2024 - Junio 2024</strong>
              </h6>
              <p>
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
