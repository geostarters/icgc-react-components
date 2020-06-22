// @flow

import React from "react";
import { Button } from "semantic-ui-react";
import SideBar from "./SideBar";
import  { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

describe("SideBar Component", () => {

	const component = shallow(<SideBar></SideBar>);

	it("renders correct properties", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("renders initially with class movein", () => {

		expect(component.hasClass("movein")).toBeTruthy();

	});

	it("has class moveout after click on button and show is false", () => {

		component.find(Button).simulate("click");
		expect(component.state("show")).toEqual(false);
		expect(component.hasClass("moveout")).toBeTruthy();

	});

});
