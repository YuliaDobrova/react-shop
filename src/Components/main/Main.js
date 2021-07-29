import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import { getAllAdvByCategory } from "../../services/api";
import AdvForm from "../admin/AdvForm";
import CartList from "../cartList/CartList";
import ProductList from "../ProductList/ProductList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

const getDataByCategory = async (category) => {
  const response = await getAllAdvByCategory(category);
  return response.data
    ? Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }))
    : [];
};

class Main extends Component {
  state = {
    cart: [],
    products: { phones: [], laptops: [] },
  };

  async componentDidMount() {
    const phones = await getDataByCategory("phones");
    const laptops = await getDataByCategory("laptops");
    this.setState({ products: { phones, laptops } });
  }

  addNewAdv = (product) => {
    this.setState((prev) => ({
      products: {
        ...prev.products,
        [product.category]: [...prev.products[product.category], product],
      },
    }));
  };

  addToCart = (product) => {
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((product) => product.id !== id),
    }));
  };

  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    return (
      <MainStyled>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </MainStyled>
    );
  }
}

export default Main;
