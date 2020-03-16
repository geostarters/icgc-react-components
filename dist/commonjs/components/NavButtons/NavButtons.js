"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NavButtons = _interopRequireDefault(require("./NavButtons.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line no-unused-vars
class NavButtons extends _react.Component {
  render() {
    return _react.default.createElement(_semanticUiReact.Button.Group, {
      className: this.props.fullWidth ? "full-width" : ""
    }, _react.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: this.props.color ? this.props.color : "yellow",
      disabled: this.props.disabledPrev,
      floated: "left",
      labelPosition: "left",
      icon: "left chevron",
      content: "Anterior",
      onClick: this.props.goPrevStep
    }), _react.default.createElement(_semanticUiReact.Button, {
      color: this.props.color ? this.props.color : "yellow",
      disabled: this.props.disabledNext,
      floated: "right",
      labelPosition: "right",
      icon: "right chevron",
      content: "Seg\xFCent",
      onClick: this.props.goNextStep
    }));
  }

}

exports.default = NavButtons;
NavButtons.propTypes = {
  goPrevStep: _propTypes.default.func,
  goNextStep: _propTypes.default.func,
  disabledPrev: _propTypes.default.bool,
  disabledNext: _propTypes.default.bool,
  color: _propTypes.default.string,
  fullWidth: _propTypes.default.bool
};