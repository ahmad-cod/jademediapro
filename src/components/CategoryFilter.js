import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import styles from "../styles/CategoryFilter.module.css";

const CategoryFilter = ({ setCategory, categories, filterContent }) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState();

  const filterByCategory = (category) => {
    const result = filterContent.filter((blog) => {
      return blog.category === category;
    });
    setFilteredCategory(category);
    setCategory(result);
    setActiveDropdown();
  };
  const handleAll = () => {
    setCategory(filterContent);
    setFilteredCategory(false);
  };

  return (
    <>
      <div className={styles.category_container}>
        <>
          <div className={styles.filter}>
            <div className={styles.filter_button}>
              <button
                onClick={() => setActiveDropdown((current) => !current)}
                className={styles.filter_button}
              >
                Filter
                <span className={styles.arrow_down}>
                  {activeDropdown ? (
                    <RiArrowDropUpLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </span>
              </button>
              <button
                onClick={handleAll}
                className={
                  styles.category_button + !filteredCategory
                    ? styles.active
                    : ""
                }
              >
                All
              </button>
            </div>
            <div
              className={
                activeDropdown ? styles.display_filter : styles.offscreen
              }
            >
              {activeDropdown
                ? categories?.map((category, i) => (
                    <button
                      key={i}
                      onClick={() => filterByCategory(category)}
                      className={styles.category_button}
                    >
                      {category}
                    </button>
                  ))
                : ""}
            </div>
          </div>
          <div className={styles.category_buttons}>
            <button
              onClick={handleAll}
              className={`category_button ${
                !filteredCategory ? styles.active : ""
              }`}
            >
              All
            </button>
            {categories?.map((category, i) => (
              <button
                key={i}
                onClick={() => filterByCategory(category)}
                className={`category_button ${
                  filteredCategory == category ? styles.active : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </>
      </div>
    </>
  );
};

export default CategoryFilter;
