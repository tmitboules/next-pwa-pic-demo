import React from "react";
import { Flex, Text } from "@chakra-ui/layout";

type UserProps = {
  data: any;
};

const User: React.FC<UserProps> = ({ data }) => {
  console.log(data);

  return (
    <Flex>
      <Text>hello User</Text>
    </Flex>
  );
};

export default User;
