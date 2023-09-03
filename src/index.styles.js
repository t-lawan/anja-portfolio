import * as React from "react";
import { Global, css } from "@emotion/react";
import wave from './images/wave.png'
import background from './images/background.jpg'

const styles = css`
  @import url("https://fonts.googleapis.com/css?family=Averia+Libre&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Averia+Libre|Exo&display=swap");
  * {
    box-sizing: border-box;
  }
  html,
  body {
    width: 100vw;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: "Averia Libre", cursive !important;
    font-style: normal;
    color: white;
  }
  body {
    cursor: url(${wave}), pointer;
    background: "white";
    background-image: url(${background});
    background-repeat: round;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Exo", sans-serif !important;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: inherit;
  }
  a {
    ${"" /* text-decoration: underline; */}
    color: inherit;
  }
  h1 {
    margin-bottom: 1.45rem;
    font-size: 2.5rem;
    line-height: 1.1;
  }
  h2 {
    margin-bottom: 1.45rem;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    margin-bottom: 1.45rem;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    margin-bottom: 1.45rem;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    margin-bottom: 1.45rem;
    font-size: 0.78405rem;
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0.5rem;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    font-size: 1.15em;
  }
  li {
    list-style-type: lower-roman;
  }
`;


export const GlobalStyles = () => (
    <Global styles={styles} />
)