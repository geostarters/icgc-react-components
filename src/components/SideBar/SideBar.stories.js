//@flow

import React from "react";

import TreeView from "../TreeView/TreeView";

import SideBar from "./SideBar";

import treeData from "../../stories/treeData.json";

import "semantic-ui-css/semantic.min.css";

export default {
	title: "SideBar",
	component: SideBar
};

const Template = args => (<SideBar {...args}/>);

export const _SideBar = Template.bind({});
_SideBar.storyName = "SideBar";

export const SideBarClose = Template.bind({});
SideBarClose.storyName = "SideBar close";
SideBarClose.args = {
	showInitial: false
};

export const SideBarWithTreeview = args => (<SideBar {...args}><TreeView nodes={treeData}></TreeView></SideBar>);
SideBarWithTreeview.storyName = "SideBar with treeview";
