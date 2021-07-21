import React from "react";
import { HeaderListStyled } from "./HeaderListStyled";
import colors from "../../../styles/colors";
import mainRoutes from "../../../routes/mainRoutes";
const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((item) => (
        <li key={item.path} className="headerListItem">
          <a href={item.path} className="headerListLink">
            {item.name[language]}
          </a>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;
