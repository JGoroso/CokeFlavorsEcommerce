import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = (props) => {
  return (
    <>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box display="flex" alignItems="center">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="./cokelogo.png"
            alt="Coke Logo"
          />
          <h2 className="Title">{props.title}</h2>
          <Image boxSize="24px" src="./argentina.png" alt="Argentina" />
        </Box>
        <Box>
          <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
            Productos
          </Button>
          <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
            Colección
          </Button>
          <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
            Regalos
          </Button>
          <CartWidget />
        </Box>
      </Box>
      <Divider marginTop="10px" />
    </>
  );
};
