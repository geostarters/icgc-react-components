"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNipple = _interopRequireDefault(require("@geostarters/react-nipple"));

var _images = _interopRequireDefault(require("./images/images"));

var _ButtonNippleModule = _interopRequireDefault(require("./ButtonNipple.module.css"));

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


class ButtonNipple extends _react.default.PureComponent {
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
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _ButtonNippleModule.default.buttonContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _ButtonNippleModule.default.swatch,
      onClick: this.handleClick
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _ButtonNippleModule.default.color,
      style: {
        backgroundImage: `url(${_images.default.orientacio})`
      }
    })), this.state.displayNipplePicker ? /*#__PURE__*/_react.default.createElement("div", {
      className: _ButtonNippleModule.default.popover
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _ButtonNippleModule.default.cover,
      onClick: this.handleClose
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: _ButtonNippleModule.default.alphaContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _ButtonNippleModule.default.nippleContainer
    }, /*#__PURE__*/_react.default.createElement(_reactNipple.default // supports all nipplejs options
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

exports.default = ButtonNipple;
ButtonNipple.propTypes = {
  handleChangeAngle: _propTypes.default.func,
  handleChangeAngleDef: _propTypes.default.func,
  angle: _propTypes.default.object,
  index: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
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