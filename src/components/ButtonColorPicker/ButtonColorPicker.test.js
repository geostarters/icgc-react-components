// @flow

import React from "react";
import ButtonColorPicker from "./ButtonColorPicker";
import  { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { ChromePicker } from "react-color";

describe("ButtonColorPicker Component", () => {

	const buttonColorPickerProps = {
		initialColor: {rgb: {r: 255, g:255, b: 0, a: 1} },
		index: 0,
		handleChangeColor: jest.fn()
	};
	const component = shallow(<ButtonColorPicker {...buttonColorPickerProps}></ButtonColorPicker>);

	it("renders correct properties", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has a element with  swatch class", () => {

		expect(component.find(".swatch")).toHaveLength(1);

	});

	it("has the correct color in the element", () => {

		const { initialColor: color } = buttonColorPickerProps;
		expect(component.find(".swatch").find(".color").get(0).props.style).toHaveProperty("background", `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`);

	});

	it("shows ColorPicker after click", () => {

		component.find(".swatch").simulate("click");
		expect(component.state("displayColorPicker")).toBeTruthy();

	});

	it("call handle function after changing color", () => {

		component.find(ChromePicker).simulate("change", {rgb: {r: 255, g:255, b: 0, a: 1}});
		expect(buttonColorPickerProps.handleChangeColor).toBeCalled();

	});

});
