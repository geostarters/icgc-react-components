// @flow

import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

import ResizeComponent from "../../hoc/ResizeComponent/ResizeComponent";

import styles from "./Footer.module.css";

const Footer = ({title = "Nou prototip", customStyleBar = {}, pathLogo = null, width, showRightElements, children, logoSize = "small", customStyleLogo}) => {

	const isMobile = width <= 500;

	return (
		<div className={styles.containerFooter} style={customStyleBar}>

			{ !isMobile && pathLogo &&
				<div className={styles.containerlogo} style={customStyleLogo}>
					<Image src={pathLogo} size={logoSize}/>
				</div>
			}

			<div className={styles.containertitle}>
				{title}
			</div>

			{showRightElements &&
				<div className={styles.containeritemRight}>
					{children}
				</div>
			}

		</div>
	);

};

// eslint-disable-next-line new-cap
export default React.memo(ResizeComponent(Footer));

Footer.propTypes = {
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