
// src/stories/index.js

// eslint-disable-next-line no-unused-vars
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import * as CONSTANTS from "../constants";
// eslint-disable-next-line no-unused-vars
import Map from "../components/Map/Map";
// eslint-disable-next-line no-unused-vars
import Button from "../components/Button/Button";
// eslint-disable-next-line no-unused-vars
import NavButtons from "../components/NavButtons/NavButtons";
// eslint-disable-next-line no-unused-vars
import LogoICGC from "../components/LogoICGC/LogoICGC";

/* import "./ICGC_logo.svg";
import "./ICGC.svg"; */

import "semantic-ui-css/semantic.min.css";

storiesOf("Button", module).addDecorator(withInfo).add("Ok button", function () {
	return React.createElement(Button, { content: "OK" });
}).add("Icon button", function () {
	return React.createElement(Button, { icon: "sign-in" });
}).add("Basic button", function () {
	return React.createElement(Button, { basic: true, content: "Basic" });
}).add("Cancel button", function () {
	return React.createElement(Button, { color: "red", content: "Cancel" });
});

storiesOf("NavButtons", module).addDecorator(withInfo).add("Anterior i Seguent", function () {
	return React.createElement(NavButtons, { color: "teal", goPrevStep: function goPrevStep() {
			return console.log("goPrevStep");
		}, goNextStep: function goNextStep() {
			return console.log("goPrevStep");
		}, content: "OK" });
}).add("amb amplada 100%", function () {
	return React.createElement(NavButtons, { color: "teal", fullWidth: true, goPrevStep: function goPrevStep() {
			return console.log("goPrevStep");
		}, goNextStep: function goNextStep() {
			return console.log("goPrevStep");
		}, content: "OK" });
});

storiesOf("Map", module).addDecorator(withInfo)
//.addDecorator(withStorySource("import React from 'react'\nimport { storiesOf } from '@storybook/react';\nimport { withStorySource } from '@storybook/addon-storysource'\n\nstoriesOf('Button', module)\n  .add('with some emoji', () => (\n    <Button>😀 😎 👍 💯</Button>\n  ));"))
.add("Mapa Fosc", function () {
	return React.createElement(Map, null);
}, {
	info: {
		text: "Cal afegir l'import de mapbox-gl.css"
	}

}).add("Mapa Clar", function () {
	return React.createElement(Map, { options: { "style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[0].style } });
}, {
	info: {
		text: "Cal afegir l'import de mapbox-gl.css"
	}

}).add("Mapa Orto", function () {
	return React.createElement(Map, { options: { "style": CONSTANTS.DEFAULT_ICGC_BACKGROUNDS[1].style } });
}, {
	info: {
		text: "Cal afegir l'import de mapbox-gl.css"
	}

});

storiesOf("Logo ICGC", module).addDecorator(withInfo).add("Logo ICGC", function () {
	return React.createElement(
		"div",
		{ style: { borderBottom: "2px solid gray", width: "100%", height: "200px" } },
		React.createElement(LogoICGC, null)
	);
}).add("Logo ICGC versió amb text", function () {
	return React.createElement(
		"div",
		{ style: { borderBottom: "2px solid gray", width: "100%", height: "200px" } },
		React.createElement(LogoICGC, { logoType: "icgc-logotxt" })
	);
}).add("Logo ICGC top left", function () {
	return React.createElement(
		"div",
		{ style: { borderBottom: "2px solid gray", width: "100%", height: "200px" } },
		React.createElement(LogoICGC, { position: "top-left" })
	);
}).add("Logo ICGC amb text propi", function () {
	return React.createElement(
		"div",
		{ style: { borderBottom: "2px solid gray", width: "100%", height: "200px" } },
		React.createElement(LogoICGC, { addText: "ICGC" })
	);
});