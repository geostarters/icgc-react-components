/* eslint-disable no-invalid-this */
// @flow

import React from "react";
import PropTypes from "prop-types";
import styles from "./SideBar.module.css";
import { Icon, Button } from "semantic-ui-react";


class SideBar extends React.PureComponent {

	state = {
		show: this.props.show
	};

	handleClick = () => {

		const isShow = !this.state.show;
		this.setState({ show: isShow });

	}

	render() {

		const { show } = this.state;
		const containerStyle = show ? [styles.container, styles.movein] : [styles.container, styles.moveout];
		const contentStyle = show ? [styles.content, styles.fadein] : [styles.content, styles.fadeout];

		return (
			<div className={containerStyle.join(" ")}>
				<Button className={styles.toggleBtn} icon primary onClick={this.handleClick}>
					<Icon name={show ? "chevron left" : "chevron right"}></Icon>
				</Button>
				<div className={contentStyle.join(" ") }>
					{this.props.children}
				</div>
			</div>

		);

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
