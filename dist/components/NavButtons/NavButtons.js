var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Button as ButtonSUI } from "semantic-ui-react";
import PropTypes from "prop-types";

//import * as CONSTANTS from "../../utils/constants";
import styles from "./NavButtons.css";

var NavButtons = function (_Component) {
	_inherits(NavButtons, _Component);

	function NavButtons() {
		_classCallCheck(this, NavButtons);

		return _possibleConstructorReturn(this, (NavButtons.__proto__ || Object.getPrototypeOf(NavButtons)).apply(this, arguments));
	}

	_createClass(NavButtons, [{
		key: "render",
		value: function render() {

			return React.createElement(
				ButtonSUI.Group,
				{ className: styles.myNavButtons },
				React.createElement(ButtonSUI, { basic: true, color: this.props.color ? this.props.color : "yellow", disabled: this.props.disabledPrev, floated: "left", labelPosition: "left", icon: "left chevron", content: "Anterior", onClick: this.props.goPrevStep }),
				React.createElement(ButtonSUI, { color: this.props.color ? this.props.color : "yellow", disabled: this.props.disabledNext, floated: "right", labelPosition: "right", icon: "right chevron", content: "Seg\xFCent", onClick: this.props.goNextStep })
			);
		}
	}]);

	return NavButtons;
}(Component);

export default NavButtons;


NavButtons.propTypes = {
	goPrevStep: PropTypes.func,
	goNextStep: PropTypes.func,
	disabledPrev: PropTypes.bool,
	disabledNext: PropTypes.bool,
	color: PropTypes.string
};