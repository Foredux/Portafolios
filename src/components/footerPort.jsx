import React from "react";
import "../assets/styles/footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const FooterPort = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          &copy; 2024 Eduardo Jesús Rodríguez Castellano. Todos los derechos
          reservados.
        </p>
        <p>Desarrollador FullStack apasionado por crear aplicaciones web.</p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/eduardo-jes%C3%BAs-rodr%C3%ADguez-castellano-aa791820b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icon" />
          </a>
          <a
            href="https://github.com/Foredux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href="https://x.com/Foredux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPort;
