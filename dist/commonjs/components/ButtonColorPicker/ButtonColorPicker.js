"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactColor = require("react-color");

var _ButtonColorPickerModule = _interopRequireDefault(require("./ButtonColorPicker.module.css"));

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


class ButtonColorPicker extends _react.default.PureComponent {
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
    return _react.default.createElement("div", {
      className: _ButtonColorPickerModule.default.buttonContainer
    }, _react.default.createElement("div", {
      className: _ButtonColorPickerModule.default.swatch,
      onClick: this.handleClick
    }, _react.default.createElement("div", {
      className: _ButtonColorPickerModule.default.color,
      style: {
        background: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
      }
    })), this.state.displayColorPicker ? _react.default.createElement("div", {
      className: _ButtonColorPickerModule.default.popover
    }, _react.default.createElement("div", {
      className: _ButtonColorPickerModule.default.cover,
      onClick: this.handleClose
    }), _react.default.createElement(_reactColor.ChromePicker, {
      color: color.rgb,
      onChange: this.handleChange
    })) : null);
  }

}

exports.default = ButtonColorPicker;
ButtonColorPicker.propTypes = {
  handleChangeColor: _propTypes.default.func,
  color: _propTypes.default.object,
  index: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
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