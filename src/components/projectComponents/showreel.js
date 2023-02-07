import Image from "next/image";
import Link from "next/link";
import React from "react";
import { showreelData } from "../../data/projectData";
import styles from "../../styles/Project.module.css";

const Showreel = () => {
  return (
    <div className={styles.showreel_container}>
      <div className={styles.showreel_heading}>
        <div className={styles.project_heading}>
          <h1>Showreel</h1>
        </div>
      </div>
      <div className={styles.showreel_cards_container}>
        {showreelData.map((show) => (
          <>
            <div className={styles.showreel_card}>
              <div className={styles.showreel_image}>
                <Image src={show.image} alt=""></Image>
                <a
                  target="_blank"
                  href={show.link}
                  className={styles.showreel_info}
                >
                  <div className={styles.showreel_des}>
                    <p className={styles.year}>{show.year}</p>
                    <p className={styles.title}>{show.title}</p>
                    <p className={styles.caption}>{show.caption}</p>
                  </div>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Showreel;
