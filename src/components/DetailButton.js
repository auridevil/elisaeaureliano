import React from "react";
import PropTypes from "prop-types";
import { Button } from "../styles/detail-styles";

export class DetailButton extends React.Component {
  static propTypes = {
    link: PropTypes.string,
  };

  render() {
    const { children, link } = this.props;
    return (
      <Button
        href={link ? link : undefined}
        target={link ? "_blank" : undefined}
      >
        {children}
      </Button>
    );
  }
}

export default DetailButton;
