import React, { Component } from "react";
import { Button as ButtonSUI } from "semantic-ui-react";
import PropTypes from "prop-types"; // eslint-disable-next-line no-unused-vars

import styles from "./NavButtons.css";
export default class NavButtons extends Component {
  render() {
    return React.createElement(ButtonSUI.Group, {
      className: this.props.fullWidth ? "full-width" : ""
    }, React.createElement(ButtonSUI, {
      basic: true,
      color: this.props.color ? this.props.color : "yellow",
      disabled: this.props.disabledPrev,
      floated: "left",
      labelPosition: "left",
      icon: "left chevron",
      content: "Anterior",
      onClick: this.props.goPrevStep
    }), React.createElement(ButtonSUI, {
      color: this.props.color ? this.props.color : "yellow",
      disabled: this.props.disabledNext,
      floated: "right",
      labelPosition: "right",
      icon: "right chevron",
      content: "Seg\xFCent",
      onClick: this.props.goNextStep
    }));
  }

}
NavButtons.propTypes = {
  goPrevStep: PropTypes.func,
  goNextStep: PropTypes.func,
  disabledPrev: PropTypes.bool,
  disabledNext: PropTypes.bool,
  color: PropTypes.string,
  fullWidth: PropTypes.bool
};