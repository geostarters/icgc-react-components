import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonSUI } from "semantic-ui-react";
export const Button = props => /*#__PURE__*/React.createElement(ButtonSUI, props);
export default Button;
Button.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func
};
Button.defaultProps = {
  color: "yellow",
  content: "",
  onClick: () => console.log("click")
};