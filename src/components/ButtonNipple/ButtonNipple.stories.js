//@flow

import React from "react";
import { action } from "@storybook/addon-actions";

import ButtonNipple from "./ButtonNipple";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "ButtonNipple",
	component: ButtonNipple
};

const Template = args => (<ButtonNipple {...args}/>);

export const _ButtonNipple = Template.bind({});
_ButtonNipple.storyName = "ButtonNipple";

export const ButtonNippleAngle = Template.bind({});
ButtonNippleAngle.storyName = "ButtonNipple angle";
ButtonNippleAngle.args = {
	angle: {degree: 150, exaggeration: 0.5},
	handleChangeAngle: action("onChange")
};
