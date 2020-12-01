"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LogoICGC;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LogoICGCModule = _interopRequireDefault(require("./LogoICGC.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LogoICGC({
  position,
  logoType,
  url,
  addText
}) {
  const positionClassName = _LogoICGCModule.default[position];
  const logoTypeClassName = _LogoICGCModule.default[logoType];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: positionClassName
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: logoTypeClassName,
    target: "_blank",
    rel: "noopener noreferrer",
    href: url,
    "aria-label": "Icgc"
  }, null), addText && /*#__PURE__*/_react.default.createElement("div", {
    className: _LogoICGCModule.default.logoText
  }, addText));
}

LogoICGC.propTypes = {
  position: _propTypes.default.oneOf(["bottom-right", "bottom-left", "top-right", "top-left"]),
  addText: _propTypes.default.string,
  url: _propTypes.default.string,
  logoType: _propTypes.default.oneOf(["icgc-logo", "icgc-logotxt", "icgc-logo-white-text", "icgc-logo2-text"])
};
LogoICGC.defaultProps = {
  addText: null,
  position: "bottom-right",
  url: "http://www.icgc.cat/",
  logoType: "icgc-logo"
};