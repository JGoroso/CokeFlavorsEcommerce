import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../Services/Firebase/firestore";

export const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getProducts(categoryId)
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 500);
  }, [categoryId]);

  if (isLoading) {
    return (
      <div className="cokeloading" id="AllProducts">
        <img id="cokeloading" src="https://i.ibb.co/x26B0c3/coke.png" alt="cokeloading" />
      </div>
    );
  }
  
  return (
    <div className="Itemlist" id="AllProducts">
      {products.length
        ? products.map((product) => {
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
