import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductbyId } from "../../Data/products";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  useEffect(() => {
    getProductbyId(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <Box className="containerItemDetail">
        <ItemDetail {...product} />
      </Box>
    </>
  );
};
