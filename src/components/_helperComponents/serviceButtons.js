import React from "react";

import { MdEast } from "react-icons/md";
import styles from "../../styles/ServiceComponet.module.css";

const ServiceButtons = ({
  activeCategory,
  setActiveCategory,
  setContent,
  categories,
  filterContent,
}) => {

  const filterByCategory = (category) => {
    const result = filterContent?.filter((service) => {
      return service.category === category;
    });
    setContent(result);

    setActiveCategory(category);
  };

  return (
    <>
      <div className={styles.service_buttons_container}>
        {categories?.map((category) => (
          <>
            <div className={styles.service_buttons}>
              <button
                onClick={() => filterByCategory(category)}
                className={
                  activeCategory === category ? styles.button_active : ""
                }
              >
                {category}
              </button>
            </div>
          </>
        ))}
      </div>
      <div className={styles.cta_button}>
        <button>
          Let’s Work Together <MdEast />
        </button>
      </div>
    </>
  );
};

export default ServiceButtons;
