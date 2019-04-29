import React from "react";

import { Info, Link, Pane, WriteUs } from "../styles/foot-styles";

const gatsbyjs = "https://www.gatsbyjs.org/";
const netlify = "https://www.netlify.com/";
const elmozzo = "htpps://github.com/auridevil";

export class FootSection extends React.Component {
    render() {
        return (
            <Pane>
                <Info>
                    {"Creato da "} <Link href={elmozzo}>{"aureliano"}</Link>
                    {" - powered by "}
                    <Link href={gatsbyjs}>{"gatsbyjs"}</Link>
                    {" and "}
                    <Link href={netlify}>{"netlify"}</Link>
                </Info>
                <WriteUs href={"mailto:elisaeaureliano@gmail.com"}>{"elisaeaureliano@gmail.com"}</WriteUs>
            </Pane>
        );
    }
}

export default FootSection;
