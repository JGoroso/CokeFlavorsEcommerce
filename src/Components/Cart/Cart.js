import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import {
  Flex,
  Stack,
  Box,
  Heading,
  useColorModeValue,
  SimpleGrid,
  chakra,
  Icon,
  Button,
  Text,
  ButtonGroup,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";

export const Cart = () => {
  const bg3 = useColorModeValue("gray.100", "gray.700");
  const { cart, removeItemFromCart, clearCart, totaPrice } =
    useContext(CartContext);
  return (
    <>
      {cart.length > 0 ? (
        <>
          <Flex
            _dark={{
              bg: "#3e3e3e",
            }}
            p={10}
            margin="0 auto"
            alignItems="center"
            justifyContent="center"
            w={{
              base: "full",
              md: "full",
            }}
          >
            <Stack
              mt={40}
              direction={{
                base: "column",
              }}
              w="full"
              shadow="lg"
            >
              <Flex
                direction={{
                  base: "row",
                  md: "column",
                }}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 5,
                  }}
                  w={{
                    base: 120,
                    md: "full",
                  }}
                  textTransform="uppercase"
                  bg={bg3}
                  color={"gray.500"}
                  py={{
                    base: 1,
                    md: 4,
                  }}
                  px={{
                    base: 2,
                    md: 10,
                  }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span></span>
                  <span>PRODUCTO</span>
                  <span>CANTIDAD</span>
                  <span>SUBTOTAL</span>
                </SimpleGrid>
                {cart.map((prod) => {
                  return (
                    <SimpleGrid
                      key={prod.id}
                      spacingY={3}
                      columns={{
                        base: 1,
                        md: 5,
                      }}
                      w="full"
                      py={2}
                      px={10}
                      fontWeight="semibold"
                      color="gray.100"
                    >
                      <Image
                        boxSize="25px"
                        src={prod.thumbnail}
                        alt="Dan Abramov"
                      />

                      <span>{prod.name}</span>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {prod.quantity}
                      </chakra.span>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        ${prod.quantity * prod.price}
                      </chakra.span>
                      <Flex
                        justify={{
                          md: "end",
                        }}
                      >
                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                          <Flex>
                            <Link to={`/detail/${prod.id}`}>
                              <Button
                                size="sm"
                                variant="solid"
                                leftIcon={<Icon as={AiOutlineShopping} />}
                                colorScheme="red"
                              >
                                Ver Producto
                              </Button>
                            </Link>
                          </Flex>

                          <IconButton
                            colorScheme="red"
                            variant="outline"
                            icon={<BsFillTrashFill />}
                            aria-label="Delete"
                            onClick={() => {
                              removeItemFromCart(prod.id);
                            }}
                          />
                        </ButtonGroup>
                      </Flex>
                    </SimpleGrid>
                  );
                })}
              </Flex>
            </Stack>
          </Flex>

          <chakra.h1 color="white" fontWeight="bold" fontSize="xl" pb={5}>
            TOTAL: ${totaPrice()}
          </chakra.h1>
          <ButtonGroup variant="solid" size="sm" spacing={3}>
            <Link to="/">
              <Button
                size="sm"
                variant="solid"
                leftIcon={<Icon as={AiOutlineShopping} />}
                colorScheme="gray"
              >
                Home
              </Button>
            </Link>

            <Button
              size="sm"
              variant="outline"
              leftIcon={<Icon as={AiOutlineShopping} />}
              colorScheme="red"
              onClick={() => {
                clearCart();
              }}
            >
              Vaciar Carrito
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <Box textAlign="center" py={10} px={6}>
          <Box display="inline-block">
            <Flex
              mt={40}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={"red.500"}
              rounded={"50px"}
              w={"55px"}
              h={"55px"}
              textAlign="center"
            >
              <FaHeartBroken size={32} color="white" />
            </Flex>
          </Box>
          <Heading
            as="h2"
            size="xl"
            mt={6}
            mb={2}
            color="red.600"
            display={"flex"}
            justifyContent="center"
          >
            <span>Ups ... No hay coquitas agregadas! &nbsp;</span>
          </Heading>

          <Text color={"gray.200"} fontSize={20}>
            Puedes volver al home y elegir la que mas te guste
          </Text>
          <Link to="/">
            <Button
              mt={5}
              size="sm"
              variant="solid"
              leftIcon={<Icon as={AiOutlineShopping} />}
              colorScheme="gray"
            >
              Home
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
};
