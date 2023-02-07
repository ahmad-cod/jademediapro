import { useState, useEffect } from "react";

const useWidth = (content, mobileWidth, desktopWidth) => {
  const [data, setData] = useState(content);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState();
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const getProductsPerPage = () => {
    const width = window.innerWidth;
    width <= "800" ? setDataPerPage(mobileWidth) : setDataPerPage(desktopWidth);
  };
  useEffect(() => {
    getProductsPerPage();
    window.addEventListener("resize", getProductsPerPage);
    return () => window.removeEventListener("resize", getProductsPerPage);
  });
  return [currentData, currentPage, setCurrentPage, dataPerPage, data, setData];
};
export default useWidth;
