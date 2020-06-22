// @flow

import React from "react";
import  { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import TreeView from "./TreeView";
import { Checkbox } from "semantic-ui-react";

describe("TreeView Component", () => {

	const treeViewProps = {
		nodes: [
			{id: 1, label: "Frutas", checked: false, indeterminate: true, childs: [
				{id: 11, label: "Manzanas", checked: false},
				{id: 12, label: "Naranjas", checked: false, indeterminate: false, childs: [
					{id: 121, label: "Navelina", checked: false},
					{id: 122, label: "Dulce", checked: false},
					{id: 123, label: "Sanrgreta", checked: false},
				]},
				{id: 13, label: "Peras", checked: true}
			]},
			{id: 2, label: "Verduras", checked: true},
			{id: 3, label: "Helados", checked: false, indeterminate: true, childs: [
				{id: 31, label: "Magnun", checked: true},
				{id: 32, label: "Calipo", checked: false},
				{id: 33, label: "Batibati", checked: true},
				{id: 34, label: "chipichupi", checked: false}]
			}
		],
		onClick: jest.fn()
	};

	const component = mount(<TreeView {...treeViewProps}></TreeView>);

	it("renders correct properties", () => {

		expect(toJSON(component)).toMatchSnapshot();

	});

	it("has a element with accordion-menu class", () => {

		expect(component.find(".accordion-menu")).toHaveLength(1);

	});

	it("has 6 elements with titles class", () => {

		expect(component.find(".title")).toHaveLength(6);

	});

	it("call handle function after checkbox click", () => {

		const wrapper = shallow(component.find(Checkbox).get(0));
		wrapper.simulate("click", { stopPropagation() {} });
		expect(treeViewProps.onClick).toBeCalled();

	});

});
