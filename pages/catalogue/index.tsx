import React from "react";
import { Flex, Text } from "@chakra-ui/layout";

type CatalogueProps = {
  data: any;
};

const Catalogue: React.FC<CatalogueProps> = ({ data }) => {
  console.log(data);

  return (
    <Flex>
      <Text>hello Catalogue</Text>
    </Flex>
  );
};

export default Catalogue;
