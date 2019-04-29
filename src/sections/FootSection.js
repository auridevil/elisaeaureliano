import React from "react";

import { Info, Pane, WriteUs } from "../styles/foot-styles";

const gatsbyjs = "https://www.gatsbyjs.org/";

export class FootSection extends React.Component {
    render() {
        return (
            <Pane>
                <Info>
                    {"Creato da Aureliano - powered by "}
                    <a href={gatsbyjs}>{"gatsbyjs"}</a>
                </Info>
                <WriteUs href={"mailto:elisaeaureliano@gmail.com"}>{"elisaeaureliano@gmail.com"}</WriteUs>
            </Pane>
        );
    }
}

export default FootSection;
