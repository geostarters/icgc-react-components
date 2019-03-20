//@flow

import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";
//import "../../setupTests";

describe("Button", () => {

	it("Expect to ", ()=> {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<Button {...mockProps}>OK</Button>);
		expect(component).toMatchSnapshot();
		expect(component.props().color).toEqual("teal");

	});

	it("button click should call Onclick Method", () => {
		
		const clickFn = jest.fn();

		const component = shallow(<Button onClick={clickFn} />);
		component
		  .find('button#my-button-two')
		  .simulate('click');
		expect(clickFn).toHaveBeenCalled();
	  });	

});
