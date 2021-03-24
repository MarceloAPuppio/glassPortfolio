import React, { Fragment } from "react";
import "../components/aside-header";
import AsideHeader from "../components/aside-header";
import Main from "../components/main.js";
import "./index.css";

export default function PagePpal() {
  return (
    <Fragment>
      <AsideHeader />
      <Main></Main>
    </Fragment>
  );
}
