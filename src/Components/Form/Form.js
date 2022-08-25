import { React, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";

import { BsPerson, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export const Form = ({ createOrder }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

  return (
    <>
      <Box mt={60}>
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <VStack spacing={4}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>

                <InputGroup width={80}>
                  <InputLeftElement children={<BsPerson />} />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    isRequired
                    onChange={handleChangeName}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>

                <InputGroup>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    isRequired
                    onChange={handleChangeEmail}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Telefono</FormLabel>

                <InputGroup>
                  <InputLeftElement children={<BsTelephone />} />
                  <Input
                    type="tel"
                    name="telephone"
                    placeholder="Tu Telefono"
                    isRequired
                    onChange={handleChangeTel}
                  />
                </InputGroup>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                bg="red.600"
                color="white"
                _hover={{
                  bg: "red.400",
                }}
                onClick={() => createOrder(name, email, tel)}
                mt={5}
              >
                Terminar Compra
              </Button>
            </form>
          </VStack>
        </Box>
      </Box>
    </>
  );
};
