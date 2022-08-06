import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <>
      <Box
        className="navbar"
        display="flex"
        justifyContent="space-around"
        py={2}
      >
        <Link to="/">
          <Box display="flex" alignItems="center">
            <Image
              borderRadius="full"
              boxSize="80px"
              src="https://i.ibb.co/LtCZZ4R/cokelogo.png"
              alt="Coke Logo"
            />
            <h2 className="Title">{props.title}</h2>
          </Box>
        </Link>

        <Box display="flex" alignItems="center" color="#fafafa">
          <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
            PRODUCTOS
          </Button>
          <Link to={"/category/coleccion"}>
            <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
              COLECCION
            </Button>
          </Link>
          <Link to={"/category/regalos"}>
            <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
              REGALOS
            </Button>
          </Link>
          <CartWidget />
        </Box>
      </Box>
    </>
  );
};
