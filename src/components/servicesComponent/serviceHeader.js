import React from "react";
import Image from "next/image";
import { serviceHeaderImage } from "../../images";
import styles from "../../styles/Project.module.css";


const ServiceHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.project_header}>
        <div className={styles.header_text}>
          <div className={styles.header_heading}>
            <h2>We provide a professional and value design system</h2>
          </div>
          <div className={styles.header_note}>
            <p>
              We create magnetic advertisement videos, memorable brand
              identities, user-friendly websites, and practical marketing
              strategies. We also create insights on how you can be profitable.
            </p>
          </div>
        </div>
        <div className={styles.header_image}>
          <Image src={serviceHeaderImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default ServiceHeader;
