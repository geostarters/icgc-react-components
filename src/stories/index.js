//@flow
// src/stories/index.js

// eslint-disable-next-line no-unused-vars
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import * as CONSTANTS from "../constants";
// eslint-disable-next-line no-unused-vars
import Map from "../components/Map/Map";
import Button from "../components/Button/Button";
// eslint-disable-next-line no-unused-vars
import NavButtons from "../components/NavButtons/NavButtons";
// eslint-disable-next-line no-unused-vars
import LogoICGC from "../components/LogoICGC/LogoICGC";

import mapDataRubi from "./mapDataRubi.json";

import "semantic-ui-css/semantic.min.css";

storiesOf("Button", module)
	.addDecorator(withInfo)
	.add("Ok button", () => (<Button content="OK"/>))

	.add("Icon button", () => (<Button icon="sign-in"/>))
	.add("Basic button", () => (<Button basic={true} content="Basic"/>))
	.add("Cancel button", () => (
		<Button color={"red"} content="Cancel"/>
	)
	);

storiesOf("NavButtons", module)
	.addDecorator(withInfo)
	.add("Anterior i Seguent", () => (
		<NavButtons color="teal" goPrevStep={() => console.log("goPrevStep")} goNextStep={() => console.log("goPrevStep")} content="OK"/>
	))
	.add("amb amplada 100%", () => (
		<NavButtons color="teal" fullWidth={true} goPrevStep={() => console.log("goPrevStep")} goNextStep={() => console.log("goPrevStep")} content="OK"/>
	));

storiesOf("Logo ICGC", module)
	.addDecorator(withInfo)
	.add("Logo ICGC", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC/>
		</div>
	)).add("Logo ICGC versió amb text", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC logoType="icgc-logotxt"/>
		</div>
	)).add("Logo ICGC top left", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC position="top-left"/>
		</div>
	)).add("Logo ICGC amb text propi", () => (
		<div style={{borderBottom: "2px solid gray", width: "100%", height: "200px"}}>
			<LogoICGC addText="ICGC"/>
		</div>
	));

storiesOf("Map", module)
	.addDecorator(withInfo)
	.add(
		"Mapa Fosc",
		() => <Map style={{"height": "100vh"}} ></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	).add(
		"Mapa Clar",
		() => <Map style={{"height": "100vh"}} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style}}></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	).add(
		"Mapa Orto",
		() => <Map showAttribution={true} style={{"height": "100vh"}} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[1].style}}></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	).add(
		"Mapa Sostenibilitat",
		() => <Map showAttribution={true} style={{"height": "100vh"}} mapData={mapDataRubi} options={{"style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style, "center": [2.0349243,  41.4971174], "zoom": 12, "attributionControl": false}}></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	);
