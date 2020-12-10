//@flow

import React from "react";

import { action } from "@storybook/addon-actions";

import Button from "../Button/Button";

import Modal from "./Modal";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "Modal",
	component: Modal
};

const Template = args => (<Modal {...args} trigger={<Button>Show Modal</Button>}>text content</Modal>);

export const _Modal = Template.bind({});
_Modal.storyName = "Modal";

export const ModalWithHeader = Template.bind({});
ModalWithHeader.storyName = "Modal with header";
ModalWithHeader.args = {
	headertitle: "text header"
};

export const ModalWithButtons = args => (<Modal {...args} trigger={<Button>Show Modal</Button>}>
	<div>
		<p>Aquest estil no ha estat generat a Contextmaps i per tant no es podrà editar.</p>
		<p>Vols continuar amb la càrrega?</p>
	</div>
</Modal>);
ModalWithButtons.storyName = "Modal with buttons";
ModalWithButtons.args = {
	headertitle: "Avís",
	actionbuttons: [
		{label: "Carregar", color: "green", handler: action("onClick"), icon: "check" },
		{label: "Cancel·lar", color: "grey", handler: action("onClick"), icon: "remove"}
	]
};
