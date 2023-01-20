import React from "react";
import { ExpanderItem } from "@aws-amplify/ui-react";

const FaqItem = (props) => {
  return (
    <ExpanderItem title={props.title} value={props.value}>
      {props.content}
    </ExpanderItem>
  );
};

export default FaqItem;
