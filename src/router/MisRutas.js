import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/inicio";

import { Servicios } from "../components/servicios";
import { Curriculum } from "../components/curriculum";
import { Contacto } from "../components/contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegaciones */}
      <HeaderNav />

      {/* Contenido Principal */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </section>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};
