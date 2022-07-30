import React from "react";
import { ItemList } from "./ItemList";
import { Box } from "@chakra-ui/react";

export const ItemListContainer = () => {
  return (
    <>
      <Box mt={7} fontSize="2xl" fontWeight="semibold">
        <h2>Los mas vendidos</h2>
      </Box>
      <ItemList />
    </>
  );
};
