import React from "react";
// import data from "../../data";
import ProductListItem from "../ProductListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

const ProductList = ({ products = [], addToCart }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductListItem
          product={product}
          key={product.id}
          addToCart={addToCart}
        />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
