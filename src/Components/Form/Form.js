import { React, useState } from "react";
import "./Form.css";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import { BsPerson, BsTelephone } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export const Form = ({ createOrder }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [domicilio, setDomicilio] = useState();
  const [ciudad, setCiudad] = useState();
  const [provincia, setProvincia] = useState();
  const [obs, setObs] = useState();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };
  const handleChangeDom = (e) => {
    setDomicilio(e.target.value);
  };
  const handleChangeCiu = (e) => {
    setCiudad(e.target.value);
  };
  const handleChangePro = (e) => {
    setProvincia(e.target.value);
  };
  const handleChangeObs = (e) => {
    setObs(e.target.value);
  };

  return (
    <>
      <Box mt={40}>
        <svg viewBox="0 0 180 57" className="coca-logo">
          <path d="M69.1,49.7c-6.7-4.2-15.8-4.9-30.4-1C23,52.2,17.9,54.5,11,49.9c-2.6-2.2-3.6-5.8-2.9-11.1 c1.7-8.4,6.1-16.6,13.9-25.7c4.4-4.8,8.5-8.8,13.8-10.4c4.1-1,3.7,2.1,3.2,2.5c-0.5,0-1.4,0.1-2.1,0.5c-0.5,0.4-2,1.8-2.1,3.6 c-0.2,2.7,2.8,2.1,4.1,0.7c1.4-1.7,3.4-5,1.8-8c-0.6-1.1-1.8-1.8-3.2-2C32.5-0.3,28,2,23.8,4.5C14.6,10.7,7.2,19.3,2.9,28.6 C0.6,34.3-1.6,42.4,1.7,49c2.5,4.6,7.7,7,14,6.6c4.4-0.5,9.7-1.9,13.3-2.7c3.6-0.8,21.8-6.9,27.8,3.7c0,0,1.9-3.8,7-3.9 c4.1-0.3,10,1.1,14.3,4.3C76.6,54.9,72.5,51.8,69.1,49.7z" />
          <path d="M73.1,36.2c0,0-0.5,0.2-0.8,0c-0.4-0.3-0.3-1.1,0-1.6l12-20.2h-5.7c0,0-0.6,1-0.7,1.1c0-0.1-0.1-0.2-0.2-0.2 c-3.6-4.8-11.5,2.5-17.5,10.9C58,29.4,55,33,51.9,35.6c0,0-4.5,4-6.4,1.1c-0.7-1.2-0.5-3-0.1-4.1c2.2-6.2,6.1-11.9,10.5-15.2 c1.3-0.9,2.6-1.2,3.3-0.8c0.6,0.4,0.8,1.3,0.3,1.9c-1,0-1.9,0.3-2.5,1c-1.3,1.3-1.8,2.6-1.4,3.9c2,2.8,6.1-2.8,5.9-6.1 c-0.1-1.2-0.8-2.4-1.8-3c-1.4-0.8-3.7-0.6-5.2,0.1c-1.9,0.7-5.1,3.2-6.9,5.2c-2.3,2.5-6.3,5.2-7.5,4.8c0.4-1.1,3.7-7.5,0.3-10 c-3.5-2.2-10.3,2-15.8,9c-5.1,6.4-7.2,13.8-4.8,17.2c3.5,4,10-1.8,12.8-4.9l0.3-0.4c1.9-2,3.3-4.3,4.7-6.6c0,0,1.3-2,1.4-2.2 c0.8-0.1,1.8-0.3,2.9-0.7c-0.1,0.1-4.2,6.8-3.7,10.2c0.1,1,0,4.8,3.7,5.9c5,0.7,9.1-3,12.5-6.3c0,0,0.6-0.6,0.9-0.9 c-0.1,0.3-0.2,0.8-0.2,0.8c-1.4,4.9,0.5,5.9,1.8,6.3c3.7,1.1,8.2-4.2,8.2-4.2c-0.2,1.6-0.5,3,1.4,4.1c1.7,0.6,3.4-0.2,4.7-1.1 C76.2,37.3,80,32.2,83,28h-1.9C81.1,28,76.3,34.7,73.1,36.2z M37.1,26.3c0,0,0,0.1-0.1,0.2c0,0,0,0.2-0.1,0.2l-2.5,3.9 c-1.5,1.9-3.4,4.3-5.7,5.5c-0.7,0.2-1.6,0.4-2.1-0.2c-1-1.1-0.5-2.8-0.1-4.2l0.2-0.4c1.2-3.3,3.2-6.1,5.1-8.9h0.1c0,0,0,0,0,0.1 C33.2,24.7,35.4,25.7,37.1,26.3L37.1,26.3z M39.4,21.9l-1.1,2.5c-0.2,0.1-0.4,0.1-0.7,0l-0.5-0.1c-1.5-0.5-2.7-1.5-3.1-2.6 c-0.5-2.3,1.5-4.1,2.4-4.8c0.9-0.6,2.2-0.9,3-0.3c0.5,0.6,0.7,1.3,0.7,2C40.1,19.6,39.7,20.9,39.4,21.9z M68.7,30.9 c0.1-0.1-0.8,1.2-0.8,1.2c-1.2,1.8-2.4,3.3-4.4,4.3c-0.3,0.1-0.7,0.2-1-0.1c-0.4-0.2-0.5-0.7-0.5-1.1c0.2-1.3,1.6-5.6,6-11.3 c1.1-1.5,4.3-5.5,5.1-6.1c2.7-2.2,3.7-1.2,3.8-0.6C74.4,21.5,71.5,26.4,68.7,30.9z" />
          <path d="M150.7,6.8c-2.6-1.6-5.4-3-8.1-4.4c-6.2-3.3-11.2-2.1-13.7-1.2c-1,0.3-1.9,0.7-1.9,0.7c-1.9-2-5-1.8-7.3-1.3 c-8.3,2.3-15.9,8-24.2,17.6c-6.1,7.6-9.8,14.2-11.8,20.7c-1.6,4.3-2,10.7,1.7,14.6c3.2,3.2,7.5,2.5,10.4,1.3 c6.5-3,12.4-9.8,15.3-17.4c0.7-2.3,1.4-5.5,0.3-8c-0.5-1.1-1.9-1.9-3.2-1.8c-4.5,0.4-8.9,4-11.3,9.1c-1.2,2.7-1.9,4.8-2.3,8.4 c1.4-1.6,4.2-4.2,7.5-5.6c0,0,0.4-3.3,2.6-6.3c0.8-1.2,2.6-3.2,4.5-2.6c1.7,0.5,1.1,5-1.1,9.3c-1.7,3.2-4.2,6.4-6.7,8.5 c-2.3,1.9-5.6,4.1-8.6,2.4c-1.8-1.1-2.7-3.3-2.5-6.1c0.8-8,4.7-14.9,10.1-22.7c5.6-7.2,11.7-14.7,20-18.6c1.7-0.9,3.3-1.1,4.7-0.6 c0,0-7.8,4.2-11.5,11.8c-0.9,2-2.3,4.6-0.9,6.9c0.7,1.2,1.9,1.3,2.9,1.3c4.6-1.1,7.5-5.2,9.9-8.9c1.4-2.9,2.6-5.7,2.6-8.9 c0-0.3,0-0.9-0.1-1.2c2.2-1.1,6.7,0.8,6.7,0.8c3.5,1.1,10.8,6.6,13.4,7.7c1.2-1.4,3.2-3.4,4.3-4.5L150.7,6.8z M115.8,20.9 c-1.1,0.2-3.1-0.2-1.4-4.3c2.6-5.4,6.9-9.9,11.7-12.3c0.1,0.4,0.1,0.7,0.1,1C125.3,14.8,117.7,20.4,115.8,20.9z" />
          <path d="M171.6,6.5c-4.2,2.3-8.4,3.7-13.6,3.2c-1.4,1.6-2.9,3.2-4.2,4.8c7.3,1.8,15-2.1,19.2-6C177.7,4.8,180,0,180,0 S176.6,3.7,171.6,6.5z" />
          <polygon points="88.4,14.4 85.3,19.3 90.8,19.3 93.8,14.4 		" />
          <path d="M158,50.2c-0.6,0.4-1.4,0.1-1.1-0.8c0.8-2.2,3.7-6.8,3.7-6.8l8.5-14.5h-5.8c-0.3,0.5-0.9,1.5-0.9,1.5 c-0.3-0.4-1-1.4-1.4-1.6c-1.4-0.9-3.5-0.5-4.9,0.3c-6.2,3.5-10.7,10.4-14.2,15.8c0,0-3.8,6-5.8,6.5c-1.6,0.1-1.4-2-1.4-2.5 c0.7-3.5,2.1-6.9,3.6-10c3.1-2,6.4-4.6,9.6-7.5c6.7-6.2,12.4-13.3,13.2-14.8c0,0-0.9,0.2-1.9,0.2c-5.2,7-15.8,17.1-19,18.6 c1.4-3.3,10.6-19.1,18.4-26.6l1.3-1.1c1.9-1.8,3.9-3.7,5.4-3.9c0.2-0.1,0.3,0,0.5,0.3c0.1,1.4-0.4,2.5-1.1,3.6l-0.8,1.7 c0,0,1.3-0.2,2-0.5c0.9-1.7,2-3.6,1.6-5.9c-0.1-0.7-0.7-1.2-1.4-1.4c-2.4-0.4-4.9,1.2-6.9,2.6H159c-10.5,8-19.4,19.5-27.2,35.2 c-0.6,0.4-2.7,0.9-3.1,0.7c0.8-1.6,1.8-3.6,2.2-5.8c0.1-0.7,0.2-1.3,0.2-2c0-1.3-0.3-2.6-1.6-3.5c-1.4-0.7-3.3-0.4-4.6,0.2 c-5.5,2.2-9.7,7.7-12.6,12.3c-1.6,2.9-3.2,5.9-3.7,9.5c-0.3,2.7,0.3,4.5,1.9,5.4c1.7,0.8,3.8,0,4.7-0.4c5.6-2.9,9.6-8.6,12.6-13.9 c0.2,0,1.9,0,3.1-0.3c-0.1,0.2-0.7,2.1-0.7,2.1c-2,5.6-2.9,9.3-1,11.6c2.6,3.1,7-0.2,10.6-4.4c-0.8,5.2,2,6,4.2,5.6 c2.4-0.7,5.1-3.1,6.4-4.4c-0.3,1.5-0.3,4.2,2,4.5c1.5,0.2,2.6-0.5,4-1.2c4.7-2.5,10.3-10.8,11.8-13.1h-1.9 C164,44.3,161.4,48.3,158,50.2z M115.7,49.6c-0.3-0.5-0.4-1-0.4-1.5c-0.1-3.1,3.4-8.7,5.8-11.8c1,2.3,3.4,3.6,4.8,4.2 C124.1,44.3,118.1,52.4,115.7,49.6z M126.9,38.9c-0.2,0.2-3.1-0.8-3.6-3.4c-0.5-2.3,1.1-4,2.7-4.9c0.6-0.5,1.6-0.7,2.4-0.4 c0.7,0.4,0.8,1.2,0.8,2c0,0.6,0,1.1-0.1,1.6c0,0,0,0.1,0,0.2C128.6,35.6,127.8,37.3,126.9,38.9z M150.4,48.6l-0.6,0.5 c-0.8,0.7-1.6,1.4-2.5,1.1c-0.3-0.1-0.5-0.5-0.5-0.7c-0.1-2,0.8-3.8,1.7-5.5l0.3-0.5c2.5-4.1,5.5-8.9,9.8-12.3 c0.8-0.5,1.5-1,2.4-0.7c0.2,0.2,0.4,0.5,0.4,0.8c0,0.1-0.1,0.3-0.2,0.4c-1.2,1.9-2.4,3.9-3.5,5.8 C155.5,41.3,153.2,45.2,150.4,48.6z" />
        </svg>

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
              <Stack spacing={4}>
                <Stack
                  spacing={"4"}
                  direction={["column", "row", "row", "row"]}
                >
                  <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>

                    <InputGroup>
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
                </Stack>

                <Stack
                  spacing={"4"}
                  direction={["column", "row", "row", "row"]}
                >
                  <FormControl isRequired>
                    <FormLabel>Domicilio</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<FiHome />} />
                      <Input
                        type="text"
                        name="Domicilio"
                        placeholder="Tu Dirección"
                        isRequired
                        onChange={handleChangeDom}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Ciudad</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<FiHome />} />
                      <Input
                        type="text"
                        name="Ciudad"
                        placeholder="Ciudad"
                        isRequired
                        onChange={handleChangeCiu}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Provincia</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<FiHome />} />
                      <Input
                        type="text"
                        name="Provincia"
                        placeholder="Provincia"
                        isRequired
                        onChange={handleChangePro}
                      />
                    </InputGroup>
                  </FormControl>
                </Stack>
                <FormControl>
                  <FormLabel>Observaciones</FormLabel>

                  <InputGroup>
                    <Textarea
                      placeholder="Aquí podrá detallar algo que debamos tener en cuenta"
                      name="observaciones"
                      onChange={handleChangeObs}
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
                  onClick={() =>
                    createOrder(
                      name,
                      email,
                      tel,
                      domicilio,
                      ciudad,
                      provincia,
                      obs
                    )
                  }
                  mt={5}
                >
                  Terminar Compra
                </Button>
              </Stack>
            </form>
          </VStack>
        </Box>
      </Box>
    </>
  );
};
