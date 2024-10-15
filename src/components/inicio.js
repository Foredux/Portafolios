import React from "react";

export const Inicio = () => {
  return (
    <div className="home">
      <div className="home-content">
        <img
          src="/fotoperfil.jpg"
          alt="Foto de Eduardo Jesús"
          className="profile-image"
        />
        <div className="home-text">
          <h1>
            Hola, soy <strong>Eduardo Jesús</strong> y soy Desarrollador Web, y
            ofrezco mis servicios de
            <strong> programación y desarrollo </strong>en todo tipos de
            proyectos web
          </h1>
          <h2>
            Me especializo en desarrollar aplicaciones web que transforman ideas
            en realidades digitales efectivas.
          </h2>

          <div className="button-container">
            <a
              href="/CV_Eduardo_Rodriguez_Castellano.pdf"
              download
              target="_blank"
              className="btn btn-download"
            >
              Currículum
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-jes%C3%BAs-rodr%C3%ADguez-castellano-aa791820b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Foredux"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-github"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
