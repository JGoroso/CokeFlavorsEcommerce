import React from "react";
import { Flex, Box, chakra, Image } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, price, thumbnail, stock }) => {
  const onAdd = (value) => {
    alert(`Agregaste ${value} coquitas 🥤`);
  };

  return (
    <>
      <Flex
        _dark={{
          bg: "#3e3e3e",
        }}
        p={60}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="80%"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Image
              height={430}
              position="absolute"
              top={40}
              ml={40}
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
              <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
