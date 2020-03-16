"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LogoICGC;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LogoICGC = _interopRequireDefault(require("./LogoICGC.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
function LogoICGC(props) {
  const logoProps = {
    addText: false,
    position: "bottom-right",
    url: "http://www.icgc.cat/",
    logoType: "icgc-logo",
    ...props
  };
  return _react.default.createElement("div", {
    className: logoProps.position
  }, _react.default.createElement("a", {
    className: logoProps.logoType,
    target: "_blank",
    rel: "noopener noreferrer",
    href: logoProps.url,
    "aria-label": "Icgc"
  }), logoProps.addText && _react.default.createElement("div", {
    className: "logo-text"
  }, logoProps.addText));
}

LogoICGC.propTypes = {
  position: _propTypes.default.string,
  addText: _propTypes.default.string,
  url: _propTypes.default.string,
  logoType: _propTypes.default.string
};