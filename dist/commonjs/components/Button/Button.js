"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  const buttonProps = {
    color: "yellow",
    onClick: () => console.log("click"),
    ...props
  };
  return /*#__PURE__*/_react.default.createElement(_semanticUiReact.Button, buttonProps);
}