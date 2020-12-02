//@flow

import React from "react";

import Button from "./Button";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "Button",
	component: Button
};

const Template = args => (<Button {...args}/>);

export const OkButton = Template.bind({});
OkButton.storyName = "Ok button";
OkButton.args = {
	content:"OK"
};

export const IconButton = Template.bind({});
IconButton.storyName = "Icon button";
IconButton.args = {
	icon:"sign-in"
};

export const BasicButton = Template.bind({});
BasicButton.storyName = "Basic button";
BasicButton.args = {
	basic: true,
	content: "Basic"
};

export const CancelButton = Template.bind({});
CancelButton.storyName = "Cancel button";
CancelButton.args = {
	color: "red",
	content: "Cancel"
};
