import React from "react";
import { useState, useEffect } from "react";
import { Button, useColorModeValue, HStack, Input } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import "./ItemCount.css";

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);

  useEffect(() => {
    setQty(initial);
  }, [initial]);

  const addProduct = (num) => {
    setQty(qty + num);
    return qty;
  };

  return (
    <>
      <HStack display={{ base: "inline", lg: "flex" }} >
        <Button
          onClick={() => {
            if (qty > 1) addProduct(-1);
          }}
        >
          -
        </Button>
        <Input
          textAlign={"center"}
          value={qty}
          onChange={addProduct}
          size="md"
          maxW={24}
          min={10}
        />
        <Button
          onClick={() => {
            if (qty < stock) addProduct(+1);
          }}
        >
          +
        </Button>
        <Button
          className="Button"
          marginTop={20}
          size={"lg"}
          onClick={() => onAdd(qty)}
          bg={useColorModeValue("red.500")}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
        >
          <FaCartPlus />
          &nbsp; Agregar al carrito
        </Button>
      </HStack>
    </>
  );
};
