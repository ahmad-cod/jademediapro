import React from "react";

import { jobData } from "../data/jobData";

const useFilter = (setData, keyword) => {
  const filterByKeyWord = (category) => {
    const result = jobData?.filter((content) => {
      return content.keyword === category;
    });
    setData(result);
  };
  console.log(keyword);

  return [filterByKeyWord];
};

export default useFilter;
