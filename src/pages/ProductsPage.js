import { NavLink, Route, Switch } from "react-router-dom";
// import ProductList from "../Components/ProductList/ProductList";
// import Section from "../Components/section/Section";
import { productsRoutes } from "../routes/productsRoutes";
import { ProductPageContainer } from "./ProductsPageStyled";

const ProductsPage = ({ match }) => {
  return (
    <ProductPageContainer>
      {/* <h2>ProductsPage</h2> */}
      <nav>
        <ul className="navigationList">
          {productsRoutes.map((route) => (
            <li className="navigationListItem" key={route.path}>
              <NavLink
                className="navigationListItemAnchor"
                activeClassName="activenavigationListItemAnchor"
                to={{
                  pathname: match.url + route.path,
                  state: { category: route.category },
                }}
                exact={route.exact}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        {productsRoutes.map((route) => (
          <Route
            path={match.path + route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </ProductPageContainer>
    // {/*
    // <Section title={"Мобильные телефоны"}>
    //   <ProductList
    //     products={this.state.products.phones}
    //     addToCart={this.addToCart}
    //     removeFromCart={this.removeFromCart}
    //     removeAllFromCart={this.removeAllFromCart}
    //   />
    // </Section>
    // <Section title={"Ноутбуки"}>
    //   <ProductList
    //     products={this.state.products.laptops}
    //     addToCart={this.addToCart}
    //     removeFromCart={this.removeFromCart}
    //     removeAllFromCart={this.removeAllFromCart}
    //   />
    // </Section> */}
  );
};

export default ProductsPage;
