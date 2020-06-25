"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactColor = require("react-color");

var _images = _interopRequireDefault(require("./images/images"));

var _ButtonOpacityPickerModule = _interopRequireDefault(require("./ButtonOpacityPicker.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/* eslint-disable no-invalid-this */


class ButtonOpacityPicker extends _react.default.PureComponent {
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
    return _react.default.createElement("div", {
      className: _ButtonOpacityPickerModule.default.buttonContainer
    }, _react.default.createElement("div", {
      className: _ButtonOpacityPickerModule.default.swatch,
      onClick: this.handleClick
    }, _react.default.createElement("div", {
      className: _ButtonOpacityPickerModule.default.color,
      style: {
        backgroundImage: `url(${this.props.image})`
      }
    }, _react.default.createElement("div", {
      className: _ButtonOpacityPickerModule.default.color,
      style: {
        background: `rgba(255, 255, 255, ${1 - opacity})`
      }
    }))), this.state.displayAlphaPicker ? _react.default.createElement("div", {
      className: _ButtonOpacityPickerModule.default.popover
    }, _react.default.createElement("div", {
      className: _ButtonOpacityPickerModule.default.cover,
      onClick: this.handleClose
    }), _react.default.createElement("div", {
      className: _ButtonOpacityPickerModule.default.alphaContainer
    }, _react.default.createElement(_reactColor.AlphaPicker, {
      width: "300px",
      color: `rgba(255, 255, 255, ${opacity})`,
      onChange: this.handleChange
    }))) : null);
  }

}

exports.default = ButtonOpacityPicker;
ButtonOpacityPicker.propTypes = {
  handleChangeOpacity: _propTypes.default.func,
  opacity: _propTypes.default.number,
  index: _propTypes.default.number,
  image: _propTypes.default.string
};
ButtonOpacityPicker.defaultProps = {
  handleChangeOpacity: () => {},
  opacity: 1,
  index: 0,
  image: `${_images.default.opacity}`
};