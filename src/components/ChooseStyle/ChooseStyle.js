// @flow

import React from "react";
import PropTypes from "prop-types";

import { Image } from "semantic-ui-react";

import styles from "./ChooseStyle.module.css";

const ChooseStyle = ({currentStyleId, stylesList, handleClickStyle, selectedColor, labelColor}) => (<div className={styles.styleContainer}>
	<ul>
		{stylesList.map((bg, index) => <li key={index} onClick={e => (currentStyleId === bg.styleid ? null : handleClickStyle(bg, e))}>
			<div className={styles.imageContainer}>
				<Image className={currentStyleId === bg.styleid ? styles.selected : ""} style={{borderColor: selectedColor}} size="large" src={bg.icon}></Image>
				<div className={styles.imageLabel} style={{color: labelColor}}>{bg.name}</div>
			</div>
		</li>)}
	</ul>
</div>
);

ChooseStyle.defaultProps = {
	selectedColor: "#333",
	labelColor: "#333",
	handleClickStyle: () => {}
};

export default React.memo(ChooseStyle);

ChooseStyle.propTypes = {
	currentStyleId: PropTypes.number,
	stylesList: PropTypes.array,
	handleClickStyle: PropTypes.func,
	selectedColor: PropTypes.string,
	labelColor: PropTypes.string,
	handleClickBaseStyle: PropTypes.func,
};
