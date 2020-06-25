"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("semantic-ui-css/components/accordion.min.css");

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("./TreeView.css");

var _semanticUiReact = require("semantic-ui-react");

var _get2 = _interopRequireDefault(require("lodash/get"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/* eslint-disable no-invalid-this */


const TitleTooltipWrapper = _styledComponents.default.div` 
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

class TreeView extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      clicked: [],
      tree: [],
      checked: [],
      indeterminate: []
    });

    _defineProperty(this, "flatterNodes", {
      checked: [],
      indeterminate: []
    });

    _defineProperty(this, "flatNodes", {});

    _defineProperty(this, "CheckModel", {
      ALL: "all",
      PARENT: "parent",
      LEAF: "leaf"
    });

    _defineProperty(this, "nodeHasChildren", node => Array.isArray(node.childs));

    _defineProperty(this, "createFlatterNodes", (items, parent = {}, depth = 0) => {
      if (!Array.isArray(items) || items.length === 0) {
        return;
      }

      const {
        checked,
        indeterminate
      } = this.flatterNodes;
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
      return {
        checked,
        indeterminate
      };
    });

    _defineProperty(this, "decorateTitles", tree => tree.map(branch => ({ ...branch,
      title: branch.sections || branch.content ? this.addTitleTooltip(branch.title, branch.id) : branch.title
    })));

    _defineProperty(this, "StyledAccordion", (0, _styledComponents.default)(_semanticUiReact.Accordion)`
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
    
  `);

    _defineProperty(this, "ItemStyle", {
      display: "block",
      position: "relative",
      margin: "-12px -16px"
    });

    _defineProperty(this, "ContentStyle", {
      display: "block",
      position: "relative"
    });

    _defineProperty(this, "handleClickCheck", (e, data) => {
      const flatNode = this.flatNodes[data.id];
      const checked = [...this.state.checked];
      const indeterminate = [...this.state.indeterminate];
      const {
        checked: newChecked,
        indeterminate: newIndeterminate
      } = this.toggleChecked(flatNode, data.checked, true, checked, indeterminate);
      this.props.onClick(data);
      const tree = this.createTreeConfig(null, this.props.nodes, newChecked, newIndeterminate);
      this.setState({
        tree: this.decorateTitles(tree),
        checked: newChecked,
        indeterminate: newIndeterminate
      });
      e.stopPropagation();
    });

    _defineProperty(this, "toggleChecked", (data, isChecked, percolateUpward = true, checked, indeterminate) => {
      const node = this.flatNodes[data.id];
      const modelHasParents = node.isChild;
      const modelHasLeaves = node.isParent;
      checked = this.toggleNode(node.id, "checked", isChecked, checked);
      indeterminate = this.toggleNode(node.id, "indeterminate", false, indeterminate);

      if (modelHasLeaves) {
        node.childs.forEach(child => {
          const {
            checked: newChecked,
            indeterminate: newIndeterminate
          } = this.toggleChecked(child, isChecked, false, checked, indeterminate);
          checked = newChecked;
          indeterminate = newIndeterminate;
        });
      } // Percolate check status up to parent


      if (percolateUpward && node.isChild && modelHasParents) {
        const {
          checked: newChecked,
          indeterminate: newIndeterminate
        } = this.toggleParentStatus(node.parent, checked, indeterminate);
        checked = newChecked;
        indeterminate = newIndeterminate;
      }

      return {
        checked,
        indeterminate
      };
    });

    _defineProperty(this, "createChildsConfig", (parentId, items, checked, indeterminate) => {
      const childsConfig = {
        type: "content",
        config: []
      };
      const hasChilds = items.some(item => item.childs);

      if (hasChilds) {
        childsConfig.type = "sections";
        childsConfig.config = this.createTreeConfig(parentId, items, checked, indeterminate);
      } else {
        items.forEach(item => {
          const isChecked = checked.indexOf(item.id) !== -1;
          childsConfig.config.push(_react.default.createElement(_semanticUiReact.List.Item, {
            key: item.id
          }, _react.default.createElement(_semanticUiReact.Checkbox, {
            id: item.id,
            onClick: this.handleClickCheck,
            checked: isChecked,
            label: item.label
          })));
        });
      }

      return childsConfig;
    });

    _defineProperty(this, "createTreeConfig", (parentId, items, checked, indeterminate) => {
      const treeConfig = [];
      items.forEach(item => {
        let itemConfig = {};
        const isChecked = checked.indexOf(item.id) !== -1;
        const isIndeterminate = indeterminate.indexOf(item.id) !== -1;

        if (item.childs) {
          const childsConfig = this.createChildsConfig(item.id, item.childs, checked, indeterminate);
          itemConfig = {
            id: item.id,
            title: [_react.default.createElement(_semanticUiReact.Checkbox, {
              key: item.id,
              id: item.id,
              onClick: this.handleClickCheck,
              checked: isChecked,
              indeterminate: isIndeterminate,
              label: ""
            }), item.label]
          };
          itemConfig[childsConfig.type] = childsConfig.config;
        } else {
          itemConfig = {
            id: item.id,
            title: [_react.default.createElement(_semanticUiReact.Checkbox, {
              key: item.id,
              id: item.id,
              onClick: this.handleClickCheck,
              checked: isChecked,
              label: item.label
            })]
          };
        }

        treeConfig.push(itemConfig);
      });
      return [...treeConfig];
    });

    _defineProperty(this, "itemWrapper", ({
      title
    }) => ({
      children: _react.default.createElement("div", {
        className: "itemWrapper",
        style: this.ItemStyle
      }, title)
    }));

    _defineProperty(this, "contentWrapper", el => el ? _react.default.createElement("div", {
      className: "contentWrapper",
      style: this.ContentStyle
    }, el) : null);

    _defineProperty(this, "addTitleTooltip", (title, id) => {
      const clonedTitle = (0, _cloneDeep2.default)(title);

      if (title[0]) {
        clonedTitle[0] = _react.default.createElement(TitleTooltipWrapper, {
          key: id,
          className: "titleTooltipWrapper"
        }, clonedTitle[0]);

        if (title[1]) {
          clonedTitle[1] = _react.default.createElement("div", {
            key: "wrapper",
            className: "titleWrapper"
          }, title[0], " ", _react.default.createElement("span", {
            className: "titleString"
          }, clonedTitle[1]));
        }

        return clonedTitle;
      }

      return title;
    });

    _defineProperty(this, "getPanels", objs => objs.map(obj => {
      const panel = {
        key: obj.id,
        id: obj.id,
        active: this.isActivePanel(obj),
        onTitleClick: () => this.onTitleClick(obj.id),
        title: !obj.sections && !obj.content ? this.itemWrapper({
          title: obj.title,
          tooltip: obj.tooltip
        }) : obj.title
      };

      if (this.getContent(obj)) {
        panel.content = {
          content: this.getContent(obj)
        };
      }

      return panel;
    }));

    _defineProperty(this, "onTitleClick", id => {
      // Get the already clicked elements
      const clicked = [...this.state.clicked]; // Check if the clicked element is present in array

      const index = clicked.indexOf(id);

      if (index > -1) {
        // If present remove it
        clicked.splice(index, 1);
        this.setState({
          clicked
        });
      } else {
        // If not present create it
        clicked.push(id);
        this.setState({
          clicked
        });
      }
    });

    _defineProperty(this, "isActivePanel", obj => {
      // Default result
      const result = false; // Checks if the object has been clicked

      if (this.state.clicked.indexOf(obj.id) > -1) {
        return !result;
      } else {
        return result;
      }
    });

    _defineProperty(this, "getContent", obj => Array.isArray((0, _get2.default)(obj, "sections")) ? _react.default.createElement(_semanticUiReact.Accordion.Accordion, {
      panels: this.getPanels(obj.sections || null)
    }) : this.contentWrapper(obj.content));
  }

  componentDidMount() {
    // Typical usage (don't forget to compare props):
    if (this.props.nodes) {
      const {
        checked,
        indeterminate
      } = this.createFlatterNodes(this.props.nodes);
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
      const {
        checked: newChecked,
        indeterminate: newIndeterminate
      } = this.toggleParentStatus(flatNode.parent, checked, indeterminate);
      checked = newChecked;
      indeterminate = newIndeterminate;
    } else {
      checked = this.toggleNode(node.id, "checked", allChecked, checked);
      indeterminate = this.toggleNode(node.id, "indeterminate", someChecked, indeterminate);
    }

    return {
      checked,
      indeterminate
    };
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


  render() {
    const StyledAccordion = this.StyledAccordion;
    return _react.default.createElement("div", {
      style: {
        width: !this.props.collapsed ? this.props.width : this.props.collapsedWidth,
        fontSize: this.props.fontSize
      },
      className: `accordion-menu${this.props.collapsed ? " collapsed" : ""}`
    }, _react.default.createElement(StyledAccordion, {
      panels: this.getPanels(this.state.tree),
      styled: true
    }));
  }

}

exports.default = TreeView;
TreeView.propTypes = {
  /** An Array containing the configuration for menu tree */
  nodes: _propTypes.default.array,

  /** Callback function checkbox click */
  onClick: _propTypes.default.func,

  /** Menu font size, default 13px */
  fontSize: _propTypes.default.number,

  /** Menu width, default 100% */
  width: _propTypes.default.string,

  /** SubMenu active content background color, default #ffffff */
  submenuBackgroundColor: _propTypes.default.string,

  /** SubMenu font color, default #000000 */
  submenuFontColor: _propTypes.default.string,

  /** SubMenu separator color, default #cccccc */
  separatorColor: _propTypes.default.string,

  /** Active color */
  activeColor: _propTypes.default.string,

  /** First level color */
  firstLevelBackgroundColor: _propTypes.default.string,

  /** First level font color */
  firstLevelFontColor: _propTypes.default.string,

  /** Collapsed menu */
  collapsed: _propTypes.default.bool,

  /** Collapsed menu width, default 39  */
  collapsedWidth: _propTypes.default.number,

  /** Open menu function */
  openMenu: _propTypes.default.func
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
  collapsed: false,
  collapsedWidth: 39,
  onClick: () => {}
};