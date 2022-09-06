import {
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
  limit,
} from "firebase/firestore";
import { database } from "../../Services/Firebase/index";

export const getProducts = (categoryId) => {
  const filterCategory = !categoryId
    ? query(collection(database, "products"), limit(12))
    : query(
        collection(database, "products"),
        where("category", "==", categoryId)
      );
  return getDocs(filterCategory)
    .then((response) => {
      const productsFromDocs = response.docs.map((prod) => {
        const data = prod.data();
        return { id: prod.id, ...data };
      });
      return productsFromDocs;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProduct = (productId) => {
  return getDoc(doc(database, "products", productId))
    .then((response) => {
      const data = response.data();
      const productObj = { id: response.id, ...data };
      return productObj;
    })
    .catch((error) => {
      return console.log(error);
    });
};
