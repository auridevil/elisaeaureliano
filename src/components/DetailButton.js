import React from "react";
import PropTypes from "prop-types";
import { GoldenButton, WhiteButton } from "../styles/main-styles";

export class DetailButton extends React.Component {
    static propTypes = {
        link: PropTypes.string
    };

    render() {
        const { children, link, color } = this.props;
        if (color === "white") {
            return (
                <WhiteButton href={link ? link : undefined} target={link ? "_blank" : undefined}>
                    {children}
                </WhiteButton>
            );
        } else {
            return (
                <GoldenButton href={link ? link : undefined} target={link ? "_blank" : undefined}>
                    {children}
                </GoldenButton>
            );
        }
    }
}

export default DetailButton;
