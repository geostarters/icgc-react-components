// @flow

import React from "react";
import PropTypes from "prop-types";
import ReactNipple from "@geostarters/react-nipple";

import IMAGES from "./images/images";
// optional: include the stylesheet somewhere in your app
import styles from "./ButtonNipple.module.css";

export default class ButtonNipple extends React.PureComponent {

	constructor(props: any) {

		super(props);

		this.state = {

			displayNipplePicker: false,

		};

		this.data = null;

	}

	handleClick = () => this.setState({ displayNipplePicker: !this.state.displayNipplePicker });

	handleClose = () => {

		this.setState({ displayNipplePicker: false });
		this.props.handleChangeAngleDef(this.data, this.props.index);

	}

	handleChange = (evt, data) => {

		this.data = data;
		this.props.handleChangeAngle(data, this.props.index);

	}

	radians = a => a * (Math.PI / 180)

	findCoord = (p, d, a) => {

		const b = {x: 0, y: 0};
		a = this.radians(a);
		b.x = p.x - d * Math.cos(a);
		b.y = p.y - d * Math.sin(a);
		return b;

	}

	render() {

		const { angle } = this.props;

		const distance = 50 * angle.exaggeration;
		const degree = angle.degree + 90;

		const frontPosition = this.findCoord({x: 0, y: 0}, distance, degree);

		return (
			<div className={styles.buttonContainer}>
				<div className={ styles.swatch } onClick={ this.handleClick }>
					<div className={ styles.color } style={{backgroundImage: `url(${IMAGES.orientacio})`}}>

					</div>
				</div>
				{ this.state.displayNipplePicker ? <div className={ styles.popover }>
					<div className={ styles.cover } onClick={ this.handleClose }/>
					<div className={ styles.alphaContainer }>
						<div className={ styles.nippleContainer }>
							<ReactNipple
								// supports all nipplejs options
								// see https://github.com/yoannmoinet/nipplejs#options
								options={{
									mode: "static",
									position: { top: "50%", left: "50%" },
									frontPosition,
									color: "#f98f04",
									restJoystick: false,
									restOpacity: 1
								}}
								static={true}
								// any unknown props will be passed to the container element, e.g. 'title', 'style' etc
								style={{
									width: 150,
									height: 150,
									position: "relative",
								// if you pass position: 'relative', you don't need to import the stylesheet
								}}
								// all events supported by nipplejs are available as callbacks
								// see https://github.com/yoannmoinet/nipplejs#start
								onMove={this.handleChange}
							/>
						</div>
					</div>
				</div> : null }
			</div>
		);

	}

}

ButtonNipple.propTypes = {
	handleChangeAngle: PropTypes.func,
	handleChangeAngleDef: PropTypes.func,
	angle: PropTypes.object,
	index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

ButtonNipple.defaultProps = {
	handleChangeAngle: () => {},
	handleChangeAngleDef: () => {},
	angle: {
		degree: 315,
		exaggeration: 1
	},
	index: 0
};
