//@flow

import React from "react";

import Map from "./Map";

import * as CONSTANTS from "../../constants";

import "semantic-ui-css/semantic.min.css";

import mapDataRubi from "../../stories/mapDataRubi2.json";

export default {
	title: "Map",
	component: Map,
	parameters: {
		info:{
			text: "Cal afegir l'import de mapbox-gl.css",
		}
	}
};

const Template = args => (<Map {...args} style={{"height": "95vh"}}/>);

export const MapaFosc = Template.bind({});
MapaFosc.storyName = "Mapa Fosc";

export const MapaClar = Template.bind({});
MapaClar.storyName = "Mapa Clar";
MapaClar.args = {
	showNavControl: true,
	options: {"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style}
};

export const MapaOrto = Template.bind({});
MapaOrto.storyName = "Mapa Orto with logo";
MapaOrto.args = {
	showNavControl: true,
	showLogoControl: true,
	showAttribution: true,
	options: {"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[1].style}
};

export const MapaSostenibilitat = Template.bind({});
MapaSostenibilitat.storyName = "Mapa Sostenibilitat";
MapaSostenibilitat.args = {
	showNavControl: true,
	showAttribution: true,
	options: {"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style, "center": [2.0349243,  41.4971174], "zoom": 12, "attributionControl": false},
	mapData: mapDataRubi,

};
