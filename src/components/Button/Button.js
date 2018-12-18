//@flow

import React from "react";
import { Button as ButtonSUI } from "semantic-ui-react";

export default function Button(props) {

	console.log(props);

	const buttonProps = {
		color: "yellow",
		onClick: ()=>console.log("click"),
		...props
	};

	return (<ButtonSUI primary {...buttonProps}></ButtonSUI>);

}
