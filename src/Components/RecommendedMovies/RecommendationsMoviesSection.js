import React from "react";
import { MainStyled } from "./style";
import { useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import RecommendationsMovies from "./RecommendationsMovies";
import Loading from "../Loading/Loading";
import ApiKey from '../../services/apikey';

const RecommendationsMoviesSection = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const params = useParams();

  React.useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${ApiKey}&page=${currentPage}`
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
      const arrayPages = [];
      for (let i = 1; i <= json.total_pages; i++) {
        arrayPages.push(i);
      }
      setPages(arrayPages);
    }
    fetchMovie();
  }, [currentPage, params.id]);

  return (
    <React.Fragment>
      <MainStyled>
        {loading && <Loading />}
        {!loading && data && <RecommendationsMovies dataMovie={data} />}
        <Pagination
          loading={loading}
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </MainStyled>
      <p style={{ display: "none" }}>{pages}</p>
    </React.Fragment>
  );
};

export default RecommendationsMoviesSection;
