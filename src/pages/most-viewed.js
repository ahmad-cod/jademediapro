import Image from "next/image";
import React from "react";
import { MostViewedCard } from "../components";
import { mostViewedData } from "../data/most-viewed/mostViewedData";
import { mostviewedthumbnail } from "../images";
import styles from "../styles/most_viewed.module.css";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";
const MostViewed = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data] =
    usePagination(mostViewedData, 3, 3);
  return (
    <div className={styles.mostviewed_maincontainer}>
      <div className={styles.mostviewed_contentbox}>
        <div>
          <h3 className={styles.mostrecent_header}>Most Recent</h3>
        </div>

        {currentData.map((data, i) => (
          <MostViewedCard
            thumbnail={data.thumbnail}
            title={data.title}
            numbrOfViews={data.numbrOfViews}
            uploadTime={data.uploadTime}
            description={data.description}
            key={i}
          />
        ))}
        <Pagination
          cardsPerPage={dataPerPage}
          totalCards={data.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MostViewed;
