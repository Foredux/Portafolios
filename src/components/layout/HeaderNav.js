import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <span>E</span>
        <h3>Eduardo Jesús Rodriguez Web</h3>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={menuOpen ? "show" : ""}>
        <ul>
          <li>
            <NavLink
              exact="true"
              to="/inicio"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/servicios"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/curriculum"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Sobre Mi
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
