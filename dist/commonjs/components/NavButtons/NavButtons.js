"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavButtons;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NavButtonsModule = _interopRequireDefault(require("./NavButtons.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavButtons({
  goPrevStep,
  goNextStep,
  disabledPrev,
  disabledNext,
  color,
  fullWidth,
  prevText,
  nextText
}) {
  return _react.default.createElement(_semanticUiReact.Button.Group, {
    className: fullWidth ? _NavButtonsModule.default.fullWidth : ""
  }, _react.default.createElement(_semanticUiReact.Button, {
    basic: true,
    color: color,
    disabled: disabledPrev,
    floated: "left",
    labelPosition: "left",
    icon: "left chevron",
    content: prevText,
    onClick: goPrevStep
  }), _react.default.createElement(_semanticUiReact.Button, {
    color: color,
    disabled: disabledNext,
    floated: "right",
    labelPosition: "right",
    icon: "right chevron",
    content: nextText,
    onClick: goNextStep
  }));
}

NavButtons.propTypes = {
  goPrevStep: _propTypes.default.func,
  goNextStep: _propTypes.default.func,
  disabledPrev: _propTypes.default.bool,
  disabledNext: _propTypes.default.bool,
  color: _propTypes.default.string,
  fullWidth: _propTypes.default.bool,
  prevText: _propTypes.default.string,
  nextText: _propTypes.default.string
};
NavButtons.defaultProps = {
  goPrevStep: () => {},
  goNextStep: () => {},
  disabledPrev: false,
  disabledNext: false,
  color: "yellow",
  fullWidth: false,
  prevText: "Anterior",
  nextText: "Següent"
};