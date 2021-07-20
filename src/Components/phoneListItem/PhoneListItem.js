import React from "react";
import colors from "../../styles/colors";
import { PhoneListItemStyled } from "./PhoneListItemStyled";

const PhoneListItem = ({ phone }) => {
  return (
    <PhoneListItemStyled colors={colors}>
      <div className="phoneListItemWrapper">
        <h3 className="phoneListItemTitle">{phone.name}</h3>
        <img src={phone.image} alt={phone.name} className="phoneListItemImg" />
        <p className="phoneListItemSale">
          <span className="phoneListItemName">Sale:</span>{" "}
          {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="phoneListItemDescription">
          <span className="phoneListItemName">Description: </span>
          {phone.description}
        </p>
        <p className="phoneListItemPrice">
          <span className="phoneListItemName">Price:</span>{" "}
          <span>{phone.price}</span>
        </p>
        <div className="phoneListItemButtonsGroup">
          <button type="button" className="addToCartButton">
            Add to Cart
          </button>
          <button type="button" className="detailsButton">
            Details
          </button>
        </div>
      </div>
    </PhoneListItemStyled>
  );
};

export default PhoneListItem;
