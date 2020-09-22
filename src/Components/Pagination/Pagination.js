import React from "react";
import { PaginationStyled, PaginationButton } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ loading, data, currentPage, setCurrentPage }) => {
  return (
    <div>
      {/* If it comes from the API that has total results is different from 0, it returns this */}
      {!loading && data && data.results.length >= 1 && (
        <PaginationStyled>
          {currentPage !== 1 ? (
            <PaginationButton onClick={() => setCurrentPage(currentPage - 1)}>
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faArrowLeft}
              />
              Page {currentPage - 1}
            </PaginationButton>
          ) : (
            "‎ "
          )}
          {currentPage !== data.total_pages ? (
            <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
              Page {currentPage + 1}
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faArrowRight}
              />{" "}
            </PaginationButton>
          ) : (
            " "
          )}
        </PaginationStyled>
      )}
    </div>
  );
};

export default Pagination;
