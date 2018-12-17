//@flow
// src/stories/index.js

// eslint-disable-next-line no-unused-vars
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

// eslint-disable-next-line no-unused-vars
import Map from "../components/Map/Map";
// eslint-disable-next-line no-unused-vars
import Button from "../components/Button/Button";
// eslint-disable-next-line no-unused-vars
import NavButtons from "../components/NavButtons/NavButtons";

import "semantic-ui-css/semantic.min.css";

storiesOf("Button", module)
	.addDecorator(withInfo)
	.add("Ok button", () => (<Button content="OK"/>))

	.add("Icon button", () => (<Button icon="sign-in"/>))

	.add("Cancel button", () => (
		<Button color="red" content="Cancel"/>
	)
	);

storiesOf("NavButtons", module)
	.addDecorator(withInfo)
	.add("Anterior i Seguent", () => (
		<NavButtons color="teal" goPrevStep={()=>console.log("goPrevStep")} goNextStep={()=>console.log("goPrevStep")} content="OK"/>
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
