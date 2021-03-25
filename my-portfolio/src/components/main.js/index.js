import "./index.css";
import React, { Fragment } from "react";
// import Foto from "../../images/foto.png";
import Social from "./social-media";

export default function Main() {
  return (
    <Fragment>
      <main className="main">
        <section className="section section-home">
          {/* <div className="home__img-container">
            <img className="home__img" src={Foto} alt="" />
          </div> */}
          <h1 className="section-home__title">Marcelo Puppio</h1>
          <h5 className="section-home__subtitle">Frontend developer</h5>
          <div className="section-home__icon-container">
            <Social icon="fa-linkedin-in" grid="a" />
            <Social icon="fa-github" grid="f" />
            <Social icon="fa-whatsapp" grid="k" />
            <Social icon="fa-instagram" grid="p" />
          </div>
          {/* <button className="section-home__btn">Contactame</button> */}
        </section>
        <section className="section section-about" id="about"></section>
        <section className="section section-works"></section>
        <div></div>
      </main>
    </Fragment>
  );
}
