import React from "react";
import { Link } from "@aws-amplify/ui-react";

const FooterLinkItem = (props) => {
  return (
    <Link
      href={props.href}
      color={props.color}
      fontSize="xs"
      fontWeight="bold"
      textDecoration="underline"
    >
      {props.text}
    </Link>
  );
};

export default FooterLinkItem;
