"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("@geostarters/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
/* eslint-disable no-undef, no-invalid-this */


const ResizeComponent = ComposedComponent => {
  var _class, _temp;

  return _temp = _class = class ResizeComponent extends _react.default.PureComponent {
    constructor(props) {
      super(props);

      _defineProperty(this, "handleWindowSizeChange", () => this.setState({
        width: window.innerWidth
      }));

      _defineProperty(this, "componentWillUnmount", () => window.removeEventListener("resize", this.handleWindowSizeChange));

      _defineProperty(this, "render", () => /*#__PURE__*/_react.default.createElement(ComposedComponent, _extends({}, this.state, this.props), this.props.children));

      this.state = {
        width: window.innerWidth
      };

      const debouncedHandleWindowSizeChange = _common.Utils.debounce(this.handleWindowSizeChange, props.delay ? props.delay : 50);

      window.addEventListener("resize", debouncedHandleWindowSizeChange);
    }

  }, _defineProperty(_class, "propTypes", {
    delay: _propTypes.default.number,
    children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
  }), _temp;
};

var _default = ResizeComponent;
exports.default = _default;