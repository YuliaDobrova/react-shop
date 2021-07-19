import React from "react";
import data from "../../data";
import PhoneListItem from "../phoneListItem/PhoneListItem";

const PhoneList = () => {
  return (
    <ul>
      {data.phones.map((item) => (
        <PhoneListItem phone={item} key={item.id} />
      ))}
    </ul>
  );
};

export default PhoneList;
