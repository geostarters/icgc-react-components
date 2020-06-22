// @flow

import React from "react";
import PropTypes from "prop-types";
import { AlphaPicker } from "react-color";
import IMAGES from "./images/images";

import styles from "./ButtonOpacityPicker.module.css";

export default class ButtonOpacityPicker extends React.PureComponent {

	state = {

		displayAlphaPicker: false,
		opacity: this.props.opacity

	};

	handleClick = () => this.setState({ displayAlphaPicker: !this.state.displayAlphaPicker });

	handleClose = () => this.setState({ displayAlphaPicker: false });

	handleChange = (opacity) => {

		if (opacity.rgb.a < 0.02) {

			return;

		}
		this.setState(prevState => ({
			...prevState,
			opacity: opacity.rgb.a
		}));
		this.props.handleChangeOpacity(opacity.rgb.a, this.props.index);

	}

	render() {

		const { opacity } = this.state;

		return (
			<div className={ styles.buttonContainer }>
				<div className={ styles.swatch } onClick={ this.handleClick }>
					<div className={ styles.color } style={{backgroundImage: `url(${this.props.image})`}}>
						<div className={ styles.color } style={{background: `rgba(255, 255, 255, ${1 - opacity})`}} />
					</div>
				</div>
				{ this.state.displayAlphaPicker ? <div className={ styles.popover }>
					<div className={ styles.cover } onClick={ this.handleClose }/>
					<div className={ styles.alphaContainer }>
						<AlphaPicker width="300px" color={`rgba(255, 255, 255, ${opacity})`} onChange={ this.handleChange } />
					</div>
				</div> : null }

			</div>

		);

	}

}

ButtonOpacityPicker.propTypes = {
	handleChangeOpacity: PropTypes.func,
	opacity: PropTypes.number,
	index: PropTypes.number,
	image: PropTypes.string
};

ButtonOpacityPicker.defaultProps = {
	handleChangeOpacity: () => {},
	opacity: 1,
	index: 0,
	image: `${IMAGES.opacity}`
};
