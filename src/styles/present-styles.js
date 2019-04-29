import styled from "styled-components";

import { fourthColor } from "../data/colors.yaml";

export const Pane = styled.section`
    box-sizing: border-box;
    min-height: 80vh;
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

export const Info = styled.p`
    font-family: "Brandon Grotesque";
    font-size: 1.4em;
    padding-top: 5vh;
`;

export const Iban = styled.p`
    font-family: "Brandon Grotesque";
    font-size: 1.5em;
    padding-top: 10vh;
`;

export const IconImg = styled.img`
    width: 60px;
    margin: 0;
    max-width: 100%;
    margin-top: 40px;
`;

export const Sign = styled.p`
    font-family: "Brandon Grotesque";
    font-size: 1.4em;
    padding-top: 2vh;
`;
