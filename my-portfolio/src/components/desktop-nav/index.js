import "./index.css";
import Items from "./items";
import React from "react";

export default function DesktopNav() {
  return (
    <nav className="desktop-nav">
      <Items icon="fa-home" title="Home" />
      <Items icon="fa-user-alt" title="Sobre mi" />
      <Items icon="fa-layer-group" title="Mis trabajos" />
      <Items icon="fa-comments" title="Contacto" />
    </nav>
  );
}

// <li class="header__list-item"><a href="#home"><i class="fas fa-home"></i>Home</a></li>
// <li class="header__list-item"><a href="#about"><i class="fas fa-user-alt"></i>Sobre mi</a></li>
// <li class="header__list-item"><a href="#services"><i class="fas fa-briefcase"></i>Servicios</a></li>
// <li class="header__list-item"><a href="#"><i class="fas fa-graduation-cap"></i>Experiencia</a></li>
// <li class="header__list-item"><a href="#"><i class="fas fa-layer-group"></i>Mis trabajos</a></li>
// <li class="header__list-item"><a href="#"><i class="fas fa-comments"></i>Contactame</a></li>
