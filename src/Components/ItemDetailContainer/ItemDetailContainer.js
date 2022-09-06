import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./ItemDetailContainer.css";
import { getProduct } from "../../Services/Firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  useEffect(() => {
    getProduct(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <>
      <Box w={"100vw"} className="itemDetailContainer">
        <ItemDetail {...product} />
      </Box>
    </>
  );
};
