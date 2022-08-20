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
      thumbnail
    };

    addItem(productToAdd);
  };
  const getProductQty = productQty(id);
 console.log(getProductQty)
  return (
    <>
      <Flex p={60} w="full" alignItems="center" justifyContent="center">
        <Box className="item_detail">
          <Box
            display={"flex"}
            justifyContent={"center"}
            w={{
              lg: "50%",
            }}
          >
            <Image
              height={430}
              position="absolute"
              top={40}
              objectFit={"cover"}
              src={thumbnail}
            />
            <Box
              h={{
                base: 80,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "5xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              {name}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              ></chakra.span>
            </chakra.h2>

            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              ${price}
            </chakra.h2>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {description}
            </chakra.p>

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
      </Flex>
    </>
  );
};
