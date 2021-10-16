import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import Navigation from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Flex>
        <Navigation />
        <main>{children}</main>
      </Flex>
    </>
  );
};

export default Layout;
