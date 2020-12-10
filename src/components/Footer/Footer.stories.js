//@flow

import React from "react";

import Footer from "./Footer";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "Footer",
	component: Footer
};

const Template = args => (<Footer {...args}/>);

export const _Footer = Template.bind({});
_Footer.storyName = "Footer";

export const FooterCustomStyle = Template.bind({});
FooterCustomStyle.storyName = "Footer custom style";
FooterCustomStyle.args = {
	title:"Styled",
	customStyleBar: {backgroundColor: "#ccc", color: "#999", position: "relative"}
};

export const FooterLogo = Template.bind({});
FooterLogo.storyName = "Footer logo";
FooterLogo.args = {
	title:"VERSIÓ BETA",
	pathLogo: "https://bolollo.github.io/MapaRegEscPNMM/logo_generalitat_gris.dca7d39f.png",
	logoSize: "small",
	customStyleBar: {backgroundColor: "#ccc", color: "#999"},
	customStyleLogo: {maxWidth: "7em"}
};

export const Footer2Columns = args => (<Footer {...args}>
	<div>
		Test footer
	</div>
</Footer>);
Footer2Columns.storyName = "Footer 2 columns";
Footer2Columns.args = {
	title:"VERSIÓ BETA",
	showRightElements: true
};

export const FooterLogo2Columns = args => (<Footer {...args}>
	<div>
		Test footer
	</div>
</Footer>);
FooterLogo2Columns.storyName = "Footer logo 2 columns";
FooterLogo2Columns.args = {
	title:"VERSIÓ BETA",
	pathLogo: "https://bolollo.github.io/MapaRegEscPNMM/logo_generalitat_gris.dca7d39f.png",
	logoSize: "small",
	customStyleBar: {backgroundColor: "#ccc", color: "#999"},
	customStyleLogo: {maxWidth: "7em"},
	showRightElements: true
};
