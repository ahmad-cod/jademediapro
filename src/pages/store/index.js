import React, { useState, useEffect } from "react";

import StoreHeader from "../../components/storeComponents/storeHeader";
import { productCategories, products } from "../../data/storeData";
import CategoryFilter from "../../components/CategoryFilter";
import ProductCard from "../../components/storeComponents/productCard";
import Pagination from "../../components/Pagination";
import styles from "../../styles/Store.module.css";
import StoreServices from "../../components/storeComponents/storeServices";
import usePagination from "../../hooks/usePagination";
import { MainWrapper } from "@/components/Layout";
const Store = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data, setData] =
    usePagination(products, 4, 12);
  return (
    <>
      <MainWrapper
        headerType={1}
        backgroundColor="transparent"
        color="#242526"
        paint-header-on-scroll
        title="Store - Jade Media Pro"
      >
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
      </MainWrapper>
    </>
  );
};

export default Store;
