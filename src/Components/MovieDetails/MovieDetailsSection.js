import React from "react";
import { MainStyled } from "./style";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import ApiKey from '../../services/apikey';

const MovieDetailsSection = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${ApiKey}`
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchMovie();
  }, [params]);

  return (
    <React.Fragment>
      <MainStyled>
        <Header />
        {loading && <Loading />}
        {!loading && data && <MovieDetails dataMovie={data} />}
      </MainStyled>
    </React.Fragment>
  );
};

export default MovieDetailsSection;
