import styled, { createGlobalStyle, css } from "styled-components";

import { gold, white } from "../data/colors.yaml";
import { BranGro, SurvFine, SurvDisplay } from "./font-face.js";

/* Globals */

const spacing = {
    quarter: "10px",
    half: "20px",
    single: "40px",
    double: "80px"
};

export const small = (...args) => css`
    @media screen and (max-width: 600px) {
        ${css(...args)}
    }
`;
export const medium = (...args) => css`
    @media screen and (min-width: 601px) and (max-width: 1200px) {
        ${css(...args)}
    }
`;
export const large = (...args) => css`
    @media screen and (min-width: 1201px) {
        ${css(...args)}
    }
`;

export const GlobalStyle = createGlobalStyle`
  
  ${BranGro}
  ${SurvFine}
  ${SurvDisplay}

  body{
    font-variant-ligatures: no-common-ligatures;
    padding: 0;
    margin: 0;
    color: ${white};
    font-family: 'Surveyor Fine';
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0 0 ${spacing.single} 0;
    line-height: 1.3;
  }

  p{
    margin: 0;
    line-height: 1.6;
  }

`;

export const GoldenButton = styled.a`
    color: ${gold};
    border: 2px solid #b18f3a;
    border-radius: 0;
    display: inline-block;
    font-family: "Brandon Grotesque";
    margin: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3em 0.7em !important;
    font-weight: 900;
    transition: color 0.1s linear;
    &:hover {
        color: ${white};
        cursor: grab;
        border-color: ${gold};
        background-color: ${gold};
        text-decoration: none;
    }
    &:not([href]) {
        &:not([tabindex]) {
            color: #b18f3a;
        }
    }
`;

export const WhiteButton = styled.a`
    color: ${white};
    border: 2px solid ${white};
    border-radius: 0;
    display: inline-block;
    font-family: "Brandon Grotesque";
    margin: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3em 0.7em !important;
    font-weight: 900;
    transition: color 0.1s linear;
    &:hover {
        color: ${white};
        cursor: grab;
        border-color: ${gold};
        background-color: ${gold};
        text-decoration: none;
    }
    &:not([href]) {
        &:not([tabindex]) {
            color: ${white};
        }
    }
`;
