import "./index.css";
import React from "react";
import DesktopNav from "../desktop-nav";
import Foto from "../../images/foto.png";

export default function AsideHeader() {
  return (
    <header className="desktop-header">
      <div className="desktop-header__img-container">
        <img className="desktop-header__img-container" src={Foto} alt="" />
      </div>
      <h2 className="desktop-header__Name">Marcelo Puppio</h2>
      <h4 className="desktop-header__Area">Frontend Developer</h4>
      <DesktopNav />
    </header>
  );
}
