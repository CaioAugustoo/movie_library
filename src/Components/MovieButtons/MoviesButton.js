import React from "react";
import { MoviesCTA } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoviesButton = ({ text, icon, onClick }) => {
  return (
    <MoviesCTA onClick={onClick}>
      <FontAwesomeIcon style={{ marginRight: "0.625rem" }} icon={icon} />
      {text}
    </MoviesCTA>
  );
};

export default MoviesButton;
