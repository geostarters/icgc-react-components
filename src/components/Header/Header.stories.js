//@flow

import React from "react";
import LogoICGC from "../LogoICGC/LogoICGC";

import Header from "./Header";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "Header",
	component: Header
};

const Template = args => (<Header {...args}/>);

export const _Header = Template.bind({});
_Header.storyName = "Header";

export const Header2Logos = args => (<Header {...args}>
	<div>
		<LogoICGC />
	</div>
</Header>);
Header2Logos.storyName = "Header 2 logos";
Header2Logos.args = {
	title:"VERSIÓ BETA",
	pathLogo: "https://eines.icgc.cat/contextmaps/static/media/CONTEXTMAPS_LOGO_2019.dc127f4a.svg",
	logoSize: "medium",
	customStyleBar: {backgroundColor: "#0064af", color: "#fff"},
	showRightElements: true,
	customStyleLogo: {maxWidth: "15em"}
};
