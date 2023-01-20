import React from "react";
import { View, Flex } from "@aws-amplify/ui-react";
import FooterLinkItem from "./FooterLinkItem";

const FooterLink = (props) => {
  return (
    <View
      columnStart="1"
      columnEnd="-1"
      // backgroundColor={props.tokens.colors.blue[10]}
      // padding="1rem"
      height="4rem"
    >
      <Flex direction="row">
        <Flex
          direction="row"
          justifyContent="center"
          alignContent="flex-end"
          wrap="nowrap"
          gap="1rem"
        >
          <FooterLinkItem href="#" color="#fff" text="Privacy policy" />
          <FooterLinkItem href="#" color="#fff" text="Disclaimer" />
          <FooterLinkItem href="#" color="#fff" text="Contact" />
        </Flex>
      </Flex>
    </View>
  );
};

export default FooterLink;
