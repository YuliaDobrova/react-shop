import React from "react";
import data from "../../data";
import LaptopListItem from "../laptopListItem/LaptopListItem";

const LaptopList = () => {
  return (
    <ul>
      {data.laptops.map((item) => (
        <LaptopListItem laptop={item} key={item.id} />
      ))}
    </ul>
  );
};

export default LaptopList;
