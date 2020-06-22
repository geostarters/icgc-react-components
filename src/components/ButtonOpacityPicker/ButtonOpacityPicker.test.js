// @flow

import React from "react";
import ButtonOpacityPicker from "./ButtonOpacityPicker";
import  { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { AlphaPicker } from "react-color";

describe("ButtonOpacityPicker Component", () => {

	const buttonOpacityPickerProps = {
		opacity: 1,
		index: 0,
		handleChangeOpacity: jest.fn()
	};
	const component = shallow(<ButtonOpacityPicker {...buttonOpacityPickerProps}></ButtonOpacityPicker>);

	it("renders correct properties", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has a element with  swatch class", () => {

		expect(component.find(".swatch")).toHaveLength(1);

	});

	it("has the correct opacity in the element", () => {

		expect(component.find(".swatch").find(".color").get(1).props.style).toHaveProperty("background", "rgba(255, 255, 255, 0)");

	});

	it("shows OpacityPicker after click", () => {

		component.find(".swatch").simulate("click");
		expect(component.state("displayAlphaPicker")).toBeTruthy();

	});

	it("call handle function after changing color", () => {

		component.find(AlphaPicker).simulate("change", {rgb: {r: 255, g:255, b: 0, a: 0.5}});
		expect(buttonOpacityPickerProps.handleChangeOpacity).toBeCalled();

	});

});
