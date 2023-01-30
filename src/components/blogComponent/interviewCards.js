import React from "react";
import { interviewData } from "../../data/blogData";
import Image from "next/image";
import styles from "../../styles/Blog.module.css";

const Interview = () => {
  return (
    <div className={styles.interview_container}>
      <div className={styles.interview_heading}>
        <h2>Watch exclusive interviews with professionals</h2>
      </div>
      <div className={styles.interview_cards_container}>
        {interviewData?.map((interview, i) => (
          <div className={styles.interview_card} key={i}>
            <div className={styles.interview_top}>
              <Image src={interview.thumbnail} alt="" />
              <div className={styles.interview_title}>
                <p className={styles.title}>{interview.title}</p>
                <p className={styles.date}>{interview.date}</p>
              </div>
            </div>
            <div className={styles.interview_bottom}>
              <p>{interview.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interview;
