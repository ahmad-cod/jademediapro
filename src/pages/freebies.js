import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import { freebiesHeader } from "../images";
import { ImageWithHeader } from "../components";
import FreebiesCard from "../components/FreebiesCard";
import { freebiesData } from "../data/freebies-card/freebies-data";
import styles from "../styles/freebies.module.css";
import { MainWrapper } from "@/components/Layout";

const Freebies = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data, setData] =
    usePagination(freebiesData, 4, 12);
  const freebiesCategories = [
    "Illustrations",
    "Books",
    "Mockup",
    "Templates",
    "Software",
    "Tutorials",
  ];
  return (
    <MainWrapper headerType={1} title="Freebies - Jade Media Pro">
      <ImageWithHeader
        title="Everything you need for growth and development"
        subtitle="Free daily high-quality design resources hand-picked for creatives, designers and developers, ranging from fonts, mockups, graphics, templates & more from amazing artists."
        headerImage={freebiesHeader}
      />

      <div className={styles.main_container}>
        <CategoryFilter
          categories={freebiesCategories}
          filterContent={freebiesData}
          setCategory={setData}
        />

        <div className={styles.freebies_container}>
          {currentData.map((data, index) => (
            <FreebiesCard key={index} format={data.format} title={data.title} />
          ))}
        </div>
        <Pagination
          cardsPerPage={dataPerPage}
          totalCards={data.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </MainWrapper>
  );
};

export default Freebies;
