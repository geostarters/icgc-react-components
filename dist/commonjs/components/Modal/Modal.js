"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(_semanticUiReact.Modal, props, props.headertitle && /*#__PURE__*/_react.default.createElement(_semanticUiReact.Modal.Header, {
    className: props.headerClassName,
    content: props.headertitle
  }), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Modal.Content, {
    className: props.contentClassName
  }, props.contentImage && /*#__PURE__*/_react.default.createElement(_semanticUiReact.Image, {
    wrapped: true,
    size: "medium",
    src: props.contentImage
  }), props.children), props.actionbuttons && /*#__PURE__*/_react.default.createElement(_semanticUiReact.Modal.Actions, {
    className: props.actionsClassName
  }, props.actionbuttons.map((btn, index) => /*#__PURE__*/_react.default.createElement(_semanticUiReact.Button, {
    primary: false,
    key: index,
    color: btn.color,
    onClick: btn.handler
  }, btn.icon && /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
    name: btn.icon
  }), " ", btn.label))));
}

Modal.propTypes = {
  size: _propTypes.default.string,
  trigger: _propTypes.default.object,
  children: _propTypes.default.object,
  actionbuttons: _propTypes.default.array,
  open: _propTypes.default.bool,
  closeIcon: _propTypes.default.bool,
  headertitle: _propTypes.default.string,
  contentImage: _propTypes.default.string,
  actionsClassName: _propTypes.default.string,
  headerClassName: _propTypes.default.string,
  contentClassName: _propTypes.default.string
};
Modal.defaultProps = {
  closeIcon: true,
  headertitle: null,
  actionbuttons: null,
  trigger: null
};