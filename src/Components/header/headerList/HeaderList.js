import React from "react";
import { HeaderNavigation } from "./HeaderListStyled";
import mainRoutes from "../../../routes/mainRoutes";
const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderNavigation>
      <ul className="navigationList">
        {mainRoutes.map((item) => (
          <li key={item.path} className="navigationListItem">
            <a href={item.path} className="navigationListItemAnchor">
              {item.name[language]}
            </a>
          </li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
