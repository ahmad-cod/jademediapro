import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEast } from "react-icons/md";
import { caseStudiesData } from "../../data/projectData";
import styles from "../../styles/Project.module.css";

const CaseStudies = () => {
  return (
    <div className={styles.casestudy_container} id="casestudy">
      <div className={styles.casestudy_heading}>
        <div className={styles.project_heading}>
          <h1>Case Studies</h1>
        </div>
      </div>
      <div className={styles.casestudy_cards_container}>
        {caseStudiesData.map((casestudy) => (
          <>
            <div className={styles.casestudy_card}>
              <div className={styles.casestudy_info}>
                <div className={styles.casestudy_category}>
                  <p>{casestudy.category}</p>
                </div>
                <div className={styles.casestudy_location}>
                  <p>{casestudy.location}</p>
                </div>
              </div>
              <div className={styles.casestudy_title}>
                <h2>{casestudy.title}</h2>
              </div>
              <div className={styles.casestudy_image}>
                <Image src={casestudy.image} alt="" />
              </div>
              <div className={styles.casestudy_link}>
                <Link href={`/projects/casestudy/${casestudy.id}`}>
                  View casestudy <MdEast />
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
