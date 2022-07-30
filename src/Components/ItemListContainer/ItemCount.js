import React from "react";
import { useState } from "react";
import {
  Button,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <>
      <div className="Counter">
        <NumberInput size="sm" defaultValue={1} max={stock} min={initial}>
          <NumberInputField focusBorderColor="red.200" />
          <>
            <NumberInputStepper>
              <NumberIncrementStepper
                bg="green.300"
                _active={{ bg: "green.300" }}
                children="+"
                onClick={() => addProduct(+1)}
                max={stock}
              />
              <NumberDecrementStepper
                bg="red.400"
                _active={{ bg: "pink.300" }}
                children="-"
                onClick={() => addProduct(-1)}
              />
            </NumberInputStepper>
          </>
        </NumberInput>
      </div>

      <Button
        className="Button"
        rounded={"none"}
        w={"full"}
        mt={2}
        size={"lg"}
        py={"7"}
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
