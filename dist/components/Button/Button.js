import React from "react";
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