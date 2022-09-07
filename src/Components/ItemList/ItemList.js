import { Item } from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../Services/Firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

export const ItemList = () => {
  const { categoryId } = useParams();
  const getProductsFirestore = () => getProducts(categoryId);

  const { data, isLoading } = useAsync(getProductsFirestore, [
    categoryId,
  ]);


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
    <div className="Itemlist" id="AllProducts">
      {data.length
        ? data.map((product) => {
            return (
              <Item
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                thumbnail={product.thumbnail}
                stock={product.stock}
              />
            );
          })
        : ""}
    </div>
  );
};
