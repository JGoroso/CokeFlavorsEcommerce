import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        mt={40}
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.200, red.400)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text color={"gray.500"} mb={6} mt={5}>
        ERROR! Estabas buscando una pepsi? Volve al home y comprate una coca.
      </Text>

      <Link to="/">
        {" "}
        <Button
          colorScheme="red"
          bgGradient="linear(to-r, red.200, red.400, red.600)"
          color="white"
          variant="solid"
        >
          Volver al home
        </Button>
      </Link>
    </Box>
  );
};
