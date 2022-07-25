import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Movies from "./movies";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Movies />
  </StrictMode>,
  rootElement
);
