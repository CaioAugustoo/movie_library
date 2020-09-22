import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NoResultsSection, NoResultsContent } from "./style";
import { useNavigate } from "react-router-dom";
import NotFound from "../../svg/page_not.svg";
import MoviesButton from "../MovieButtons/MoviesButton";

const NoResults = ({ SearchErrorText }) => {
  const navigate = useNavigate();
  return (
    <NoResultsSection>
      <NoResultsContent>
        <h1>Oops!!</h1>
        <p>{SearchErrorText}</p>
        <img src={NotFound} width="500" alt="No results" />
        <MoviesButton icon={faHome} text="Home" onClick={() => navigate("/")} />
      </NoResultsContent>
    </NoResultsSection>
  );
};

export default NoResults;
