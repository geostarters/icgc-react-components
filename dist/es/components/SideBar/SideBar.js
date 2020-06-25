function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-invalid-this */
import React from "react";
import PropTypes from "prop-types";
import styles from "./SideBar.module.css";
import { Icon, Button } from "semantic-ui-react";

class SideBar extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: this.props.show
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
    const containerStyle = show ? [styles.container, styles.movein] : [styles.container, styles.moveout];
    const contentStyle = show ? [styles.content, styles.fadein] : [styles.content, styles.fadeout];
    return React.createElement("div", {
      className: containerStyle.join(" ")
    }, React.createElement(Button, {
      className: styles.toggleBtn,
      icon: true,
      primary: true,
      onClick: this.handleClick
    }, React.createElement(Icon, {
      name: show ? "chevron left" : "chevron right"
    })), React.createElement("div", {
      className: contentStyle.join(" ")
    }, this.props.children));
  }

}

export default SideBar;
SideBar.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool
};
SideBar.defaultProps = {
  children: null,
  show: true
};