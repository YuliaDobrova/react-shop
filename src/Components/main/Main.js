import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";
import LaptopList from "../laptopList/LaptopList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      <Section title={"Мобильные телефоны"}>
        <PhoneList phones={data.phones} />
      </Section>
      <Section title={"Ноутбуки"}>
        <LaptopList laptops={data.laptops} />
      </Section>
    </MainStyled>
  );
};

export default Main;
