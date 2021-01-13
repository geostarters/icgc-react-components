/* eslint-disable no-invalid-this */
//@flow

import React from "react";
import PropTypes from "prop-types";
import "semantic-ui-css/components/accordion.min.css";
import styled from "styled-components";
import "./TreeView.css";
import { Accordion, List, Checkbox } from "semantic-ui-react";
import _get from "lodash/get";
import _cloneDeep from "lodash/cloneDeep";

const TitleTooltipWrapper = styled.div` 
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 12px;
  padding-top: 9px;
`;

/**
 *  An accordion menu based on:
 *  React Semantic UI library,
 *  SemanticAccordionMenu by [Mosè Raguzzini](https://github.com/bionicvapourboy)
 *	react-checkbox-tree by [Jake Zatecky](https://jakezatecky.github.io/react-checkbox-tree)
 */
export default class TreeView extends React.PureComponent {

	state = {
		clicked: [],
		tree: [],
		checked: [],
		indeterminate: []
	};

	flatterNodes = {
		checked: [],
		indeterminate: [],
	}

	flatNodes = {};

	CheckModel = {
		ALL: "all",
		PARENT: "parent",
		LEAF: "leaf",
	}

	componentDidMount() {

		// Typical usage (don't forget to compare props):
		if (this.props.nodes) {

			const {checked, indeterminate} = this.createFlatterNodes(this.props.nodes);

			const tree = this.createTreeConfig(null, this.props.nodes, checked, indeterminate);

			this.setState({
				tree: this.decorateTitles(tree),
				checked,
				indeterminate
			});

		}

	}

	getNode(value) {

		return this.flatNodes[value];

	}

	nodeHasChildren = node => Array.isArray(node.childs)

	createFlatterNodes = (items, parent = {}, depth = 0) => {

		if (!Array.isArray(items) || items.length === 0) {

			return;

		}

		const {checked, indeterminate} = this.flatterNodes;

		items.forEach((item, index) => {

			const isParent = this.nodeHasChildren(item);

			this.flatNodes[item.id] = {
				id: item.id,
				childs: item.childs,
				parent,
				isChild: parent.id !== undefined,
				isParent,
				checked: item.checked,
				indeterminate: item.indeterminate,
				isLeaf: !isParent,
				index
			};

			if (item.checked) {

				checked.push(item.id);

			}
			if (item.indeterminate) {

				indeterminate.push(item.id);

			}
			this.createFlatterNodes(item.childs, item, depth + 1);

		});

		return {checked, indeterminate};

	}

	decorateTitles = tree => tree.map(branch => ({
		...branch,
		title:
		branch.sections || branch.content ?
			this.addTitleTooltip(branch.title, branch.id) :
			branch.title,
	}));

	/*
   	* Accordion custom theme
   	*/
	StyledAccordion = styled(Accordion)`
	background: transparent!important;

    .title {
      color: ${this.props.firstLevelFontColor}!important;
      .icon {
        margin-right: 11px;
      }
    }

    > .title, > .title.active, > .title:hover {
      border-bottom: 1px solid ${this.props.separatorColor} !important;
      background-color: ${this.props.firstLevelBackgroundColor}!important;
    }

    > .content.active {
      background: ${this.props.submenuBackgroundColor};
      border-bottom: 1px solid ${this.props.separatorColor} !important;
	}
	
    .accordion {
      background: transparent!important;
      color: ${this.props.submenuFontColor};
      .title {
        color: ${this.props.submenuFontColor}!important;
      }
	  background: rgba(255,255,255,.3);
    }

    .accordion .title .dropdown.icon,
    .title .dropdown.icon {
      float: right!important;
	}

	.contentWrapper, .itemWrapper {
		background-color: ${this.props.leafLevelBackgroundColor}
	}
	
	.contentWrapper label, .itemWrapper label {
		color: ${this.props.leafLevelFontColor}
	}

    .itemWrapper a {
      padding: 10px 12px 10px 16px;
      display: block;
      margin-right: 3px;
      margin-top: 2px;
    }

    .contentWrapper a {
      padding: 10px;
      padding-left: 10px;
      display: block;
      .icon{
        margin-right: 11px;
      }
    }

    .contentWrapper a.active, .itemWrapper a.active {
      background-color: ${this.props.activeColor}
    }
    
  `;

	/**
   	* Item style wrapper for custom accordions
   	*/
	ItemStyle = {
		display: "block",
		position: "relative",
		margin: "-12px -16px",
	};

	/**
   	* Content style wrapper for custom accordion.content
   	*/
	ContentStyle = {
		display: "block",
		position: "relative",
	};

	handleClickCheck = (e, data) => {

		const flatNode = this.flatNodes[data.id];
		const checked = [...this.state.checked];
		const indeterminate = [...this.state.indeterminate];

		const {checked: newChecked, indeterminate: newIndeterminate} = this.toggleChecked(flatNode, data.checked, true, checked, indeterminate);

		this.props.onClick(data);

		const tree = this.createTreeConfig(null, this.props.nodes, newChecked, newIndeterminate);

		this.setState({
			tree: this.decorateTitles(tree),
			checked: newChecked,
			indeterminate: newIndeterminate
		});

		e.stopPropagation();

	};

	toggleChecked = (data, isChecked, percolateUpward = true, checked, indeterminate) => {

		const node = this.flatNodes[data.id];
		const modelHasParents = node.isChild;
		const modelHasLeaves = node.isParent;

		checked = this.toggleNode(node.id, "checked", isChecked, checked);
		indeterminate = this.toggleNode(node.id, "indeterminate", false, indeterminate);

		if (modelHasLeaves) {

			node.childs.forEach((child) => {

				const {checked: newChecked, indeterminate: newIndeterminate} = this.toggleChecked(child, isChecked, false, checked, indeterminate);
				checked = newChecked;
				indeterminate = newIndeterminate;

			});

		}

		// Percolate check status up to parent
		if (percolateUpward && node.isChild && modelHasParents) {

			const {checked: newChecked, indeterminate: newIndeterminate} = this.toggleParentStatus(node.parent, checked, indeterminate);
			checked = newChecked;
			indeterminate = newIndeterminate;

		}

		return {checked, indeterminate};

	};

	toggleParentStatus(node, checked, indeterminate) {

		const flatNode = this.flatNodes[node.id];

		const allChecked = this.isEveryChildChecked(flatNode);
		let someChecked = this.isSomeChildChecked(flatNode);

		if (allChecked) {

			someChecked = false;

		}

		if (flatNode.isChild) {

			checked = this.toggleNode(node.id, "checked", allChecked, checked);
			indeterminate = this.toggleNode(node.id, "indeterminate", someChecked, indeterminate);

			const {checked: newChecked, indeterminate: newIndeterminate} = this.toggleParentStatus(flatNode.parent, checked, indeterminate);
			checked = newChecked;
			indeterminate = newIndeterminate;

		} else {

			checked = this.toggleNode(node.id, "checked", allChecked, checked);
			indeterminate = this.toggleNode(node.id, "indeterminate", someChecked, indeterminate);

		}

		return {checked, indeterminate};

	}

	toggleNode(nodeValue, key, toggleValue, values) {

		this.flatNodes[nodeValue][key] = toggleValue;

		const newVales = [...values];

		const index = newVales.indexOf(nodeValue);

		if (index > -1 && !toggleValue) {

			// If present remove it
			newVales.splice(index, 1);

		} else if (index === -1 && toggleValue) {

			// If not present create it
			newVales.push(nodeValue);

		}

		return newVales;

	}

	isEveryChildChecked(node) {

		const allChecked = node.childs.every(child => this.flatNodes[child.id].checked);

		return allChecked;

	}

	isSomeChildChecked(node) {

		const someChecked = node.childs.some(child => this.flatNodes[child.id].checked);

		return someChecked;

	}

	/**
   	* Transform to nodes array to a tree array format
   	*/
	createChildsConfig = (parentId, items, checked, indeterminate) => {

		const childsConfig = { type: "content", config: [] };

		const hasChilds = items.some(item => item.childs);

		if (hasChilds) {

			childsConfig.type = "sections";

			childsConfig.config = this.createTreeConfig(parentId, items, checked, indeterminate);

		} else {

			items.forEach((item) => {

				const isChecked = checked.indexOf(item.id) !== -1;

				childsConfig.config.push(
					<List.Item key={item.id}>
						<Checkbox
							id={item.id}
							onClick={this.handleClickCheck}
							checked={isChecked}
							label={item.label}
						></Checkbox>
					</List.Item>
				);

			});

		}

		return childsConfig;

	};

	createTreeConfig = (parentId, items, checked, indeterminate) => {

		const treeConfig = [];

		items.forEach((item) => {

			let itemConfig = {};

			const isChecked = checked.indexOf(item.id) !== -1;
			const isIndeterminate = indeterminate.indexOf(item.id) !== -1;

			if (item.childs) {

				const childsConfig = this.createChildsConfig(item.id, item.childs, checked, indeterminate);
				itemConfig = {
					id: item.id,
					title: [
						<Checkbox
							key={item.id}
							id={item.id}
							onClick={this.handleClickCheck}
							checked={isChecked}
							indeterminate={isIndeterminate}
							label=""
						></Checkbox>,
						item.label,
					],
				};
				itemConfig[childsConfig.type] = childsConfig.config;

			} else {

				itemConfig = {
					id: item.id,
					title: [
						<Checkbox
							key={item.id}
							id={item.id}
							onClick={this.handleClickCheck}
							checked={isChecked}
							label={item.label}
						></Checkbox>,
					]
				};

			}

			treeConfig.push(itemConfig);

		});

		return [...treeConfig];

	};

	/*
	* Wrapper for first level links
	*/
	itemWrapper = ({ title }) => ({
		children: (
			<div className="itemWrapper" style={this.ItemStyle}>
				{title}
			</div>
		),
	});

	/*
	* Wrapper for contents
	*/
	contentWrapper = el => ((el) ? (
		<div className="contentWrapper" style={this.ContentStyle}>
			{el}
		</div>
	) : null);

	addTitleTooltip = (title, id) => {

		const clonedTitle = _cloneDeep(title);
		if (title[0]) {

			clonedTitle[0] = (
				<TitleTooltipWrapper key={id} className="titleTooltipWrapper">
					{clonedTitle[0]}
				</TitleTooltipWrapper>
			);
			if (title[1]) {

				clonedTitle[1] = (
					<div key="wrapper" className="titleWrapper">
						{title[0]} <span className="titleString">{clonedTitle[1]}</span>
					</div>
				);

			}
			return clonedTitle;

		}
		return title;

	};

	/*
	* Panel generator
	*/
	getPanels = objs => objs.map((obj) => {

		const panel = {
			key: obj.id,
			id: obj.id,
			active: this.isActivePanel(obj),
			onTitleClick: () => this.onTitleClick(obj.id),
			title: (!obj.sections && !obj.content) ?
				this.itemWrapper({ title: obj.title, tooltip: obj.tooltip }) :
				obj.title,
		};

		if (this.getContent(obj)) {

			panel.content = { content: this.getContent(obj) };

		}

		return panel;

	});

	/*
	* Click handle on title to manage clicked elements in tree
	*/
	onTitleClick = (id) => {

		// Get the already clicked elements
		const clicked = [...this.state.clicked];
		// Check if the clicked element is present in array

		const index = clicked.indexOf(id);
		if (index > -1) {

			// If present remove it
			clicked.splice(index, 1);
			this.setState({ clicked });

		} else {

			// If not present create it
			clicked.push(id);
			this.setState({ clicked });

		}

	};

	/*
	* Check wheter a panel is active or not based either on route
	* and if the element has beeen clicked
	*/
	isActivePanel = (obj) => {

		// Default result
		const result = false;

		// Checks if the object has been clicked
		if (this.state.clicked.indexOf(obj.id) > -1) {

			return !result;

		} else {

			return result;

		}

	};

	/*
	* Generate subaccordions
	*/
	getContent = obj => (Array.isArray(_get(obj, "sections")) ? (
		<Accordion.Accordion panels={this.getPanels(obj.sections || null)} />
	) : (
		this.contentWrapper(obj.content)
	));

	render() {

		const StyledAccordion = this.StyledAccordion;

		return (
			<div
				style={{
					width: !this.props.collapsed ?
						this.props.width :
						this.props.collapsedWidth,
					fontSize: this.props.fontSize,
				}}
				className={`accordion-menu${this.props.collapsed ? " collapsed" : ""}`}
			>
				<StyledAccordion
					panels={this.getPanels(this.state.tree)}
					styled
				/>
			</div>
		);

	}

}

TreeView.propTypes = {
	/** An Array containing the configuration for menu tree */
	nodes: PropTypes.array,
	/** Callback function checkbox click */
	onClick: PropTypes.func,
	/** Menu font size, default 13px */
	fontSize: PropTypes.number,
	/** Menu width, default 100% */
	width: PropTypes.string,
	/** SubMenu active content background color, default #ffffff */
	submenuBackgroundColor: PropTypes.string,
	/** SubMenu font color, default #000000 */
	submenuFontColor: PropTypes.string,
	/** SubMenu separator color, default #cccccc */
	separatorColor: PropTypes.string,
	/** Active color */
	activeColor: PropTypes.string,
	/** First level color */
	firstLevelBackgroundColor: PropTypes.string,
	/** First level font color */
	firstLevelFontColor: PropTypes.string,
	/** Leaf level color */
	leafLevelBackgroundColor: PropTypes.string,
	/** Leaf level font color */
	leafLevelFontColor: PropTypes.string,
	/** Collapsed menu */
	collapsed: PropTypes.bool,
	/** Collapsed menu width, default 39  */
	collapsedWidth: PropTypes.number,
	/** Open menu function */
	openMenu: PropTypes.func,
};

TreeView.defaultProps = {
	nodes: [],
	fontSize: 13,
	width: "100%",
	submenuBackgroundColor: "#ffffff",
	submenuFontColor: "#000000",
	separatorColor: "#cccccc",
	activeColor: "#266bc0",
	firstLevelBackgroundColor: "#ffffff",
	firstLevelFontColor: "#000000",
	leafLevelBackgroundColor: "#ffffff",
	leafLevelFontColor: "#000000",
	collapsed: false,
	collapsedWidth: 39,
	onClick: () => {}
};
