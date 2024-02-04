import * as React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import wave from "./images/wave.png";
import background from "./images/background.jpg";
import { Link } from "gatsby";

export const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  :hover {
    font-style: italic;
    animation: long-shadow 1.5s ease-in-out;
  }
`;

export const InternalLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  :hover {
    /* font-style: italic; */
    color: #FFFFED;
    animation: rainbow 2s linear infinite, shadow 2s ease-in-out infinite alternate;
    /* -moz-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(20deg, 0deg);
    -webkit-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(20deg, 0deg);
    -o-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(20deg, 0deg);
    -ms-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(20deg, 0deg);
    transform: scale(1) rotate(0deg) translate(0px, 0px) skew(20deg, 0deg); */
  }
`;

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1500px",
};

export const DropdownText = styled.p`
  color: white;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: #FFFFED;
    animation: rainbow 2s linear infinite, shadow 2s ease-in-out infinite alternate;

  }
`;

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
    text-transform: lowercase;
    animation: rainbow 200s linear infinite;
  }
  body {
    cursor: url(${wave}), pointer;
    background: "white";
    background-image: url(${background});
    background-repeat: round;
    background-color: black;
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
    text-decoration: underline;
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
  p,
  a {
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

  .is_active {
    animation: shadow 1s linear infinite alternate;
  }

  @keyframes rainbow {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes shadow {
    0% {
      filter: drop-shadow(-5px 0px 4px #fff);
    }
    100% {
      filter: drop-shadow(5px 0px 4px #FFFFED);
    }
  }

  @keyframes long-shadow {
    0% {
      filter: drop-shadow(-5px 0px 4px #fff);
    }
    100% {
      filter: drop-shadow(20px 0px 4px #FFFFED);
    }
  }
`;

export const GlobalStyles = (props) => <Global styles={styles} />;
