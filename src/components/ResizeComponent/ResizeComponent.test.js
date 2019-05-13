//@flow

import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import ResizeComponent from "./ResizeComponent";

describe("ResizeComponent HOC Component", () => {

	const MockComponent = () => <div>Mock Component</div>;

	// eslint-disable-next-line new-cap
	const ResizeContainer = ResizeComponent(MockComponent);
	let component;

	beforeEach(() => {

		component = mount(<ResizeContainer>Testing Resize Component</ResizeContainer>);

	});

	afterEach(() => {

		component.unmount();

	});

	it("match the snapshot ", ()=> {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("passes the width prop to composed component ", ()=> {

		expect(component.find(MockComponent).props("width")).toBeDefined();

	});

});
