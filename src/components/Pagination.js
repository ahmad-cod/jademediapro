import React, { useState } from "react";
import { MdEast, MdWest } from "react-icons/md";
import styles from "../styles/Pagination.module.css";

const Pagination = ({
  cardsPerPage,
  totalCards,
  currentPage,
  setCurrentPage,
}) => {
  //number of page
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  // pagination icons navigator

  const handlePrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage === pageNumbers.length) return;
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pageNext}>
        <button onClick={handlePrevious}>
          <MdWest /> Previous
        </button>
      </div>
      <div className={styles.pageNumber}>
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            className={`page-link ${
              currentPage === number ? styles.pageActive : ""
            }`}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div className={styles.pageNext}>
        <button onClick={handleNext}>Next {<MdEast />}</button>
      </div>
    </div>
  );
};

export default Pagination;
