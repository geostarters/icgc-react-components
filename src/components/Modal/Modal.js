//@flow

import React from "react";
import PropTypes from "prop-types";
import { Modal as ModalSUI, Button, Icon, Image } from "semantic-ui-react";

export default function Modal(props) {

	return (
		<ModalSUI {...props}>
			{props.headertitle && <ModalSUI.Header className={props.headerClassName} content={props.headertitle}></ModalSUI.Header>}
			<ModalSUI.Content className={props.contentClassName}>
				{props.contentImage &&  <Image wrapped size='medium' src={props.contentImage} />}
				{props.children}
			</ModalSUI.Content>
			{props.actionbuttons && <ModalSUI.Actions className={props.actionsClassName}>
				{props.actionbuttons.map((btn, index) => <Button primary={false} key={index} color={btn.color} onClick={btn.handler}>
					{btn.icon && <Icon name={btn.icon}></Icon>} {btn.label}
				</Button>
				)}
			</ModalSUI.Actions>
			}
		</ModalSUI>
	);

}

Modal.propTypes = {
	size: PropTypes.string,
	trigger: PropTypes.object,
	children: PropTypes.object,
	actionbuttons: PropTypes.array,
	open: PropTypes.bool,
	closeIcon: PropTypes.bool,
	headertitle: PropTypes.string,
	contentImage: PropTypes.string,
	actionsClassName: PropTypes.string,
	headerClassName: PropTypes.string,
	contentClassName: PropTypes.string,
};

Modal.defaultProps = {
	closeIcon: true,
	headertitle: null,
	actionbuttons: null,
	trigger: null
};
