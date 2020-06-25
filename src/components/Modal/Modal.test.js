// @flow

import React from "react";
import { Button } from "semantic-ui-react";
import Modal from "./Modal";
import  { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Modal Component", () => {

	const mockProps = {
		headertitle: "Hola",
		open: true,
		actionbuttons: [
			{label: "No", color: "red", handler: jest.fn(), icon: "remove"},
			{label: "Sí", color: "green", handler: jest.fn(), icon: "check" }
		]
	};

	const component = shallow(<Modal {...mockProps}></Modal>);

	it("renders correct properties", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("renders with a class named modals", () => {

		const mockProps = {
			open: true,
		};
		const component = mount(<Modal {...mockProps}></Modal>);
		expect(component.find(".modals")).toHaveLength(1);
		component.unmount();

	});

	it("has 2 Buttons elements", () => {

		expect(component.find(Button)).toHaveLength(2);

	});

});
