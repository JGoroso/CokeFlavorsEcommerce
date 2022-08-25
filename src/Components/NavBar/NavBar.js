import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const NavBar = (props) => {
  const [nav, setNav] = useState();
  const [logo, setLogo] = useState();
  const location = useLocation();
  useEffect(() => {
    if (window.location.pathname === "/") {
      setNav("#fafafa");
      setLogo("https://media.printables.com/media/prints/152705/images/1435815_c0017fdd-6d1e-42e2-b8ba-a27c223bf26c/thumbs/cover/800x800/png/coke-original-white-logo.webp");
    } else {
      setNav("#232323");
      setLogo("https://i.pinimg.com/originals/19/5d/8d/195d8d67669c89024bde9ca2eb0b3421.png");
    }
  }, [location]);
  return (
    <>
      <Box
        className="navbar"
        display="flex"
        justifyContent="space-around"
        
        color={nav}
      >
        <Link to="/">
          <Box display="flex" alignItems="center">
            <Image
              borderRadius="full"
              w={180}
              src={logo}
              alt="Coke Logo"
            />
            <h2 className="Title">{props.title}</h2>
          </Box>
        </Link>

        <Box display="flex" alignItems="center">
          <HashLink to={"/"}>
            <Button _hover={{ bg: "#gray" }} variant="ghost" fontSize={"md"}>
              HOME
            </Button>
          </HashLink>
          <Link to={"/category/coleccion"}>
            <Button _hover={{ bg: "#gray" }} variant="ghost">
              COLECCION
            </Button>
          </Link>
          <Link to={"/category/sabores"}>
            <Button _hover={{ bg: "#gray" }} variant="ghost">
              SABORES
            </Button>
          </Link>
          <CartWidget />
        </Box>
      </Box>
    </>
  );
};
