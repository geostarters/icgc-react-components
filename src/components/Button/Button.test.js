//@flow

import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import Button from "./Button";

describe("Button component", () => {

	it("to match the snapshot ", () => {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<Button {...mockProps}>OK</Button>);
		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has color prop = teal ", () => {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<Button {...mockProps}>OK</Button>);
		expect(component.props().color).toEqual("teal");

	});

	it("has a prop function called on click", () => {

		const mockProps = {
			onClick: jest.fn()
		};

		const component = shallow(<Button {...mockProps}>OK</Button>);
		component.simulate("click");
		expect(mockProps.onClick).toBeCalled();

	});


});
