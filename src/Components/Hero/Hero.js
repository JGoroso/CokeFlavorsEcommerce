import React from "react";
import "./hero.css";
import { Image, Box, chakra } from "@chakra-ui/react";
export const Hero = () => {
  return (
    <>
      <Box
        display={{ base: "flex" }}
        flexDir={{ base: "column", md: "row", lg: "row" }}
        overflow="hidden"
        className="hero"
        w={{ md: "100%" }}
      >
        <Box
          pb={{
            base: 10,
            sm: 16,
            md: 28,
            lg: 28,
            xl: 32,
          }}
          border="solid 1px transparent"
          w={{ lg: "40%", base: "100%", md: "50%" }}
          mt={40}
        >
          <chakra.h1
            textAlign={{
              md: "left",
              lg: "left",
            }}
            fontSize={{
              base: "5xl",
              sm: "7xl",
              md: "6xl",
              lg: "7xl",
              xl: "8xl",
              "2xl": "9xl"
            }}
            letterSpacing="tight"
            lineHeight="short"
            fontWeight="extrabold"
            color="white"
            _dark={{
              color: "white",
            }}
          >
            ¿LAS CONOCIAS? PROBALAS ;)
          </chakra.h1>
          <chakra.p
            textAlign={{
              md: "left",
              lg: "left",
            }}
            mt={{
              base: 3,
              sm: 2,
              md: 2,
            }}
            fontSize={{
              base: "1xl",
              sm: "2xl",
              md: "xl",
              lg: "2xl",
              xl: "4xl",
              "2xl": "4xl"
            }}
            maxW={{
              sm: "xl",
            }}
            mx={{
              sm: "auto",
              lg: 0,
              md: 0,
            }}
            color="gray.200"
          >
            Quizas no las conozcas a todas... acá podes encontrarlas
          </chakra.p>
        </Box>

        <Box
          mt={{ lg: 40, md: 10 }}
          w={{
            lg: "28%",
            md: "30%",
          }}
          border="solid 1px transparent"
        >
          <Image
            w={{
              lg: "100%",
              md: "80%",
            }}
            fit="cover"
            src="https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/dreamworld/pdp/coca-cola-dreamworld-can.png"
            alt=""
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  );
};
