import styled from "styled-components";
import { fifthColor } from "../data/colors.yaml";

import { Form } from "react-bootstrap";

export const Pane = styled.section`
    box-sizing: border-box;
    min-height: 50vh;
    position: relative;
    width: 100%;
    padding: 2rem 1.5em;
    text-align: center;
    background-color: ${fifthColor};
    flex: 1;
    display: block;
    align-items: center;
    position: relative;
    min-height: 100vh;
`;

export const Block = styled.div`
    padding-top: 50px;
    width: 40%;
    font-family: "Brandon Grotesque";
    position: relative;
    margin-left: auto;
    margin-right: auto;
`;

export const InfoTitle = styled.h2`
    font-family: "Brandon Grotesque";
    font-size: 4vw;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    line-height: 1.2;
    color: #fff;
    font-weight: 500;
`;

export const Underline = styled.span`
    display: block;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #fff;
    margin-left: auto;
    margin-right: auto;
`;

export const LineInput = styled(Form.Control)`
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    font-family: "Brandon Grotesque";
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export const LineLabel =
    //styled(Form.Label)`
    styled.label`
        font-family: "Brandon Grotesque";
    `;

export const IconImg = styled.img`
    width: 60px;
    margin: 0;
    max-width: 100%;
    margin-bottom: 40px;
`;
