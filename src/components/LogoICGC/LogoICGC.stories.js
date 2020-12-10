//@flow

import React from "react";

import LogoICGC from "./LogoICGC";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "Logo ICGC",
	component: LogoICGC
};

const Template = args => (<LogoICGC {...args}/>);

export const _LogoICGC = Template.bind({});
_LogoICGC.storyName = "Logo ICGC";

export const LogoIcgcPosition = Template.bind({});
LogoIcgcPosition.storyName = "Logo ICGC bottom-right";
LogoIcgcPosition.args = {
	position: "bottom-right"
};

export const LogoIcgcVersioAmbText = Template.bind({});
LogoIcgcVersioAmbText.storyName = "Logo ICGC versió amb text";
LogoIcgcVersioAmbText.args = {
	logoType: "icgc-logotxt"
};

export const LogoIcgcVersio2AmbText = Template.bind({});
LogoIcgcVersio2AmbText.storyName = "Logo ICGC versió 2 amb text";
LogoIcgcVersio2AmbText.args = {
	logoType: "icgc-logo2-text"
};

export const LogoIcgcVersio2BlancAmbText = args => (
	<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px", backgroundColor: "gray", padding: "10px", position: "relative"}}>
		<LogoICGC {...args}/>
	</div>
);
LogoIcgcVersio2BlancAmbText.storyName = "Logo ICGC versió 2 blanc amb text";
LogoIcgcVersio2BlancAmbText.args = {
	logoType: "icgc-logo-white-text",
	position: "top-left"
};

export const LogoIcgcAmbTextPropi = Template.bind({});
LogoIcgcAmbTextPropi.storyName = "Logo ICGC amb text propi";
LogoIcgcAmbTextPropi.args = {
	addText: "ICGC",
	position: "top-right"
};
