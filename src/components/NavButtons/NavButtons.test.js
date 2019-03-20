//@flow

import { shallow } from "enzyme";
import React from "react";
import NavButtons from "./NavButtons";

describe("NavButtons", () => {

	it("Expect to ", ()=> {

		const mockProps = {
			color: "teal"
		};

		const component = shallow(<NavButtons {...mockProps}></NavButtons>);
		expect(component).toMatchSnapshot();


	});

});
