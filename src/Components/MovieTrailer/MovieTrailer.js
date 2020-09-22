import React from "react";
import { useParams } from "react-router-dom";
import MovieTrailerPlayer from "./MovieTrailerPlayer";
import ApiKey from '../../services/apikey';

const TopRatedSection = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const params = useParams();
  React.useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${ApiKey}`
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchMovie();
    
  }, [params]);

  return (
    <React.Fragment>
      {!loading && data !== null && <MovieTrailerPlayer dataPlayer={data} />}
    </React.Fragment>
  );
};

export default TopRatedSection;
