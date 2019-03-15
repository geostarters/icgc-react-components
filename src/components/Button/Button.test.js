//@flow

import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";
//import "../../setupTests";

describe("Button", () => {

	it("Expect to ", ()=> {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<Button color="teal"></Button>);
		expect(component).toMatchSnapshot();
		expect(component.props().color).toEqual("teal");


	});

});
