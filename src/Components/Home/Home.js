import React from "react";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { Hero } from "../Hero/Hero";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <Hero />
      <ItemListContainer />
    </>
  );
};
