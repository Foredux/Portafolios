import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>E</span>
        <h3>Eduardo Jesús Rodriguez Web</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/inicio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/portafolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/servicios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/curriculum"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
