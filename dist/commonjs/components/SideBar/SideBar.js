"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SideBarModule = _interopRequireDefault(require("./SideBar.module.css"));

var _semanticUiReact = require("semantic-ui-react");

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


class SideBar extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: this.props.showInitial
    });

    _defineProperty(this, "handleClick", () => {
      const isShow = !this.state.show;
      this.setState({
        show: isShow
      });
    });
  }

  render() {
    const {
      show
    } = this.state;
    const containerStyle = show ? [_SideBarModule.default.container, _SideBarModule.default.movein] : [_SideBarModule.default.container, _SideBarModule.default.moveout];
    const contentStyle = show ? [_SideBarModule.default.content, _SideBarModule.default.fadein] : [_SideBarModule.default.content, _SideBarModule.default.fadeout];
    return /*#__PURE__*/_react.default.createElement("div", {
      className: containerStyle.join(" ")
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Button, {
      className: _SideBarModule.default.toggleBtn,
      icon: true,
      primary: true,
      onClick: this.handleClick
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
      name: show ? "chevron left" : "chevron right"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: contentStyle.join(" ")
    }, this.props.children));
  }

}

var _default = SideBar;
exports.default = _default;
SideBar.propTypes = {
  children: _propTypes.default.object,
  showInitial: _propTypes.default.bool
};
SideBar.defaultProps = {
  children: null,
  showInitial: true
};