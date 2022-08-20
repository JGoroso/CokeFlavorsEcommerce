import React from "react";
import { useState, useEffect } from "react";
import { Button, useColorModeValue, HStack, Input } from "@chakra-ui/react";

import "./ItemCount.css";

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);

  useEffect(() => {
    setQty(initial);
  }, [initial]);

  const addProduct = (num) => {
    setQty(qty + num);
  };
  console.log(qty);

  return (
    <>
      <HStack display="flex" justifyContent={"center"}>
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
          ize="md"
          maxW={24}
          defaultValue={15}
          min={10}
        />
        <Button
          onClick={() => {
            if (qty < stock) addProduct(+1);
          }}
        >
          +
        </Button>
      </HStack>
      <Button
        className="Button"
        rounded={"none"}
        mt={2}
        size={"lg"}
        p={"7"}
        onClick={() => onAdd(qty)}
        bg={useColorModeValue("red.500")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
      >
        Agregar al carrito
      </Button>
    </>
  );
};
