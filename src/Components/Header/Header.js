import React from "react";
import InputSearch from "../InputSearch/InputSearch";
import MenuMobile from "../MenuMobile/MenuMobile";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <MenuMobile />
      <InputSearch placeholder="Enter a movie name" />
    </StyledHeader>
  );
};

export default Header;
