import React from "react";
import PropTypes from "prop-types";
import { Modal as ModalSUI, Button, Icon, Image } from "semantic-ui-react";
export default function Modal(props) {
  return React.createElement(ModalSUI, props, props.headertitle && React.createElement(ModalSUI.Header, {
    className: props.headerClassName,
    content: props.headertitle
  }), React.createElement(ModalSUI.Content, {
    className: props.contentClassName
  }, props.contentImage && React.createElement(Image, {
    wrapped: true,
    size: "medium",
    src: props.contentImage
  }), props.children), props.actionbuttons && React.createElement(ModalSUI.Actions, {
    className: props.actionsClassName
  }, props.actionbuttons.map((btn, index) => React.createElement(Button, {
    primary: false,
    key: index,
    color: btn.color,
    onClick: btn.handler
  }, btn.icon && React.createElement(Icon, {
    name: btn.icon
  }), " ", btn.label))));
}
Modal.propTypes = {
  size: PropTypes.string,
  trigger: PropTypes.object,
  children: PropTypes.object,
  actionbuttons: PropTypes.array,
  open: PropTypes.bool,
  closeIcon: PropTypes.bool,
  headertitle: PropTypes.string,
  contentImage: PropTypes.string,
  actionsClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string
};
Modal.defaultProps = {
  closeIcon: true,
  headertitle: null,
  actionbuttons: null,
  trigger: null
};