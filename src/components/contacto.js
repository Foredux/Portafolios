import React from "react";

export const Contacto = () => {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>

      <form className="contact-form" action="mailto:edustp18@gmail.com">
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          placeholder="Nombre"
        />

        <input
          type="text"
          id="apellidos"
          name="apellidos"
          required
          placeholder="Apellidos"
        />

        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Correo electrónico"
        />

        <textarea
          id="mensaje"
          name="mensaje"
          required
          placeholder="Motivo de Contacto"
        ></textarea>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
