//@flow

import React from "react";
import PropTypes from "prop-types";
import styles from "./LogoICGC.module.css";

export default function LogoICGC({position, logoType, url, addText}) {

	const positionClassName = styles[position];
	const logoTypeClassName = styles[logoType];

	return (
		<div className={positionClassName} >
			<a className={logoTypeClassName} target="_blank" rel="noopener noreferrer" href={url} aria-label="Icgc" >{null}</a>
			{addText &&  <div className={styles.logoText}>{addText}</div>}
		</div>
	);

}

LogoICGC.propTypes = {
	position: PropTypes.oneOf(["bottom-right", "bottom-left", "top-right", "top-left", "relative"]),
	addText: PropTypes.string,
	url: PropTypes.string,
	logoType: PropTypes.oneOf(["icgc-logo", "icgc-logotxt", "icgc-logo-white-text", "icgc-logo2-text"])
};

LogoICGC.defaultProps = {
	addText: null,
	position: "relative",
	url: "http://www.icgc.cat/",
	logoType: "icgc-logo",
};
