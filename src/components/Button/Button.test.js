//@flow

import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";
import "../../setupTests";

it("Expect to ", ()=> {

	const mockProps = {
		color: "teal"
	};

	const wrapper = shallow(<Button color="teal"></Button>);
	expect(wrapper.props().color).toEqual("teal");


});

