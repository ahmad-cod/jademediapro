import React, { useState } from "react";
import ServiceButtons from "./_helperComponents/serviceButtons";
import ServiceContent from "./_helperComponents/serviceContent";
import ServiceTitle from "./_helperComponents/serviceTitle";
import styles from "../styles/ServiceComponet.module.css";
const ServicesComponent = ({
  data,
  categories,
  filterContent,
  serviceTitle,
  id,
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [content, setContent] = useState(
    data.filter((content) => content.id === 1)
  );

  return (
    <div className={styles.service_content}>
      <div className={styles.service_navigation}>
        <ServiceTitle serviceTitle={serviceTitle} id={id} />
        <ServiceButtons
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
          setContent={setContent}
          filterContent={filterContent}
        />
      </div>
      <ServiceContent content={content} />
    </div>
  );
};

export default ServicesComponent;
