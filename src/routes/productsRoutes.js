import ProductList from "../Components/ProductList/ProductList";

export const productsRoutes = [
  {
    name: "Мобильные телефоны",
    path: "/phones",
    component: ProductList,
    exact: true,
    category: "phones",
  },
  {
    name: "Ноутбуки",
    path: "/laptops",
    component: ProductList,
    exact: true,
    category: "laptops",
  },
];
