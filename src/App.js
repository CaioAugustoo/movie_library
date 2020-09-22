import React from "react";
import ReactTooltip from "react-tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import SideBar from "./Components/Sidebar/SideBar";
import Popular from "./Components/Popular/PopularSection";
import TopRated from "./Components/TopRated/TopRatedSection";
import UpComing from "./Components/Upcoming/UpcomingSection";
import Search from "./Components/SearchMovie/SearchMovieSection";
import MovieDetailsSection from "./Components/MovieDetails/MovieDetailsSection";
import PageNotFound from "./Components/404/404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ReactTooltip />
        <SideBar />
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="TopRated" element={<TopRated />} />
          <Route path="Upcoming" element={<UpComing />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetailsSection />} />
          <Route path="/search/*" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};
export default App;
