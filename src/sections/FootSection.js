import React from "react";

import Section from "../components/section";
import { fourthColor } from "../data/colors.yaml";

export class FootSection extends React.Component {
    render() {
        return (
            <Section backgroundColor={fourthColor} index={0}>
                <div>{"Dev by Aureliano Bergese based on Gatsby.js"}</div>
            </Section>
        );
    }
}

export default FootSection;
