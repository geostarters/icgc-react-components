//@flow
// src/stories/index.js

import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';

import Map from "../components/Map/Map";
import Button from "../components/Button/Button";
import NavButtons from "../components/NavButtons/NavButtons";

import "semantic-ui-css/semantic.min.css";

storiesOf("Button", module)
	.addDecorator(withInfo)
	.add("Ok button", () => (<Button content="OK"/>))

	.add("Cancel button", () => (
		<Button color="teal" content="Cancel"/>
	));

storiesOf("NavButtons", module)
	.addDecorator(withInfo)
	.add("Anterior i Seguent", () => (
		<NavButtons color="yellow" goPrevStep={()=>console.log("goPrevStep")} goNextStep={()=>console.log("goPrevStep")} content="OK"/>
	)
);

storiesOf("Map", module)
	.addDecorator(withInfo)
	//.addDecorator(withStorySource("import React from 'react'\nimport { storiesOf } from '@storybook/react';\nimport { withStorySource } from '@storybook/addon-storysource'\n\nstoriesOf('Button', module)\n  .add('with some emoji', () => (\n    <Button>😀 😎 👍 💯</Button>\n  ));"))
	.add(
		"Afegir Mapa",
		() => <Map style={{ width: "100%", height: "100vh"}}></Map>,
		{
			info:{
				text: "Cal afegir l'import de mapbox-gl.css",
			}

		}
	);
