import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";
import LaptopList from "../laptopList/LaptopList";
import Section from "../section/Section";

const Main = () => {
  return (
    <>
      <Section title={"Мобильные телефоны"}>
        <PhoneList phones={data.phones} />
      </Section>
      <Section title={"Ноутбуки"}>
        <LaptopList laptops={data.laptops} />
      </Section>
    </>
  );
};

export default Main;
