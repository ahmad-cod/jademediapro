import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdEast } from "react-icons/md";
import { workData } from "../../data/serviceData";

import { TfiLocationPin } from "react-icons/tfi";
import styles from "../../styles/Services.module.css";

const Work = () => {
  return (
    <div className={styles.work_container}>
      <div className={styles.work_heading}>
        <h2>Our Work</h2>
      </div>
      <div className={styles.workcard_container}>
        {workData.map((work) => (
          <div className={styles.workcard} key={work.id}>
            <div className={styles.work_text}>
              <p className={styles.w_cat}>{work.category}</p>
              <h3>{work.title}</h3>
              <p className={styles.w_loc}>
                <TfiLocationPin />
                {work.location}
              </p>
            </div>
            <div className={styles.work_image}>
              <Image src={work.image} alt="" />
            </div>
            <div className={styles.work_link}>
              <Link href={"#"}>
                View CaseStudy <MdEast />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
