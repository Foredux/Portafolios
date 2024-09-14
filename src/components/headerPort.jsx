import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/header.css";

const HeaderPort = ({ setCurrentView }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <button
              onClick={() => setCurrentView("homePort")}
              className="nav-link custom-nav-link"
              aria-label="Inicio"
            >
              Inicio
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setCurrentView("aboutPort")}
              className="nav-link custom-nav-link"
              aria-label="Acerca de"
            >
              Acerca de mi
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setCurrentView("contactPort")}
              className="nav-link custom-nav-link"
              aria-label="Contacto"
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderPort;
