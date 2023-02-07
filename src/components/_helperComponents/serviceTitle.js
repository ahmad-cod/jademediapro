import React from "react";
import { FiCoffee } from "react-icons/fi";
import styles from "../../styles/ServiceComponet.module.css";

const ServiceTitle = ({ serviceTitle, id }) => {
  return (
    <div className={styles.project_heading} id={id}>
      <h1>{serviceTitle}</h1>
      
    </div>
  );
};

export default ServiceTitle;
