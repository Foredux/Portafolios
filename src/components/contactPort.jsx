import React from "react";
import "../assets/styles/contact.css";

const ContactPort = () => {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>
        Puedes ponerte en contacto conmigo a través de los siguientes enlaces:
      </p>
      <div className="contact-grid">
        <a href="mailto:edustp18@gmail.com" className="contact-button">
          <span className="contact-icon">📧</span>
          Correo Electrónico
        </a>
        <a
          href="https://www.linkedin.com/in/eduardo-jes%C3%BAs-rodr%C3%ADguez-castellano-aa791820b/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <span className="contact-icon">🔗</span>
          LinkedIn
        </a>
        <a
          href="https://github.com/Foredux"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <span className="contact-icon">🐙</span>
          GitHub
        </a>
        <a
          href="/assets/images/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <span className="contact-icon">📄</span>
          Currículum
        </a>
      </div>
    </div>
  );
};

export default ContactPort;
