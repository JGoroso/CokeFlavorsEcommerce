import React from "react";
import { useState } from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <>
      <div className="Counter">
        <>
          <Button
            bg="red.400"
            _active={{ bg: "pink.300" }}
            children="-"
            onClick={() => addProduct(-1)}
            disabled={qty === initial}
          />
          <h3>{qty}</h3>
          <Button
            bg="green.300"
            _active={{ bg: "green.300" }}
            children="+"
            onClick={() => addProduct(+1)}
            disabled={qty === stock}
          />
        </>
      </div>
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
