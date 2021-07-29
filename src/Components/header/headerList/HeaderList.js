import React from "react";
import { HeaderNavigation } from "./HeaderListStyled";
import mainRoutes from "../../../routes/mainRoutes";
import { NavLink } from "react-router-dom";
const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderNavigation>
      <ul className="navigationList">
        {mainRoutes.map((item) => (
          <li key={item.path} className="navigationListItem">
            <NavLink
              to={item.path}
              className="navigationListItemAnchor"
              activeClassName="activenavigationListItemAnchor"
              exact={item.exact}
            >
              {item.name[language]}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
