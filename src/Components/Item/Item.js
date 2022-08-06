import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const Item = (props) => {
  // const onAdd = (qty) => {
  //   return alert(`Usted ha comprado ${qty} coquitas`);
  // };
  //

  return (
    <Center py={14}>
      <Box
        role={"group"}
        gap={10}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "250px",
            h: "230px",
            pos: "absolute",
            top: 5,
            left: -3,
            backgroundImage: `url(${props.thumbnail})`,
            filter: "blur(20px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image height={230} src={props.thumbnail} />
        </Box>
        <Heading mt={20} fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {props.name}
        </Heading>
        <Stack
          pt={5}
          align={"center"}
          direction={"row"}
          justifyContent="center"
        >
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${props.price}
            </Text>
          </Stack>
          <Stack mt={8} direction={"row"} justifyContent="center">
            <Link to={`/detail/${props.id}`}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"red.500"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "red.400",
                }}
                _focus={{
                  bg: "red.500",
                }}
              >
                Detalles
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
