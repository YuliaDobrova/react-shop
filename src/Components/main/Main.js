import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";
import LaptopList from "../laptopList/LaptopList";

const Main = () => {
  return (
    <>
      <PhoneList phones={data.phones} />
      <LaptopList laptops={data.laptops} />
    </>
  );
};

export default Main;
