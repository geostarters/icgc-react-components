function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-invalid-this */
import React from "react";
import PropTypes from "prop-types";
import ReactNipple from "@geostarters/react-nipple";
import IMAGES from "./images/images"; // optional: include the stylesheet somewhere in your app

import styles from "./ButtonNipple.module.css";
export default class ButtonNipple extends React.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", () => this.setState({
      displayNipplePicker: !this.state.displayNipplePicker
    }));

    _defineProperty(this, "handleClose", () => {
      this.setState({
        displayNipplePicker: false
      });
      this.props.handleChangeAngleDef(this.data, this.props.index);
    });

    _defineProperty(this, "handleChange", (evt, data) => {
      this.data = data;
      this.props.handleChangeAngle(data, this.props.index);
    });

    _defineProperty(this, "radians", a => a * (Math.PI / 180));

    _defineProperty(this, "findCoord", (p, d, a) => {
      const b = {
        x: 0,
        y: 0
      };
      a = this.radians(a);
      b.x = p.x - d * Math.cos(a);
      b.y = p.y - d * Math.sin(a);
      return b;
    });

    this.state = {
      displayNipplePicker: false
    };
    this.data = null;
  }

  render() {
    const {
      angle
    } = this.props;
    const distance = 50 * angle.exaggeration;
    const degree = angle.degree + 90;
    const frontPosition = this.findCoord({
      x: 0,
      y: 0
    }, distance, degree);
    return React.createElement("div", {
      className: styles.buttonContainer
    }, React.createElement("div", {
      className: styles.swatch,
      onClick: this.handleClick
    }, React.createElement("div", {
      className: styles.color,
      style: {
        backgroundImage: `url(${IMAGES.orientacio})`
      }
    })), this.state.displayNipplePicker ? React.createElement("div", {
      className: styles.popover
    }, React.createElement("div", {
      className: styles.cover,
      onClick: this.handleClose
    }), React.createElement("div", {
      className: styles.alphaContainer
    }, React.createElement("div", {
      className: styles.nippleContainer
    }, React.createElement(ReactNipple // supports all nipplejs options
    // see https://github.com/yoannmoinet/nipplejs#options
    , {
      options: {
        mode: "static",
        position: {
          top: "50%",
          left: "50%"
        },
        frontPosition,
        color: "#f98f04",
        restJoystick: false,
        restOpacity: 1
      },
      static: true // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
      ,
      style: {
        width: 150,
        height: 150,
        position: "relative" // if you pass position: 'relative', you don't need to import the stylesheet

      } // all events supported by nipplejs are available as callbacks
      // see https://github.com/yoannmoinet/nipplejs#start
      ,
      onMove: this.handleChange
    })))) : null);
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