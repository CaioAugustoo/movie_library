import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UpcomingMoviesSection,
  MovieSection,
  CategoryText,
  MovieStyled,
  MovieTitle,
  MovieIcons,
} from "./style";
import { Container } from "../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import NotFoundSvg from "../../svg/not_found.svg";

const UpcomingMovies = ({ dataMovie }) => {
  const navigate = useNavigate();
  return (
    <>
      <ReactTooltip />
      <UpcomingMoviesSection>
        <Container>
          <CategoryText>
            <h1>UPCOMING</h1>
            <p>MOVIES</p>
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
      </UpcomingMoviesSection>
    </>
  );
};

export default UpcomingMovies;
