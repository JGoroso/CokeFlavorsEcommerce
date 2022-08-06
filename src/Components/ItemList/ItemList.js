import React, { useEffect, useState } from "react";
import { getProductbyCategory, productList } from "./../../Data/products";
import { Item } from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 500);
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
    if (!categoryId) {
      getProductsDB();
    } else {
      getProductbyCategory(categoryId).then((products) => {
        setProducts(products);
      });
    }
  }, [categoryId]);

  return (
    <div className="Itemlist" id="AllProducts">
      {products.length ? (
        products.map((product) => {
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
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};
