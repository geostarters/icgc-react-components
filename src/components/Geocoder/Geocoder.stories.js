//@flow

import React from "react";
import { action } from "@storybook/addon-actions";

import Geocoder from "./Geocoder";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "Geocoder",
	component: Geocoder
};

const Template = args => (<Geocoder {...args}/>);

export const _Geocoder = Template.bind({});
_Geocoder.storyName = "Geocoder";

export const GeocoderNoLayer = Template.bind({});
GeocoderNoLayer.storyName = "Geocoder no layer";
GeocoderNoLayer.args = {
	showLayer: false
};

export const GeocoderLayersMunYCom = Template.bind({});
GeocoderLayersMunYCom.storyName = "Geocoder layers mun y com";
GeocoderLayersMunYCom.args = {
	layers: ["mun", "com"]
};

export const GeocoderMaxresults3 = Template.bind({});
GeocoderMaxresults3.storyName = "Geocoder maxresults 3";
GeocoderMaxresults3.args = {
	maxResults: 3
};

export const GeocoderSelectResultAction = Template.bind({});
GeocoderSelectResultAction.storyName = "Geocoder select result action";
GeocoderSelectResultAction.args = {
	handleResultSelect: action("handleResultSelect")
};

export const GeocoderAutocompleteFalse = Template.bind({});
GeocoderAutocompleteFalse.storyName = "Geocoder autocomplete false";
GeocoderAutocompleteFalse.args = {
	autocomplete: false
};

export const GeocoderCustomStyle = Template.bind({});
GeocoderCustomStyle.storyName = "Geocoder custom style";
GeocoderCustomStyle.args = {
	resultTextStyle: {color: "#c00000", fontSize: 13},
	resultLayerTextStyle: {color: "#666666", fontSize: 11, fontWeight: 100, fontStyle: "italic"}
};
