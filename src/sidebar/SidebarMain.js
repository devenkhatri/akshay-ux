import React from "react";
import { Expander, View } from "@aws-amplify/ui-react";
import FaqItem from "./FaqItem";

const SidebarMain = (props) => {
  return (
    <View columnStart="3" columnEnd="-1">
      <Expander type="single">
        <FaqItem
          title="Is it accessible?"
          value="demo-item-1"
          content="Yes! It adheres to the WAI-ARAI design pattern."
        />
        <FaqItem
          title="Can I customize the styling?"
          value="demo-item-2"
          content="Of course! See the section on CSS Styling below."
        />
        <FaqItem
          title="Is it a great way to organize content?"
          value="demo-item-3"
          content="Most definitely!"
        />
      </Expander>
    </View>
  );
};

export default SidebarMain;
