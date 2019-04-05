import React from "react";

import Section from "../components/section";
import { thirdColor } from "../data/colors.yaml";

export class DinnerSection extends React.Component {
    render() {
        return (
            <Section backgroundColor={thirdColor} index={0}>
                <div>{"Rinfresco"}</div>
                <div>{"A Palazzo Drago"}</div>
                <div>{"Via Marconi Bla, Verzuolo (CN)"}</div>
                <div>{"Mappa Qui"}</div>
            </Section>
        );
    }
}

export default DinnerSection;
