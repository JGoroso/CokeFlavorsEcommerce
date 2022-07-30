import React, { useEffect, useState } from "react";
import { productList } from "../../Data/products";
import { Item } from "./Item";
import "./ItemList.css";

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getProductsDB = async () => {
    try {
      const get = await getProducts;
      setProducts(get);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getProductsDB();
  }, []);

  return (
    <div className="Itemlist">
      {products.length ? (
        products.map((product) => {
          return (
            <Item
              key={product.id}
              name={product.name}
              price={product.price}
              thumbnail={product.thumbnail}
              stock={product.stock}
            />
          );
        })
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};
