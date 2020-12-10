//@flow

import React from "react";
import { action } from "@storybook/addon-actions";

import ChooseStyle from "./ChooseStyle";

import "semantic-ui-css/semantic.min.css";

import styleList from "../../stories/styleList.json";

export default {
	title: "ChooseStyle",
	component: ChooseStyle
};

const Template = args => (<ChooseStyle {...args}/>);

export const _ChooseStyle = Template.bind({});
_ChooseStyle.storyName = "ChooseStyle";
_ChooseStyle.args = {
	stylesList: styleList
};

export const ChooseStyleSelected = Template.bind({});
ChooseStyleSelected.storyName = "ChooseStyle selected";
ChooseStyleSelected.args = {
	stylesList: styleList,
	currentStyleId: 0
};

export const ChooseStyleWithStyleAndAction = Template.bind({});
ChooseStyleWithStyleAndAction.storyName = "ChooseStyle with style and action";
ChooseStyleWithStyleAndAction.args = {
	stylesList: styleList,
	currentStyleId: 1,
	selectedColor: "#ff0000",
	labelColor: "#0000ff",
	handleClickStyle: action("onChange")
};
