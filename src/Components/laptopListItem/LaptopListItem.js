import React from "react";
import colors from "../../styles/colors";
import { LaptopListItemStyled } from "./LaptopListItemStyled";

const LaptopListItem = ({ laptop }) => {
  return (
    <LaptopListItemStyled colors={colors}>
      <div className="laptopListItemWrapper">
        <h3 className="laptopListItemTitle">{laptop.name}</h3>
        <img
          src={laptop.image}
          alt={laptop.name}
          className="laptopListItemImg"
        />
        <p className="laptopListItemSale">
          <span className="laptopListItemName">Sale:</span>{" "}
          {laptop.isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="laptopListItemDescription">
          <span className="laptopListItemName">Description:</span>
          {laptop.description}
        </p>
        <p>
          <span className="laptopListItemName">Price:</span>{" "}
          <span>{laptop.price}</span>
        </p>
        <div className="laptopListItemButtonsGroup">
          <button type="button" className="addToCartButton">
            Add to Cart
          </button>
          <button type="button" className="detailsButton">
            Details
          </button>
        </div>
      </div>
    </LaptopListItemStyled>
  );
};

export default LaptopListItem;
