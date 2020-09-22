import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  SearchMoviesSection,
  MovieSection,
  CategoryText,
  MovieStyled,
  MovieTitle,
  MovieIcons,
} from "./style";
import { Container } from "../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotFoundSvg from "../../svg/not_found.svg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import NoResults from "../NoResults/NoResults";

const SearchResults = ({ dataMovie }) => {
  const params = useParams();
  const navigate = useNavigate();
  // If it comes from the API that has total results equal to 0, it returns this
  if (dataMovie.total_results === 0)
    return <NoResults SearchErrorText={`No results for "${params.id}"`} />;
  return (
    <>
      <ReactTooltip />
      <SearchMoviesSection>
        <Container>
          <CategoryText>
            <h1 style={{ textTransform: "uppercase" }}>{params.id}</h1>
            <p>SEARCH RESULTS</p>
          </CategoryText>
          <MovieSection>
            {dataMovie.results.map((movie) => (
              <MovieStyled key={movie.id}>
                <span onClick={() => navigate(`/movie/${movie.id}`)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    onError={({ target }) => (target.src = `${NotFoundSvg}`)}
                  />
                </span>
                <MovieTitle>
                  <p>{movie.title}</p>
                </MovieTitle>

                <MovieIcons>
                  <FontAwesomeIcon
                    icon={faStar}
                    data-background-color="#546e7a"
                    data-html="true"
                    data-tip={`${movie.vote_average} average <br> on ${movie.vote_count} votes`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    data-background-color="#546e7a"
                    data-html="true"
                    data-tip={`${movie.vote_average} average <br> on ${movie.vote_count} votes`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    data-background-color="#546e7a"
                    data-html="true"
                    data-tip={`${movie.vote_average} average <br> on ${movie.vote_count} votes`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    data-background-color="#546e7a"
                    data-html="true"
                    data-tip={`${movie.vote_average} average <br> on ${movie.vote_count} votes`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    data-background-color="#546e7a"
                    data-html="true"
                    data-tip={`${movie.vote_average} average <br> on ${movie.vote_count} votes`}
                  />
                </MovieIcons>
              </MovieStyled>
            ))}
          </MovieSection>
        </Container>
      </SearchMoviesSection>
    </>
  );
};

export default SearchResults;
