function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-undef, no-invalid-this */
import React from "react";
import PropTypes from "prop-types";
import { Utils } from "@geostarters/common";

const ResizeComponent = ComposedComponent => {
  var _class, _temp;

  return _temp = _class = class ResizeComponent extends React.PureComponent {
    constructor(props) {
      super(props);

      _defineProperty(this, "handleWindowSizeChange", () => this.setState({
        width: window.innerWidth
      }));

      _defineProperty(this, "componentWillUnmount", () => window.removeEventListener("resize", this.handleWindowSizeChange));

      _defineProperty(this, "render", () => React.createElement(ComposedComponent, _extends({}, this.state, this.props), this.props.children));

      this.state = {
        width: window.innerWidth
      };
      const debouncedHandleWindowSizeChange = Utils.debounce(this.handleWindowSizeChange, props.delay ? props.delay : 50);
      window.addEventListener("resize", debouncedHandleWindowSizeChange);
    }

  }, _defineProperty(_class, "propTypes", {
    delay: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  }), _temp;
};

export default ResizeComponent;