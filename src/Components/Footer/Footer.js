import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const Footer = () => {



  return (
    <footer>
      <Box p={"absolute"} w="full" bottom={0}>
        Hecho por ❤️ a la Coquita
      </Box>
    </footer>
  );
};
