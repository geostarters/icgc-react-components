//@flow

import React from "react";

import { action } from "@storybook/addon-actions";

import TreeView from "./TreeView";

import "semantic-ui-css/semantic.min.css";

import treeData from "../../stories/treeData.json";

export default {
	title: "TreeView",
	component: TreeView
};

const Template = args => (<TreeView {...args}/>);

export const AnteriorISeguent = Template.bind({});
AnteriorISeguent.storyName = "TreeView";
AnteriorISeguent.args = {
	nodes: treeData,
	onClick: action("onClick")
};
