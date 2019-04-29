import React from "react";

import { Info, Link, Pane, WriteUs } from "../styles/foot-styles";

const gatsbyjs = "https://www.gatsbyjs.org/";
const netlify = "https://www.netlify.com/";
const elmozzo = "htpps://github.com/auridevil";
const manuel = "https://manuelserra.dev/";
const leo = "https://github.com/leopuleo";
const frappa = "https://github.com/francescochiapella";
const jappo = "https://github.com/jgosatti";

export class FootSection extends React.Component {
    render() {
        return (
            <Pane>
                <Info>
                    {"creato da "}{" "}
                    <Link href={elmozzo} target={"_blank"}>
                        {"aureliano"}
                    </Link>
                    {" - con l'aiuto di "}
                    <Link href={gatsbyjs} target={"_blank"}>
                        {"gatsbyjs"}{" "}
                    </Link>
                    {", "}
                    <Link href={netlify} target={"_blank"}>
                        {"netlify"}
                    </Link>
                    {", "}
                    <Link href={manuel} target={"_blank"}>
                        {"manuel"}
                    </Link>
                    {", "}
                    <Link href={leo} target={"_blank"}>
                        {"leo"}
                    </Link>
                    {", "}
                    <Link href={frappa} target={"_blank"}>
                        {"frappa"}
                    </Link>
                    {", "}
                    <Link href={jappo} target={"_blank"}>
                        {"jappo"}
                    </Link>
                    {" e la frenci"}
                </Info>
                <WriteUs href={"mailto:elisaeaureliano@gmail.com"}>{"elisaeaureliano@gmail.com"}</WriteUs>
            </Pane>
        );
    }
}

export default FootSection;
