//@flow

import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";
//import "../../setupTests";

describe("NavButtons", () => {

	it("Expect to ", ()=> {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<Button {...mockProps}>OK</Button>);
		expect(component).toMatchSnapshot();
		expect(component.props().color).toEqual("teal");

	});

});