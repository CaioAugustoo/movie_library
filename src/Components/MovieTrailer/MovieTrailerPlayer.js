import React from "react";
import { MoviePlayer } from "./style";

const MovieTrailerPlayer = ({ dataPlayer }) => {
  // Take only the "trailer" type
  const trailerFilter = dataPlayer.results.filter(
    (movie) => movie.type === "Trailer"
  );
  return (
    <>
      {dataPlayer.results.length !== 0 && (
        <MoviePlayer>
          <iframe
            title="player"
            width="940"
            height="529"
            src={`https://www.youtube.com/embed/${trailerFilter[0].key}?autoplay=1`}
            autoPlay="1"
          ></iframe>
        </MoviePlayer>
      )}
    </>
  );
};

export default MovieTrailerPlayer;
