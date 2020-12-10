//@flow

import React from "react";
import { action } from "@storybook/addon-actions";

import ButtonOpacityPicker from "./ButtonOpacityPicker";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "ButtonOpacityPicker",
	component: ButtonOpacityPicker
};

const Template = args => (<ButtonOpacityPicker {...args}/>);

export const _ButtonOpacityPicker = Template.bind({});
_ButtonOpacityPicker.storyName = "ButtonOpacityPicker";

export const ButtonOpacityPickerOpacity = Template.bind({});
ButtonOpacityPickerOpacity.storyName = "ButtonOpacityPicker opacity";
ButtonOpacityPickerOpacity.args = {
	opacity: 0.5,
	handleChangeOpacity: action("onChange")
};

export const ButtonOpacityPickerImagen = Template.bind({});
ButtonOpacityPickerImagen.storyName = "ButtonOpacityPicker imagen";
ButtonOpacityPickerImagen.args = {
	opacity: 0.5,
	handleChangeOpacity: action("onChange"),
	image: "https://www.instamaps.cat/static/img/map-backgrounds/orto.jpg"
};
