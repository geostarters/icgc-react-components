import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";
import ResizeComponent from "../../hoc/ResizeComponent/ResizeComponent";
import IMAGES from "../../resources/images";
import styles from "./Header.module.css";

const Header = ({
  title = "Nou prototip",
  customStyleBar = {},
  pathLogo = IMAGES.ICGC,
  width,
  showRightElements,
  children,
  logoSize = "small",
  customStyleLogo
}) => {
  const isMobile = width <= 500;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.containerHeader,
    style: customStyleBar
  }, !isMobile && /*#__PURE__*/React.createElement("div", {
    className: styles.containerlogo,
    style: customStyleLogo
  }, /*#__PURE__*/React.createElement(Image, {
    src: pathLogo,
    size: logoSize
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.containertitle
  }, /*#__PURE__*/React.createElement("h2", null, title)), showRightElements && /*#__PURE__*/React.createElement("div", {
    className: styles.containeritemRight
  }, children));
}; // eslint-disable-next-line new-cap


export default /*#__PURE__*/React.memo(ResizeComponent(Header));
Header.propTypes = {
  title: PropTypes.string,
  pathLogo: PropTypes.string,
  logoSize: PropTypes.string,
  showModalInfo: PropTypes.bool,
  width: PropTypes.number,
  customStyleBar: PropTypes.object,
  customStyleLogo: PropTypes.object,
  children: PropTypes.object,
  showRightElements: PropTypes.bool
};