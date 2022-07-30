import React from "react";
import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import { ItemCount } from "./ItemCount";

export const Item = (props) => {
  const onAdd = (qty) => {
    return alert(`Usted ha comprado ${qty} coquitas`);
  };
  //
  return (
    <Flex
      p={10}
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image src={props.thumbnail} alt={`Picture of ${props.name}`} />

        <Box p="6">
          <Flex mt="1" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {props.name}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {props.price.toFixed(2)}
            </Box>
          </Flex>
          <ItemCount stock={props.stock} onAdd={onAdd} initial={1} />
        </Box>
      </Box>
    </Flex>
  );
};
