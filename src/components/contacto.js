import React from "react";

export const Contacto = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contacto</h1>

      <form action="https://getform.io/f/bolgvppa" method="POST">
        <div className="inputBox">
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="inputField"
            placeholder=" "
          />
          <label className="inputLabel" htmlFor="nombre">
            Nombre
          </label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            required
            className="inputField"
            placeholder=" "
          />
          <label className="inputLabel" htmlFor="apellidos">
            Apellidos
          </label>
        </div>

        <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="inputField"
            placeholder=" "
          />
          <label className="inputLabel" htmlFor="email">
            Correo Electrónico
          </label>
        </div>

        <div className="inputBox">
          <textarea
            id="mensaje"
            name="mensaje"
            required
            className="textAreaField"
            placeholder=" "
          ></textarea>
          <label className="inputLabel" htmlFor="mensaje">
            Motivo de Contacto
          </label>
        </div>

        <button type="submit" className="submitButton">
          Enviar
        </button>
      </form>
    </div>
  );
};
