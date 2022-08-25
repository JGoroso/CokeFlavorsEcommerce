import React from "react";
import { Icon } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = (display) => {
  const { cart, totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <button style={cart.length > 0 ? { display: "" } : { display: "none" }}>
        <Icon w={8} h={8} marginLeft={4} marginTop={2} color="#232323">
          <FiShoppingCart />
        </Icon>
        <Text
          display={"inline"}
          color="#232323"
          fontSize="sl"
          fontWeight="semibold"
        >
          {totalQuantity()}
        </Text>
      </button>
    </Link>
  );
};
