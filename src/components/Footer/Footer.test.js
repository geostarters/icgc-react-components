// @flow

import React from "react";
import Footer from "./Footer";
import  { mount } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Footer Component", () => {

	it("renders correct properties", () => {

		const mockProps = {
			title: "Title",
			width: 1000,
			showRightElements: true
		};

		const component = mount(<Footer {...mockProps}></Footer>);

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("renders without image for mobile", () => {

		const mockProps = {
			title: "Title",
			width: 400,
			showRightElements: false,
			pathLogo:"https://bolollo.github.io/MapaRegEscPNMM/logo_generalitat_gris.dca7d39f.png"
		};
		const component = mount(<Footer {...mockProps}></Footer>);

		expect((component.find("img"))).toHaveLength(0);

	});

});
