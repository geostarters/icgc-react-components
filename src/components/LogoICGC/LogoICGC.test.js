// @flow

import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import LogoICGC from "./LogoICGC";


describe("LogoICGC component", () =>{

	it("matches the snapshot ", ()=>{

		const component = shallow(<LogoICGC></LogoICGC>);
		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has logotype = icgc-logotxt", ()=>{

		const component = shallow(<LogoICGC logoType="icgc-logotxt"></LogoICGC>);
		expect(component.find("a").hasClass("icgc-logotxt")).toEqual(true);

	});

});

