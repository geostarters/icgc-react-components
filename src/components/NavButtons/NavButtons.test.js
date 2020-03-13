//@flow

import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import NavButtons from "./NavButtons";
import { Button as ButtonSUI } from "semantic-ui-react";

describe("NavButtons", () => {

	it("match the snapshot ", () => {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<NavButtons {...mockProps}></NavButtons>);
		expect(toJSON(component)).toMatchSnapshot();

	});


	it("to have two buttons ", () => {

		const component = shallow(<NavButtons></NavButtons>);
		expect(component.find(ButtonSUI)).toHaveLength(2);

	});

	it("has prop named color = teal ", () => {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<NavButtons {...mockProps}></NavButtons>);
		const buttons = component.find(ButtonSUI);
		const button = buttons.at(0);
		expect("color" in button.props()).toEqual(true);
		expect(button.props().color).toEqual("teal");

	});

	it("it has a goPrevStep function that is called when click ", () => {

		const mockProps = {
			goPrevStep: jest.fn(),
			goNextStep: jest.fn()
		};

		const component = shallow(<NavButtons {...mockProps}></NavButtons>);
		const buttons = component.find(ButtonSUI);
		buttons.at(0).simulate("click");
		expect(mockProps.goPrevStep).toBeCalled();

	});


});
