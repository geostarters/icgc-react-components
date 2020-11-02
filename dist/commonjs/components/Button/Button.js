"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => /*#__PURE__*/_react.default.createElement(_semanticUiReact.Button, props);

exports.Button = Button;
var _default = Button;
exports.default = _default;
Button.propTypes = {
  color: _propTypes.default.string,
  content: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  color: "yellow",
  content: "",
  onClick: () => console.log("click")
};