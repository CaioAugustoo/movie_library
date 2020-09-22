import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHourglass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { SideBarStyled } from "./style";

const SideBar = () => {
  return (
    <SideBarStyled>
      <nav>
        <div style={{ margin: "1.875rem 0rem 0rem -1.5625rem" }}>
          <FontAwesomeIcon icon={faHeart} />
          <NavLink end to="/">
            Popular
          </NavLink>
        </div>
        <div style={{ margin: "1.875rem 0rem 0rem -1.5625rem" }}>
          <FontAwesomeIcon icon={faStar} />
          <NavLink to="TopRated">Top Rated</NavLink>
        </div>
        <div style={{ margin: "1.875rem 0rem 0rem -1.5625rem" }}>
          <FontAwesomeIcon icon={faHourglass} />
          <NavLink to="Upcoming">Upcoming</NavLink>
        </div>
      </nav>
    </SideBarStyled>
  );
};

export default SideBar;
