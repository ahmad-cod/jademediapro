import Image from "next/image";
import React from "react";
import { MostViewedCard } from "../components";
import { mostViewedData } from "../data/most-viewed/mostViewedData";
import { Pagination } from "../components";
import { mostviewedthumbnail } from "../images";
import useWidth from "../hooks/useWidth";
const MostViewed = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data] =
    useWidth(mostViewedData, 3, 3);

  return (
    <div className="px-10 md:px-20">
      <div>
        <h3 className="text-[50px] text-[#242526]">Most Recent</h3>
      </div>

      {currentData.map((data) => (
        <MostViewedCard
          thumbnail={data.thumbnail}
          title={data.title}
          numbrOfViews={data.numbrOfViews}
          uploadTime={data.uploadTime}
          description={data.description}
        />
      ))}
      <Pagination
        cardsPerPage={dataPerPage}
        totalCards={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MostViewed;
