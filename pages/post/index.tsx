import React from "react";
import { Flex, Text } from "@chakra-ui/layout";

type PostProps = {
  data: any;
};

const Post: React.FC<PostProps> = ({ data }) => {
  console.log(data);

  return (
    <Flex>
      <Text>hello Post</Text>
    </Flex>
  );
};

export default Post;
