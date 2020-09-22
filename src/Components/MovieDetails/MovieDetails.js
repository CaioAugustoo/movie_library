import React from "react";
import {
  MovieIDSection,
  MovieIDAbout,
  MovieIDTitle,
  MovieIDGenres,
  MovieIDPoster,
  MovieIDDetails,
  MovieIDSynopsis,
  MovieIDButtons,
  MovieIDData,
  CloseButton,
} from "./style";
import {
  faArrowLeft,
  faLink,
  faPlay,
  faDotCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../styles/GlobalStyle";
import MoviesButton from "../MovieButtons/MoviesButton";
import { useParams } from "react-router-dom";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import NotFoundSvg from "../../svg/not_found.svg";
import RecommendedMovies from "../RecommendedMovies/RecommendationsMoviesSection";

const MovieDetails = ({ dataMovie, dataPlayer }) => {
  const navigate = useNavigate();
  const [player, setPlayer] = React.useState(false);
  const params = useParams();
  document.title = `${dataMovie.title} - Movie Library`;
  return (
    <MovieIDSection>
      <Container>
        <MovieIDAbout>
          <MovieIDPoster>
            <img
              src={`https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`}
              alt={dataMovie.title}
              onError={({ target }) => (target.src = `${NotFoundSvg}`)}
            />
          </MovieIDPoster>

          <MovieIDDetails>
            <MovieIDTitle>
              <h1>{dataMovie.title}</h1>
              <p>{dataMovie.tagline}</p>
            </MovieIDTitle>

            <MovieIDData>
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ transform: "scale(0.8)", opacity: "0.5" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ transform: "scale(0.8)", opacity: "0.5" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ transform: "scale(0.8)", opacity: "0.5" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ transform: "scale(0.8)", opacity: "0.5" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ transform: "scale(0.8)", opacity: "0.5" }}
                />
                <p style={{ marginLeft: "10px" }}>{dataMovie.vote_average}</p>
              </div>
              <div>
                <p>
                  {dataMovie.spoken_languages.map(
                    (language) => `${language.name} `
                  )}{" "}
                  /{" "}
                </p>
                <p>{dataMovie.runtime} MIN.</p>
                {/* <p>{dataMovie.release_date}</p>  */}
              </div>
            </MovieIDData>

            <MovieIDGenres>
              <p>GENRES</p>

              <div>
                {dataMovie.genres.map((genre, index) => (
                  <div key={index}>
                    <FontAwesomeIcon
                      icon={faDotCircle}
                      style={{ transform: "scale(0.7)", opacity: "0.5" }}
                    />
                    <p>{genre.name}</p>
                  </div>
                ))}
              </div>
            </MovieIDGenres>

            <MovieIDSynopsis>
              <p>THE SYNOPSIS</p>
              <p>{dataMovie.overview}</p>
            </MovieIDSynopsis>

            <MovieIDButtons>
              <MoviesButton
                text="Home"
                icon={faArrowLeft}
                onClick={() => navigate("/")}
              />
              <a
                href={`//www.themoviedb.org/movie/${dataMovie.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MoviesButton text="TMDB" icon={faLink} />
              </a>

              <MoviesButton
                text="Trailer"
                icon={faPlay}
                onClick={() => setPlayer(!player)}
              />
            </MovieIDButtons>

            {player && (
              <>
                <MovieTrailer dataPlayer
                  src={`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=acff09132ee8b54bee9960d2117ceea8`}
                />  

                <CloseButton onClick={() => setPlayer(false)}>
                  &times;
                </CloseButton>
              </>
            )}
          </MovieIDDetails>
        </MovieIDAbout>

        <RecommendedMovies />
      </Container>
    </MovieIDSection>
  );
};

export default MovieDetails;
