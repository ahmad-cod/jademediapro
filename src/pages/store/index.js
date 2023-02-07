import React, { useState, useEffect } from "react";

import StoreHeader from "../../components/storeComponents/storeHeader";
import { productCategories, products } from "../../data/storeData";
import CategoryFilter from "../../components/CategoryFilter";
import ProductCard from "../../components/storeComponents/productCard";
import Pagination from "../../components/Pagination";
import styles from "../../styles/Store.module.css";
import StoreServices from "../../components/storeComponents/storeServices";
import usePagination from "../../hooks/usePagination";
const Store = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data, setData] =
    usePagination(products, 4, 12);
  return (
    <>
      <header>
        <StoreHeader />
      </header>
      <main className={styles.main}>
        <StoreServices />
        <CategoryFilter
          categories={productCategories}
          setCategory={setData}
          filterContent={products}
        />
        <ProductCard products={currentData} />
        <Pagination
          cardsPerPage={dataPerPage}
          totalCards={data.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </>
  );
};

export default Store;
