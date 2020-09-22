import React from "react";
import {
  MenuMobileStyled,
  ToggleMenuIcon,
  MobileItemWrapper,
  MobileItems,
  CloseMenuButton,
} from "./style.js";
import { useNavigate } from 'react-router-dom';

const MenuMobile = () => {
  const navigate = useNavigate()
  const [mobile, setMobile] = React.useState(false);
  mobile
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
  return (
    <>
      <ToggleMenuIcon onClick={() => setMobile(!mobile)}></ToggleMenuIcon>

      <MenuMobileStyled
        id="menu"
        style={{
          transform: mobile ? "translateX(0rem)" : "translateX(-20rem)",
        }}
      >
        <CloseMenuButton
          onClick={() => setMobile(!mobile)}
          style={{ opacity: mobile ? "1" : "0" }}
        >
          &times;
        </CloseMenuButton>
        <MobileItemWrapper>
          <MobileItems onClick={() => navigate('/')}>Popular Movies</MobileItems>
          <MobileItems onClick={() => navigate('/toprated')}>Top Rated Movies</MobileItems>
          <MobileItems onClick={() => navigate('/upcoming')}>Upcoming Movies</MobileItems>
        </MobileItemWrapper>
      </MenuMobileStyled>
    </>
  );
};

export default MenuMobile;
