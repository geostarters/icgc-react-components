//@flow

import React from "react";

import { action } from "@storybook/addon-actions";

import NavButtons from "./NavButtons";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "NavButtons",
	component: NavButtons
};

const Template = args => (<NavButtons {...args}/>);

export const AnteriorISeguent = Template.bind({});
AnteriorISeguent.storyName = "Anterior i Seguent";
AnteriorISeguent.args = {
	goPrevStep: action("goPrevStep"),
	goNextStep: action("goNextStep")
};

export const AmbAmplada100 = Template.bind({});
AmbAmplada100.storyName = "Amb amplada 100%";
AmbAmplada100.args = {
	goPrevStep: action("goPrevStep"),
	goNextStep: action("goNextStep"),
	color: "teal",
	fullWidth: true,
	prevText: "Prev",
	nextText: "Next"
};

export const AmbAmplada100NextDisable = Template.bind({});
AmbAmplada100NextDisable.storyName = "Amb amplada 100% next disable";
AmbAmplada100NextDisable.args = {
	goPrevStep: action("goPrevStep"),
	goNextStep: action("goNextStep"),
	color: "teal",
	fullWidth: true,
	prevText: "Prev",
	nextText: "Next",
	disabledNext: true
};
