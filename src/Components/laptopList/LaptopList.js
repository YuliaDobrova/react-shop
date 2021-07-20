import React from "react";
import data from "../../data";
import LaptopListItem from "../laptopListItem/LaptopListItem";
import { LaptopListStyled } from "./LaptopListStyled";

const LaptopList = () => {
  return (
    <LaptopListStyled>
      {data.laptops.map((item) => (
        <LaptopListItem laptop={item} key={item.id} />
      ))}
    </LaptopListStyled>
  );
};

export default LaptopList;
