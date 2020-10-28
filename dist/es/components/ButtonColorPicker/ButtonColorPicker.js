function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-invalid-this */
import React from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";
import styles from "./ButtonColorPicker.module.css";
export default class ButtonColorPicker extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      displayColorPicker: false,
      color: this.props.color
    });

    _defineProperty(this, "handleClick", () => this.setState({
      displayColorPicker: !this.state.displayColorPicker
    }));

    _defineProperty(this, "handleClose", () => this.setState({
      displayColorPicker: false
    }));

    _defineProperty(this, "handleChange", color => {
      this.setState(prevState => ({ ...prevState,
        color
      }));
      this.props.handleChangeColor(color, this.props.index);
    });
  }

  render() {
    const {
      color
    } = this.state;
    return /*#__PURE__*/React.createElement("div", {
      className: styles.buttonContainer
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.swatch,
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.color,
      style: {
        background: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
      }
    })), this.state.displayColorPicker ? /*#__PURE__*/React.createElement("div", {
      className: styles.popover
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.cover,
      onClick: this.handleClose
    }), /*#__PURE__*/React.createElement(ChromePicker, {
      color: color.rgb,
      onChange: this.handleChange
    })) : null);
  }

}
ButtonColorPicker.propTypes = {
  handleChangeColor: PropTypes.func,
  color: PropTypes.object,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
ButtonColorPicker.defaultProps = {
  handleChangeColor: () => {},
  color: {
    rgb: {
      r: 255,
      g: 0,
      b: 0,
      a: 1
    }
  },
  index: 0
};