import React from "react";
import "./hero.css";
import { Image, Box, chakra } from "@chakra-ui/react";
export const Hero = () => {
  return (
    <>
      <Box overflow="hidden" className="hero">
        <Box
          mt={40}
          pb={{
            base: 10,
            sm: 16,
            md: 40,
            lg: 28,
            xl: 32,
          }}
 
          border="solid 1px transparent"
          w={"40%"}
        >
          <chakra.h1
            textAlign={{
              md: "6xl",
              lg: "left",
            }}
            fontSize={{
              base: "xl",
              sm: "7xl",
              md: "6xl",
              lg: "8xl",
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
              md: "6xl",
              lg: "left",
            }}
            mt={{
              base: 3,
              sm: 2,
              md: 2,
            }}
            fontSize={{
              sm: "2xl",
              md: "2xl",
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
            Suponemos que no conoces todos los sabores, acá podes encontrarlos!
          </chakra.p>
        </Box>

        <Box
          mt={{ lg: 40, md: 10 }}
          bottom={{
            lg: 0,
          }}
          w={{
            lg: "20%",
            md: "100%",
          }}
          border="solid 1px transparent"
        >
          <Image
            w={{
              lg: "90%",
              md: "40%",
            }}
            fit="cover"
            src="https://www.coca-colacompany.com/content/dam/journey/au/en/brand-detail/coca-cola/Large_product_shot_Coca-Cola_Vanilla_No_Sugar_updated.png"
            alt=""
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  );
};
