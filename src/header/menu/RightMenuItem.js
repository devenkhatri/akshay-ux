import React from "react";
import { MenuItem } from "@aws-amplify/ui-react";

const RightMenuItem = (props) => {
  return (
    <MenuItem onClick={props.onClick}>{props.text}</MenuItem>
  );
};

export default RightMenuItem;
