import React from "react";
import { MdEast } from "react-icons/md";
import styles from "../../styles/Project.module.css";

const Training = () => {
  return (
    <div className={styles.training_container} id="training">
      <div className={styles.training_heading}>
        <div className={styles.project_heading}>
          <h1>Training</h1>
        </div>
      </div>
      <div className={styles.training_content}>
        <h3>Professional Cohort Program</h3>
        <p>
          We’re dedicated to developing the next generation of skilled
          designers, developers, digital marketers, visualizers, and digital
          entrepreneurs by providing them with the skills they’ll need to make
          positive changes in the digital business world and increase human
          interaction with digital products. Here’s your chance to join our next
          cohort for free and participate in our mentorship programs.
        </p>
        <button>
          Join Our Next Cohort <MdEast />
        </button>
      </div>
    </div>
  );
};

export default Training;
