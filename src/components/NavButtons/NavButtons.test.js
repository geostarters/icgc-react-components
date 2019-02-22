//@flow

import { shallow } from "enzyme";
import React from "react";
import NavButtons from "./NavButtons";
import "../../setupTests";

it("Expect to ", ()=> {

	const mockProps = {
		color: "teal"
	};

    

    const wrapper = shallow(<NavButtons ></NavButtons>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toEqual(1);
	//expect(wrapper.props().fullWidth).toEqual(true);


});