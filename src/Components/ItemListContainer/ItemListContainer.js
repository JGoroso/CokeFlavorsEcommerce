import React from "react";
import { ItemList } from "../ItemList/ItemList";
import { Box } from "@chakra-ui/react";

export const ItemListContainer = () => {
  return (
    <>
      <Box mt={40} display="inline-block">
        <Box fontSize="2xl" fontWeight="semibold"></Box>
        <ItemList />
      </Box>
    </>
  );
};
