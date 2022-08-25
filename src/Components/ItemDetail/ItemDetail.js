import React, { useState, useContext } from "react";
import { Flex, Box, chakra, Image, Button } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
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
            w={"full"}
          >
            <Box
              h={{
                base: 80,
                lg: "full",
              }}
              w={"40%"}
            >
              <chakra.h2
                fontSize={{
                  base: "4xl",
                  md: "9xl",
                }}
                color="red.600"
                _dark={{
                  color: "white",
                }}
                fontWeight="bold"
                textTransform={"uppercase"}
                textAlign={"right"}
              >
                {name}
              </chakra.h2>
            </Box>

            <Box>
              <Image height={530} objectFit={"cover"} src={thumbnail} />
            </Box>
            <Box
              py={12}
              px={6}
              maxW={{
                base: "xl",
                lg: "5xl",
              }}
              w={"40%"}
            >
              <chakra.p
                mt={4}
                color="gray.600"
                _dark={{
                  color: "gray.600",
                }}
                textAlign={"left"}
                fontSize={"2xl"}
                fontWeight={"semibold"}
              >
                {description}
              </chakra.p>

              <chakra.h2
                fontSize={{
                  base: "3xl",
                  md: "6xl",
                }}
                color="red.600"
                _dark={{
                  color: "white",
                }}
                textAlign={"left"}
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
                      <Button>Terminar compra</Button>
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
