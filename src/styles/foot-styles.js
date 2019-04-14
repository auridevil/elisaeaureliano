import styled from "styled-components";

import { white } from "../data/colors.yaml";

import { fourthColor } from "../data/colors.yaml";

export const Pane = styled.section`
    box-sizing: border-box;
    min-height: 50vh;
    position: relative;
    width: 100%;
    padding: 2rem 1.5em;
    text-align: center;
    background-color: ${fourthColor};
    flex: 1;
    display: block;
    align-items: center;
    position: relative;
`;

export const WriteUs = styled.a`
    border-bottom-color: ${white};
    color: ${white};
    border-bottom: 1px solid ${white};
    transition: color 0.1s linear;
    font-family: "Brandon Grotesque";
    font-size: 1rem;
`;

export const Info = styled.p`
    font-family: "Brandon Grotesque";
    font-size: 1.2em;
`;
