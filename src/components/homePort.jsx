import React from "react";
import fotoperfil from "../assets/images/fotoperfil.jpg";
import "../assets/styles/home.css";

export const HomePort = () => {
  return (
    <div className="App-header">
      <section className="hero-section py-5">
        <div className="container">
          <div className="profile-container">
            <img src={fotoperfil} alt="Mi Foto" className="profile-picture" />
            <div className="profile-text">
              <h2>Eduardo Jesús Rodríguez Castellano</h2>
              <p>
                Soy un desarrollador FullStack apasionado por crear aplicaciones
                web. Me enfoco en aprender y aplicar nuevas técnicas para
                ofrecer soluciones efectivas. ¡Bienvenido a mi portafolio!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePort;
