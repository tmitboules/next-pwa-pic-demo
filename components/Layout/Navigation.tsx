import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import Icon from "@chakra-ui/icon";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsBook, BsPlusCircle } from "react-icons/bs";

const Navigation = () => {
  return (
    <Flex
      pos={{ base: "fixed", lg: "static" }}
      left={0}
      bottom={{ base: 0, lg: "none" }}
      w={{ base: "100%", lg: "20vw" }}
      bg="blue.900"
      h={{ base: "80px", lg: "100vh" }}
      minW="20rem"
      p="1rem"
      direction={{ base: "row", lg: "column" }}
      justifyContent={{ base: "space-evenly", lg: "flex-start" }}
    >
      <Link href="/catalogue">
        <a>
          <Flex
            bg="blue.800"
            p="0.5rem"
            borderRadius=".25rem"
            mb="0.25rem"
            _hover={{ bg: "blue.700" }}
          >
            <Icon w={7} h={7} as={BsBook} mr={{ base: 0, lg: ".5rem" }} />
            <Text display={{ base: "none", lg: "inline" }}>Catalogue</Text>
          </Flex>
        </a>
      </Link>
      <Link href="/post">
        <a>
          <Flex
            bg="blue.800"
            p="0.5rem"
            borderRadius=".25rem"
            mb="0.25rem"
            _hover={{ bg: "blue.700" }}
          >
            <Icon w={7} h={7} as={BsPlusCircle} mr={{ base: 0, lg: ".5rem" }} />
            <Text display={{ base: "none", lg: "inline" }}>Add Post</Text>
          </Flex>
        </a>
      </Link>
      <Link href="/user">
        <a>
          <Flex
            bg="blue.800"
            p="0.5rem"
            borderRadius=".25rem"
            mb="0.25rem"
            _hover={{ bg: "blue.700" }}
          >
            <Icon
              w={7}
              h={7}
              as={IoPersonCircleOutline}
              mr={{ base: 0, lg: ".5rem" }}
            />
            <Text display={{ base: "none", lg: "inline" }}>User</Text>
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};

export default Navigation;
