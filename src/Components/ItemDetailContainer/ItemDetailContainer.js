import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../Services/Firebase/index";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  useEffect(() => {
    getDoc(doc(database, "products", productId))
      .then((response) => {
        const data = response.data();
        const productObj = { id: response.id, ...data };
        setProduct(productObj);
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
