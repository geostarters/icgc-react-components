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
  return React.createElement("div", {
    className: styles.containerHeader,
    style: customStyleBar
  }, !isMobile && React.createElement("div", {
    className: styles.containerlogo,
    style: customStyleLogo
  }, React.createElement(Image, {
    src: pathLogo,
    size: logoSize
  })), React.createElement("div", {
    className: styles.containertitle
  }, React.createElement("h2", null, title)), showRightElements && React.createElement("div", {
    className: styles.containeritemRight
  }, children));
}; // eslint-disable-next-line new-cap


export default React.memo(ResizeComponent(Header));
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