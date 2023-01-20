import React from "react";
import {
  View,
  Flex,
  Image,
  Menu,
} from "@aws-amplify/ui-react";
import MenuLink from "./menu/MenuLink";
import RightMenuItem from "./menu/RightMenuItem";

const HeaderMain = (props) => {
  return (
    <View
      columnStart="1"
      columnEnd="-1"
      backgroundColor={props.tokens.colors.blue[10]}
      padding="1rem"
      height="4rem"
    >
      <Flex direction="row">
        <Flex width="15%">
          <Image
            alt="Logo"
            src="/amplify-logo.svg"
            objectFit="initial"
            backgroundColor="initial"
            height="40%"
            width="40%"
            opacity="100%"
          />
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
          width="75%"
        >
          <MenuLink href="#" color="#007EB9" text="About" />
          <MenuLink href="#" color="#007EB9" text="Portfolio" />
          <MenuLink href="#" color="#007EB9" text="Contact" />
        </Flex>
        <Flex direction="row" justifyContent="flex-end" alignContent="flex-end">
          <View width="4rem">
            <Menu menuAlign="start">
              <RightMenuItem onClick={() => alert("Profile")} text="Profile" />
              <RightMenuItem onClick={() => alert("Logout")} text="Logout" />
            </Menu>
          </View>
        </Flex>
      </Flex>
    </View>
  );
};

export default HeaderMain;
