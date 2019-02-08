//@flow

import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";
import "../../setupTests";

it("Expect to ", ()=> {

	expect(shallow(<Button></Button>).length).toMatchSnapshot();

});

