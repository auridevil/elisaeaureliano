import styled from "styled-components";

import { white } from "../data/colors.yaml";

export const HeadTitle = styled.h1`
    font-family: "Surveyor Fine";
    font-weight: 500;
    text-transform: lowercase;
    font-size: 6rem;
    letter-spacing: 0;
    color: ${white};
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0.75em;
    margin-left: 0px;
`;
export const HeadSubtitle = styled.div`
    font-family: "Brandon Grotesque";
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.2em;
    color: ${white};
    line-height: 1.2;
    margin-left: auto;
    margin-right: auto;
`;
export const ScrollDown = styled.div`
    font-weight: 500;
    letter-spacing: 0.2em;
    font-family: "Brandon Grotesque";
    text-transform: uppercase;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    text-align: center;
    color: #fff;
    display: block;
    margin-top: 38%;
`;
