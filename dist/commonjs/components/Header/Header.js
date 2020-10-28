"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _ResizeComponent = _interopRequireDefault(require("../../hoc/ResizeComponent/ResizeComponent"));

var _images = _interopRequireDefault(require("../../resources/images"));

var _HeaderModule = _interopRequireDefault(require("./Header.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = ({
  title = "Nou prototip",
  customStyleBar = {},
  pathLogo = _images.default.ICGC,
  width,
  showRightElements,
  children,
  logoSize = "small",
  customStyleLogo
}) => {
  const isMobile = width <= 500;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.containerHeader,
    style: customStyleBar
  }, !isMobile && /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.containerlogo,
    style: customStyleLogo
  }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Image, {
    src: pathLogo,
    size: logoSize
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.containertitle
  }, /*#__PURE__*/_react.default.createElement("h2", null, title)), showRightElements && /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.containeritemRight
  }, children));
}; // eslint-disable-next-line new-cap


var _default = /*#__PURE__*/_react.default.memo((0, _ResizeComponent.default)(Header));

exports.default = _default;
Header.propTypes = {
  title: _propTypes.default.string,
  pathLogo: _propTypes.default.string,
  logoSize: _propTypes.default.string,
  showModalInfo: _propTypes.default.bool,
  width: _propTypes.default.number,
  customStyleBar: _propTypes.default.object,
  customStyleLogo: _propTypes.default.object,
  children: _propTypes.default.object,
  showRightElements: _propTypes.default.bool
};