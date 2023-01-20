import React from "react";
import { Flex, View, Text } from "@aws-amplify/ui-react";
import FooterLink from "./footerlink/FooterLink";

const FooterMain = (props) => {
  return (
    <View
      columnStart="1"
      columnEnd="-1"
      backgroundColor={props.tokens.colors.red[100]}
      padding="1rem"
      height="4rem"
    >
      <Flex
        direction="row"
        justifyContent="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
      >
        <Text color="#fff">Copyright @2023</Text>
        <FooterLink tokens={props.tokens} />
      </Flex>
      
    </View>
  );
};

export default FooterMain;
