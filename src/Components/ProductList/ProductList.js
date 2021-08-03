import React, { Component } from "react";
import { connect } from "react-redux";
import { getLaptops, getPhones } from "../../redux/products/productsActions";
import { getAllAdvByCategory } from "../../services/api";
// import data from "../../data";
import ProductListItem from "../ProductListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

class ProductList extends Component {
  async componentDidMount() {
    const res = await getAllAdvByCategory(this.props.category);
    this.props.category === "laptops" && this.props.getLaptops(res);
    this.props.category === "phones" && this.props.getPhones(res);
    console.log(`res`, res);
  }

  render() {
    return (
      <ProductListStyled>
        {this.props.products.map((product) => (
          <ProductListItem
            product={product}
            key={product.id}
            addToCart={this.props.addToCart}
          />
        ))}
      </ProductListStyled>
    );
  }
}

const mapStateToProps = (state, props) => ({
  category: props.location.state.category,
  products: state.products.items[props.location.state.category],
});

export default connect(mapStateToProps, {
  getLaptops: getLaptops,
  getPhones: getPhones,
})(ProductList);

// const ProductList = ({ products = [], addToCart }) => {
//   return (

//   );
// };

// export default ProductList;
