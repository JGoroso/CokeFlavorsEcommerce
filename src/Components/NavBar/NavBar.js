import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const NavBar = (props) => {
  const { cart } = useContext(CartContext);
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
          <HashLink to={"/"}>
            <Button _hover={{ bg: "#ff6d6d" }} variant="ghost" fontSize={"md"}>
              HOME
            </Button>
          </HashLink>
          <Link to={"/category/coleccion"}>
            <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
              COLECCION
            </Button>
          </Link>
          <Link to={"/category/sabores"}>
            <Button _hover={{ bg: "#ff6d6d" }} variant="ghost">
              SABORES
            </Button>
          </Link>
           <CartWidget /> 
        </Box>
      </Box>
    </>
  );
};
