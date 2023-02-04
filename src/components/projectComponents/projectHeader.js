import Image from "next/image";
import React from "react";
import { headerImage } from "../../images";
import styles from "../../styles/Project.module.css";

const ProjectHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.project_header}>
        <div className={styles.header_text}>
          <div className={styles.header_heading}>
            <h2>We create a fully unique journey for all our clients</h2>
          </div>
          <div className={styles.header_note}>
            <p>
              Jade Media Pro has always been about people, and we’ve worked hard
              over the years to ensure that our clients are fully satisfied.
              Here are some unique stories behind the works we’ve undertaken.
            </p>
          </div>
        </div>
        <div className={styles.header_image}>
          <Image src={headerImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
