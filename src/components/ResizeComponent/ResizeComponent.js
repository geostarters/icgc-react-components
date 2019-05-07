/* eslint-disable no-undef */
// @flow

import React from "react";
import { Utils } from "@geostarters/common";

const ResizeComponent = ComposedComponent =>

	class ResizeComponent extends React.PureComponent {

		constructor(props) {

			super(props);
			this.state = {
				width: window.innerWidth
			};

			const debouncedHandleWindowSizeChange = Utils.debounce(this.handleWindowSizeChange, (props.delay ? props.delay : 50));
			window.addEventListener("resize", debouncedHandleWindowSizeChange);

		}

         handleWindowSizeChange = () => this.setState({ width: window.innerWidth });

         componentWillUnmount = () => window.removeEventListener("resize", this.handleWindowSizeChange);

        render = () => <ComposedComponent {...this.state} {...this.props} >{this.props.children}</ComposedComponent>;

	};

export default ResizeComponent;


