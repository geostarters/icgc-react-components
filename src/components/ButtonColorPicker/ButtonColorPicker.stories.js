//@flow

import React from "react";
import { action } from "@storybook/addon-actions";

import ButtonColorPicker from "./ButtonColorPicker";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "ButtonColorPicker",
	component: ButtonColorPicker
};

const Template = args => (<ButtonColorPicker {...args}/>);

export const _ButtonColorPicker = Template.bind({});
_ButtonColorPicker.storyName = "ButtonColorPicker";

export const ButtonColorPickerColor = Template.bind({});
ButtonColorPickerColor.storyName = "ButtonColorPicker initialColor";
ButtonColorPickerColor.args = {
	initialColor: {rgb: {r: 255, g:255, b: 0, a: 1} },
	handleChangeColor: action("onChange")
};
