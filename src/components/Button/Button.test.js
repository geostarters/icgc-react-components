//@flow

import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import Button from "./Button";

describe("Button component", () => {

	const mockProps = {
		color: "teal",
		onClick: jest.fn()
	};
	const component = shallow(<Button {...mockProps}>OK</Button>);

	it("to match the snapshot ", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has color prop = teal ", () => {

		expect(component.props().color).toEqual("teal");

	});

	it("has a prop function called on click", () => {

		component.simulate("click");
		expect(mockProps.onClick).toBeCalled();

	});


});
