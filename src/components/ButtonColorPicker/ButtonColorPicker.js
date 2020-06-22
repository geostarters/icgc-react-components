/* eslint-disable no-invalid-this */
// @flow

import React from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

import styles from "./ButtonColorPicker.module.css";

export default class ButtonColorPicker extends React.PureComponent {

	state = {
		displayColorPicker: false,
		color: this.props.color
	};

	handleClick = () => this.setState({ displayColorPicker: !this.state.displayColorPicker });

	handleClose = () => this.setState({ displayColorPicker: false });

	handleChange = (color) => {

		this.setState(prevState => ({
			...prevState,
			color
		}));
		this.props.handleChangeColor(color, this.props.index);

	}

	render() {

		const { color } = this.state;

		return (
			<div className={ styles.buttonContainer }>
				<div className={ styles.swatch } onClick={ this.handleClick }>
					<div className={ styles.color } style={{background: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`}}/>
				</div>
				{ this.state.displayColorPicker ? <div className={ styles.popover }>
					<div className={ styles.cover } onClick={ this.handleClose }/>
					<ChromePicker color={ color.rgb } onChange={ this.handleChange } />
				</div> : null }

			</div>
		);

	}

}

ButtonColorPicker.propTypes = {
	handleChangeColor: PropTypes.func,
	color: PropTypes.object,
	index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

ButtonColorPicker.defaultProps = {
	handleChangeColor: () => {},
	color: {rgb: {r: 255, g:0, b: 0, a: 1} },
	index: 0
};
