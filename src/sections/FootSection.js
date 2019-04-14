import React from "react";

import { Info, Pane, WriteUs } from "../styles/foot-styles";

export class FootSection extends React.Component {
    render() {
        return (
            <Pane>
                <Info>{"designed by Aureliano - powered by gatsbyjs"}</Info>
                <WriteUs href={"mailto:elisaeaureliano@gmail.com"}>{"elisaeaureliano@gmail.com"}</WriteUs>
            </Pane>
        );
    }
}

export default FootSection;
