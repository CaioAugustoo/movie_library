import React from "react";
import ResultsMovies from "./SearchMovies";
import { useParams } from "react-router-dom";
import { MainStyled } from "./style";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import ApiKey from '../../services/apikey';

const SearchMovie = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const params = useParams();

  React.useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${params.id}&page=${currentPage}`
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
    document.title = `${params.id} - Search Results`;
  }, [currentPage, params.id]);
  // if it comes from the API that has total results is equal from 0, it returns this
  if (loading && data && data.total_results === 0) return null;
  return (
    <React.Fragment>
      <MainStyled>
        {loading && <Loading />}
        <Header />
        {!loading && data && <ResultsMovies dataMovie={data} />}
        {!loading && data && (
          <Pagination
            loading={loading}
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </MainStyled>
      <p style={{ display: "none" }}>{pages}</p>
    </React.Fragment>
  );
};

export default SearchMovie;
