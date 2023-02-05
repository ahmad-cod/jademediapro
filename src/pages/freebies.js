import React from "react";
import Image from "next/image";
import { pdf } from "../images";
import { freebiesHeader } from "../images";
import { CategoryFilter, ImageWithHeader, Pagination } from "../components";
import FreebiesCard from "../components/FreebiesCard";
import { freebiesData } from "../data/freebies-card/freebies-data";
import useWidth from "../hooks/UseWidth";

const Freebies = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data, setData] =
    useWidth(freebiesData, 4, 12);
  const freebieCategories = [
    "Illustration",
    "Books",
    "Mockup",
    "Templates",
    "Software",
    "Tutorial",
  ];
  return (
    <>
      <ImageWithHeader
        title="Everything you need for growth and development"
        subtitle="Free daily high-quality design resources hand-picked for creatives, designers and developers, ranging from fonts, mockups, graphics, templates & more from amazing artists."
        headerImage={freebiesHeader}
      />
      <CategoryFilter
        categories={freebieCategories}
        setCategory={setData}
        filterContent={freebiesData}
      />

      <div className="main-container">
        <div></div>

        <div className="flex mt-16 justify-between flex-wrap gap-20">
          {currentData.map((data) => (
            <FreebiesCard format={data.format} title={data.title} />
          ))}
        </div>
      </div>
      <Pagination
        cardsPerPage={dataPerPage}
        totalCards={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Freebies;
