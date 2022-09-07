import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./ItemDetailContainer.css";
import { getProduct } from "../../Services/Firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const getProductsFirestore = () => getProduct(productId);

  const { data, isLoading } = useAsync(getProductsFirestore, [productId]);

  if (isLoading) {
    return (
      <div className="cokeloading" id="AllProducts">
        <img
          id="cokeloading"
          src="https://i.ibb.co/x26B0c3/coke.png"
          alt="cokeloading"
        />
      </div>
    );
  }

  return (
    <>
      <Box w={"100vw"} className="itemDetailContainer">
        <ItemDetail {...data} />
      </Box>
    </>
  );
};
