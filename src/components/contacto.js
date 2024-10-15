import React from "react";

export const Contacto = () => {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>

      <form
        className="contact-form"
        action="https://getform.io/f/bolgvppa"
        method="POST"
      >
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

        <button type="submit" className="cta">
          <span>Enviar</span>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 66 43"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="arrow"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                className="one"
                d="M40.154393,3.20897343 C40.154393,3.20897343 44.4561631,-0.988982101 46.7178461,1.12300894 C48.9795292,3.23500001 45.6150864,6.10640747 45.6150864,6.10640747"
              ></path>
              <path
                className="two"
                d="M48.6084747,9.77634593 C48.6084747,9.77634593 57.3430457,14.2890166 55.9644182,17.7993766 C54.5857907,21.3097366 49.2120513,18.7969126 49.2120513,18.7969126"
              ></path>
              <path
                className="three"
                d="M33.5922066,29.5488663 C33.5922066,29.5488663 37.2823973,32.3445693 35.7850174,35.8772987 C34.2876374,39.4100281 29.1822354,36.5727991 29.1822354,36.5727991"
              ></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
};
