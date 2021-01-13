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

export const Tree = Template.bind({});
Tree.storyName = "TreeView";
Tree.args = {
	nodes: treeData,
	onClick: action("onClick")
};

export const TreeStyled = Template.bind({});
TreeStyled.storyName = "TreeView style";
TreeStyled.args = {
	nodes: treeData,
	submenuFontColor: "#0000ff",
	firstLevelFontColor: "#ff0000",
	leafLevelFontColor: "#00ff00",
	onClick: action("onClick")
};
