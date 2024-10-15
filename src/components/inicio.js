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
            Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
            relevancia en internet.
          </h2>
          <a
            href="/CV_Eduardo_Rodriguez_Castellano.pdf"
            download
            target="_blank"
            className="download-btn"
          >
            Descargar Currículum
          </a>
        </div>
      </div>
    </div>
  );
};
