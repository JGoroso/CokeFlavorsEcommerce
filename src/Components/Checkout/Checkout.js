import { React, useContext, useState } from "react";
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { CartContext } from "../../Context/CartContext";
import { database } from "../../Services/Firebase";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { Form } from "../Form/Form";

export const Checkout = () => {
  const { cart, totaPrice, clearCart } = useContext(CartContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [orderId, setOrderId] = useState();
  const [nameClient, setNameClient] = useState();
  const [comprobant, setComprobant] = useState();

  const createOrder = async (
    name,
    email,
    tel,
    direccion,
    ciudad,
    provincia,
    obs
  ) => {
    const order = {
      date: new Date(),
      client: {
        firstName: name,
        email: email,
        tel: tel,
        direccion: direccion,
        ciudad: ciudad,
        provincia: provincia,
        observaciones: obs || "",
      },
      items: cart,
      total: totaPrice(),
    };

    // Creamos la funcion que nos va a permitir actualizar datos de nuestros productos
    const batch = writeBatch(database);

    // Mapeo los ids de los productos agregados en una const
    const ids = cart.map((prod) => prod.id);

    // Referencia a una collecion especifica
    const collectionProducts = collection(database, "products");

    // Realizo una consulta para obtener los productos de la bd que coincidan con los productos de mi cart
    const productsFromDbInCart = await getDocs(
      query(collectionProducts, where(documentId(), "in", ids))
    );

    // Obtengo los docs de la anterior consulta
    const { docs } = productsFromDbInCart;

    // Creo una const donde se guardaran aquellos productos que esten fuera de stock
    const outStockProducts = [];

    docs.forEach((doc) => {
      //Obtenemos todos los datos del doc
      const dataDoc = doc.data();
      //Obtenemos el stock de los docs
      const stockFromDb = dataDoc.stock;

      //Buscamos el producto que este en el carrito que coincida con el de firestore y si existe obtenemos la cantidad agregada
      const productOnCart = cart.find((prod) => prod.id === doc.id);

      const prodQuantity = productOnCart?.quantity;
      if (prodQuantity <= stockFromDb) {
        batch.update(doc.ref, { stock: stockFromDb - prodQuantity });
      } else {
        outStockProducts.push({ id: doc.id, ...dataDoc });
      }
    });

    if (outStockProducts.length === 0) {
      await batch.commit();
      const orderCreate = collection(database, "orders");
      const orderAdd = await addDoc(orderCreate, order);
      setNameClient(name);
      setOrderId(orderAdd.id);

      setComprobant(true);
      onOpen();
      clearCart();
    } else {
      console.log("existen productos fuera de stock");
    }
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Form createOrder={createOrder} />
      </Flex>
      {comprobant ? (
        <>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>¡Gracias por tu compra {nameClient}! </ModalHeader>

              <ModalBody>
                Por favor guarda el siguiente comprobante de compra: {orderId}
              </ModalBody>

              <ModalFooter>
                <Link to="/">
                  <Button colorScheme="red" mr={3}>
                    Seguir comprando
                  </Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        ""
      )}
    </>
  );
};
