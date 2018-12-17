

// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Button as ButtonSUI } from "semantic-ui-react";

export default function Button(props) {

	console.log(props);

	var buttonProps = Object.assign({
		color: "yellow",
		onClick: function onClick() {
			return console.log("click");
		}
	}, props);

	return React.createElement(ButtonSUI, Object.assign({ primary: true }, buttonProps));
}