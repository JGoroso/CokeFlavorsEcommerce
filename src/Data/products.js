export const productList = [
  {
    id: 1,
    name: "Diet Coke Ginger Lime",
    price: 25,
    thumbnail:
      "https://www.seekpng.com/png/full/116-1166826_diet-coke-ginger-lime-zesty-blood-orange-diet.png",
    stock: 4,
    category: "sabores",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam. Sed eleifend eleifend tellus, in ornare eros tempus at. Cras vehicula eleifend quam, id feugiat felis varius in. ",
  },
  {
    id: 2,
    name: "Coke Caffeine Free",
    price: 60,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/1820/8835/products/coke_large.png?v=1626460401",
    stock: 5,
    category: "sabores",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam.  ",
  },
  {
    id: 3,
    name: "Coke Cherry",
    price: 40,
    thumbnail:
      "http://cdn.shopify.com/s/files/1/0520/1543/1841/products/Chwrgwrerry12oz.png?v=1653581667",
    stock: 6,
    category: "sabores",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam.  ",
  },
  {
    id: 4,
    name: "Orange Vanilla",
    price: 40,
    thumbnail: "https://www.allmart.ca/images/large/CO0355OV_LRG.png",
    stock: 6,
    category: "sabores",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam.  ",
  },
  {
    id: 5,
    name: "Coke StarLight",
    price: 40,
    thumbnail: "https://i.ibb.co/CvQVp1b/starlight-original-7oz.png",
    stock: 6,
    category: "coleccion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam.  ",
  },
  {
    id: 6,
    name: "Coke Byte",
    price: 60,
    thumbnail:
      "https://www.vendingnews.it/wp-content/uploads/2022/04/COCA-COLA-BYTE-SINGOLA.png",
    stock: 6,
    category: "coleccion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam.  ",
  },
  {
    id: 7,
    name: "Coke Marshmellow's",
    price: 40,
    thumbnail:
      "https://www.america-retail.com/static//2022/07/image001-194x300.png",
    stock: 6,
    category: "coleccion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam.  ",
  },
  {
    id: 8,
    name: "Vanilla No Sugar",
    price: 20,
    thumbnail:
      "https://www.coca-colacompany.com/content/dam/journey/au/en/brand-detail/coca-cola/Large_product_shot_Coca-Cola_Vanilla_No_Sugar_updated.png",
    stock: 6,
    category: "sabores",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sollicitudin tortor eu aliquam.  ",
  },
];

export const getProductbyId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList.find((prod) => prod.id == id));
    }, 500);
  });
};

export const getProductbyCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
