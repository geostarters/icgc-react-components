//@flow

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Button as ButtonSUI } from "semantic-ui-react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
import styles from "./NavButtons.css";

export default class NavButtons extends Component {

	render() {

		return (
			<ButtonSUI.Group className={this.props.fullWidth ? "full-width" : ""}>
				<ButtonSUI basic color={this.props.color ? this.props.color : "yellow"} disabled={this.props.disabledPrev} floated='left' labelPosition='left' icon='left chevron' content='Anterior' onClick={this.props.goPrevStep}/>
				<ButtonSUI color={this.props.color ? this.props.color : "yellow"} disabled={this.props.disabledNext} floated='right' labelPosition='right' icon='right chevron' content='Següent' onClick={this.props.goNextStep}/>
			</ButtonSUI.Group>
		);

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
