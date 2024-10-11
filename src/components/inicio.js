import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong>Eduardo Jesús</strong> y soy Desarrollador Web en
        Sevilla, y ofrezco mis servicios de{" "}
        <strong>programación y desarrollo </strong>en todo tipos de proyectos
        web
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
        revelancia en internet. <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className="last-work">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className="works"></div>
      </section>
    </div>
  );
};
