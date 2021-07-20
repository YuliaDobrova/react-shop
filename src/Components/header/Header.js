import React from "react";
import HeaderList from "./headerList/HeaderList";
import { HeaderStyled } from "./headerList/HeaderStyled";
import colors from "../../styles/colors";

const Header = () => {
  return (
    <HeaderStyled colors={colors}>
      <h2 className="headerLogo">Logo</h2>
      <nav>
        <HeaderList />
      </nav>
    </HeaderStyled>
  );
};

export default Header;
