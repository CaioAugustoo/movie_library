import React from "react";
import { MainStyled } from "./style";
import Pagination from "../Pagination/Pagination";
import UpComingMovies from "./UpcomingMovies";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import ApiKey from '../../services/apikey';

const UpcomingSection = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&page=${currentPage}`
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
    document.title = "Upcoming Movies";
  }, [currentPage]);

  return (
    <React.Fragment>
      <MainStyled>
        {loading && <Loading />}
        <Header />
        {!loading && data && <UpComingMovies dataMovie={data} />}
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

export default UpcomingSection;
