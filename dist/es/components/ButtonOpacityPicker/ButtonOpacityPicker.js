function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-invalid-this */
import React from "react";
import PropTypes from "prop-types";
import { AlphaPicker } from "react-color";
import IMAGES from "./images/images";
import styles from "./ButtonOpacityPicker.module.css";
export default class ButtonOpacityPicker extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      displayAlphaPicker: false,
      opacity: this.props.opacity
    });

    _defineProperty(this, "handleClick", () => this.setState({
      displayAlphaPicker: !this.state.displayAlphaPicker
    }));

    _defineProperty(this, "handleClose", () => this.setState({
      displayAlphaPicker: false
    }));

    _defineProperty(this, "handleChange", opacity => {
      if (opacity.rgb.a < 0.02) {
        return;
      }

      this.setState(prevState => ({ ...prevState,
        opacity: opacity.rgb.a
      }));
      this.props.handleChangeOpacity(opacity.rgb.a, this.props.index);
    });
  }

  render() {
    const {
      opacity
    } = this.state;
    return /*#__PURE__*/React.createElement("div", {
      className: styles.buttonContainer
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.swatch,
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.color,
      style: {
        backgroundImage: `url(${this.props.image})`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.color,
      style: {
        background: `rgba(255, 255, 255, ${1 - opacity})`
      }
    }))), this.state.displayAlphaPicker ? /*#__PURE__*/React.createElement("div", {
      className: styles.popover
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.cover,
      onClick: this.handleClose
    }), /*#__PURE__*/React.createElement("div", {
      className: styles.alphaContainer
    }, /*#__PURE__*/React.createElement(AlphaPicker, {
      width: "300px",
      color: `rgba(255, 255, 255, ${opacity})`,
      onChange: this.handleChange
    }))) : null);
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