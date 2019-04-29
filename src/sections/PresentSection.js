import React from "react";

import { Iban, IconImg, Info, Pane, Sign } from "../styles/present-styles";
import travel from "../images/backpack_b.svg";

export class PresentSection extends React.Component {
    render() {
        return (
            <Pane>
                <Info>{"Vorremmo poter esaudire il desiderio di far un viaggio insieme tutta la famiglia, saremmo molto felici se vorreste contribuire ad esaudirlo."}</Info>
                <IconImg src={travel} />
                <Iban>{"IBAN IT24 G061 7046 32000000 1550 933"}</Iban>
                <Info>{"Grazie di cuore"}</Info>
                <Sign>{"Anna, Lucia, Elisa e Auri"}</Sign>
            </Pane>
        );
    }
}

export default PresentSection;
