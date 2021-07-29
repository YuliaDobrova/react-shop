import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const mainRoutes = [
  {
    name: {
      en: "Home",
      ua: "Головна",
      ru: "Главная",
    },
    path: "/",
    component: HomePage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Products",
      ua: "Продукти",
      ru: "Продукты",
    },
    path: "/products",
    component: ProductsPage,
    exact: false,
    icon: "",
  },
  {
    name: {
      en: "Cart",
      ua: "Кошик",
      ru: "Корзина",
    },
    path: "/cart",
    component: CartPage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Administration",
      ua: "Адміністрування",
      ru: "Администрирование",
    },
    path: "/admin",
    component: AdminPage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Registration",
      ua: "Регистрация",
      ru: "Регистрация",
    },
    path: "/registration",
    component: AuthPage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Login",
      ua: "Увійти",
      ru: "Войти",
    },
    path: "/login",
    component: AuthPage,
    exact: true,
    icon: "",
  },
];

export default mainRoutes;
