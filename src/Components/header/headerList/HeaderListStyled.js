import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;
  .headerListItem:not(:last-child) {
    margin-right: 20px;
  }
  .headerListLink {
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => props.colors.darkColors.main};
    &:hover {
      color: ${(props) => props.colors.darkColors.active};
    }
  }
`;