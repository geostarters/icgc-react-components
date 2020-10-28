import React from "react";
import { Button as ButtonSUI } from "semantic-ui-react";
export default function Button(props) {
  const buttonProps = {
    color: "yellow",
    onClick: () => console.log("click"),
    ...props
  };
  return /*#__PURE__*/React.createElement(ButtonSUI, buttonProps);
}