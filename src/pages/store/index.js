import React, { useState, useEffect } from "react";

import StoreHeader from "../../components/storeComponents/storeHeader";
import { productCategories, products } from "../../data/storeData";
import CategoryFilter from "../../components/CategoryFilter";
import ProductCard from "../../components/storeComponents/productCard";
import Pagination from "../../components/Pagination";
import styles from "../../styles/Store.module.css";
import StoreServices from "../../components/storeComponents/storeServices";
const Store = () => {
  const [product, setProduct] = useState(products);
  const [categories, setCategories] = useState(productCategories);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState();
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const getProductsPerPage = () => {
    const width = window.innerWidth;
    width <= "800" ? setProductsPerPage(4) : setProductsPerPage(12);
  };
  useEffect(() => {
    getProductsPerPage();
    window.addEventListener("resize", getProductsPerPage);
    return () => window.removeEventListener("resize", getProductsPerPage);
  });

  return (
    <>
      <header>
        <StoreHeader />
      </header>
      <main className={styles.main}>
        <StoreServices />
        <CategoryFilter
          categories={categories}
          setCategory={setProduct}
          filterContent={products}
        />
        <ProductCard products={currentProducts} />
        <Pagination
          cardsPerPage={productsPerPage}
          totalCards={product.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </>
  );
};

export default Store;
