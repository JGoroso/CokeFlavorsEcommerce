import React, { useState, useContext } from "react";
import { Flex, Box, chakra, Image, Button } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { BsCartCheckFill } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({
  id,
  name,
  description,
  price,
  thumbnail,
  stock,
}) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, productQty } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    const productToAdd = {
      id,
      name,
      price,
      quantity,
      thumbnail,
    };

    addItem(productToAdd);
  };
  const getProductQty = productQty(id);
  return (
    <>
      <Flex mt={40} w="full" alignItems="center" justifyContent="center">
        <Box className="item_detail">
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={{ base: "column", lg: "row", md: "row" }}
            w={"full"}
          >
            <Box
              h={{
                lg: "full",
              }}
              w={{ base: "100%", lg: "40%", md: "40%" }}
            >
              <chakra.h2
                fontSize={{
                  base: "4xl",
                  md: "6xl",
                  lg: "9xl",
                }}
                color="red.600"
                _dark={{
                  color: "white",
                }}
                fontWeight="bold"
                textTransform={"uppercase"}
                textAlign={{ base: "center", lg: "right", md: "right" }}
              >
                {name}
              </chakra.h2>
            </Box>

            <Box>
              <Image
                height={{ base: "300", lg: "530" }}
                objectFit={"cover"}
                src={thumbnail}
              />
            </Box>
            <Box
              py={12}
              px={6}
              maxW={{
                base: "100%",
                lg: "5xl",
              }}
              w={{ base: "100%", lg: "40%", md: "40%" }}
            >
              <chakra.p
                mt={4}
                color="gray.600"
                _dark={{
                  color: "gray.600",
                }}
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "1xl", lg: "2xl" }}
                fontWeight={"semibold"}
              >
                {description}
              </chakra.p>

              <chakra.h2
                fontSize={{
                  base: "5xl",
                  md: "6xl",
                }}
                color="red.600"
                _dark={{
                  color: "white",
                }}
                textAlign={{ base: "center", lg: "left" }}
                fontWeight="bold"
              >
                ${price}
              </chakra.h2>

              <Box mt={8}>
                {quantity === 0 ? (
                  <ItemCount
                    display="none"
                    initial={getProductQty}
                    stock={stock}
                    onAdd={onAdd}
                  />
                ) : (
                  <>
                    <Link to="/cart">
                      <Button
                        leftIcon={<BsCartCheckFill />}
                        colorScheme="red"
                        variant="outline"
                        display={"flex"}
                      >
                        Terminar compra
                      </Button>
                    </Link>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
