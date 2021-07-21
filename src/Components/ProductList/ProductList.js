import React from "react";
// import data from "../../data";
import ProductListItem from "../ProductListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

const ProductList = ({ products }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
