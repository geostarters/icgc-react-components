//@flow

import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonSUI } from "semantic-ui-react";

export const Button = props => (<ButtonSUI {...props}></ButtonSUI>);

export default Button;

Button.propTypes = {
	color: PropTypes.string,
	content: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	color: "yellow",
	content: "",
	onClick: () => console.log("click")
};
