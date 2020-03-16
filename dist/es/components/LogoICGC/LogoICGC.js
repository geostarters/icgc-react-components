import React from "react";
import PropTypes from "prop-types"; // eslint-disable-next-line no-unused-vars

import styles from "./LogoICGC.css";
export default function LogoICGC(props) {
  const logoProps = {
    addText: false,
    position: "bottom-right",
    url: "http://www.icgc.cat/",
    logoType: "icgc-logo",
    ...props
  };
  return React.createElement("div", {
    className: logoProps.position
  }, React.createElement("a", {
    className: logoProps.logoType,
    target: "_blank",
    rel: "noopener noreferrer",
    href: logoProps.url,
    "aria-label": "Icgc"
  }), logoProps.addText && React.createElement("div", {
    className: "logo-text"
  }, logoProps.addText));
}
LogoICGC.propTypes = {
  position: PropTypes.string,
  addText: PropTypes.string,
  url: PropTypes.string,
  logoType: PropTypes.string
};