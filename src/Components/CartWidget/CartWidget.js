import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <button>
      <Icon w={8} h={8} marginLeft={4} marginTop={2} color="red.500">
        <FaShoppingCart />
      </Icon>
      <Text
        display={"inline"}
        color="#fafafa"
        fontSize="sl"
        fontWeight="semibold"
      >
        {totalQuantity()}
      </Text>
    </button>
  );
};
