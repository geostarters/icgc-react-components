// @flow

import React from "react";
import ChooseStyle from "./ChooseStyle";
import  { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Image } from "semantic-ui-react";

describe("ContainerChooseStyle Component", () => {

	const mockProps = {
		currentStyleId: 0,
		stylesList:[
			{
				"name": "Clar",
				"styleid": 0,
				"style": "https://geoserveis.icgc.cat/contextmaps/positron.json",
				"icon": "https://openicgc.github.io/img/positron.png"
			},
			{
				"name": "Orto",
				"styleid": 1,
				"style": "https://geoserveis.icgc.cat/contextmaps/hibrid.json",
				"icon": "https://openicgc.github.io/img/orto.png"
			}],
		handleClickStyle: jest.fn(),
		selectedColor: "#FF0000"

	};
	const component = shallow(<ChooseStyle {...mockProps}></ChooseStyle>);

	it("renders correct properties", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has only 2 list li elements", () => {

		expect(component.find("li")).toHaveLength(2);

	});

	it("has the correct color in the selected li element", () => {

		expect(component.find(Image).get(0).props.style).toHaveProperty("borderColor", mockProps.selectedColor);

	});

	it("calls the click handler after clicking a li element", () => {

		component.find("li").at(1).simulate("click");
		expect(mockProps.handleClickStyle).toBeCalled();

	});


});
