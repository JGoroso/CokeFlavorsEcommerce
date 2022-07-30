import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Text } from "@chakra-ui/react";

export const CartWidget = () => {
  return (
    <button>
      <Icon w={8} h={8} marginLeft={4} marginTop={2} color="red.500">
        <FaShoppingCart />
      </Icon>
      <Text display={"inline"} fontSize="sl" fontWeight="semibold">
        4
      </Text>
    </button>
  );
};
