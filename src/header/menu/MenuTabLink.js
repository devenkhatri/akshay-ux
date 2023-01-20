import React from "react";
import { TabItem } from "@aws-amplify/ui-react";

const MenuTabLink = (props) => {
  return <TabItem title={props.title}>{props.content}</TabItem>;
};

export default MenuTabLink;
