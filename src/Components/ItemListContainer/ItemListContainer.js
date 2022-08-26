import React from "react";
import { ItemList } from "../ItemList/ItemList";
import { Box, Flex } from "@chakra-ui/react";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  return (
    <>
      <Flex
        className="itemListContainer"
        alignItems="center"
        justifyContent="center"
      >
        <Box mt={40}>
          <ItemList />
        </Box>
      </Flex>
    </>
  );
};
