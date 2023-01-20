import React from "react";
import { Card, Text, Collection, Heading } from "@aws-amplify/ui-react";

const ContentList = (props) => {
  return (
    <Collection type={props.type} items={props.items} gap={props.gap}>
      {(item, index) => (
        <Card key={index} padding="1rem">
          <Heading level={4}>{item.title}</Heading>
          <Text>{item.description}</Text>
        </Card>
      )}
    </Collection>
  );
};

export default ContentList;
