import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from "../../Services/Firebase/index";

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const filterCategory = !categoryId
      ? collection(database, "products")
      : query(
          collection(database, "products"),
          where("category", "==", categoryId)
        );
    getDocs(filterCategory).then((response) => {
      const productsFromDocs = response.docs.map((prod) => {
        const data = prod.data();
        return { id: prod.id, ...data };
      });
      setProducts(productsFromDocs);
    });
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
