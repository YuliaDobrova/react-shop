import React from "react";
import data from "../../data";
import PhoneListItem from "../phoneListItem/PhoneListItem";
import { PhoneListStyled } from "./PhoneListStyled";

const PhoneList = () => {
  return (
    <PhoneListStyled>
      {data.phones.map((item) => (
        <PhoneListItem phone={item} key={item.id} />
      ))}
    </PhoneListStyled>
  );
};

export default PhoneList;
