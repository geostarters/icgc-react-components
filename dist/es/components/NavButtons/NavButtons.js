import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./NavButtons.module.css";
export default function NavButtons({
  goPrevStep,
  goNextStep,
  disabledPrev,
  disabledNext,
  color,
  fullWidth,
  prevText,
  nextText
}) {
  return /*#__PURE__*/React.createElement(Button.Group, {
    className: fullWidth ? styles.fullWidth : ""
  }, /*#__PURE__*/React.createElement(Button, {
    basic: true,
    color: color,
    disabled: disabledPrev,
    floated: "left",
    labelPosition: "left",
    icon: "left chevron",
    content: prevText,
    onClick: goPrevStep
  }), /*#__PURE__*/React.createElement(Button, {
    color: color,
    disabled: disabledNext,
    floated: "right",
    labelPosition: "right",
    icon: "right chevron",
    content: nextText,
    onClick: goNextStep
  }));
}
NavButtons.propTypes = {
  goPrevStep: PropTypes.func,
  goNextStep: PropTypes.func,
  disabledPrev: PropTypes.bool,
  disabledNext: PropTypes.bool,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  prevText: PropTypes.string,
  nextText: PropTypes.string
};
NavButtons.defaultProps = {
  goPrevStep: () => {},
  goNextStep: () => {},
  disabledPrev: false,
  disabledNext: false,
  color: "yellow",
  fullWidth: false,
  prevText: "Anterior",
  nextText: "Següent"
};