// @flow

import React from "react";
import  { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import ButtonNipple from "./ButtonNipple";
import ReactNipple from "@geostarters/react-nipple";

describe("ButtonNipple Component", () => {

	const buttonNippleProps = {
		handleChangeAngle: jest.fn(),
		handleChangeAngleDef: jest.fn(),
		angle: {
			degree: 315,
			exaggeration: 1
		},
		index: 0
	};

	const component = shallow(<ButtonNipple {...buttonNippleProps}></ButtonNipple>);

	it("renders correct properties", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has a element with swatch class", () => {

		expect(component.find(".swatch")).toHaveLength(1);

	});

	it("shows ButtonNipple after click", () => {

		component.find(".swatch").simulate("click");
		expect(component.state("displayNipplePicker")).toBeTruthy();

	});

	it("call handle function after changing angle", () => {

		component.find(ReactNipple).simulate("move", {degree: 180, exaggeration: 0.4});
		expect(buttonNippleProps.handleChangeAngle).toBeCalled();

	});

	it("call handle function after close", () => {

		component.find(".cover").simulate("click", {traget: {}});
		expect(buttonNippleProps.handleChangeAngleDef).toBeCalled();

	});

});
