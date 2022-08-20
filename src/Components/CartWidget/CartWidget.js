import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = (display) => {
  const { cart, totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <button style={cart.length > 0 ? { display: "" } : { display: "none" }}>
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
    </Link>
  );
};
