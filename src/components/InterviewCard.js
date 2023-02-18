import Image from "next/image";
import react from "react";
import styles from '../styles/interview.module.css'



import React from 'react'

const InterviewData = ({cardImage, cardDescription}) => {
  return (
    <div className={styles.card_container}>
    <div className={styles.card}>
      <Image src={cardImage} alt="" width="500" height="100%" />
      <div>
        <p className={styles.paragraph}>{cardDescription}</p>
      </div>
    </div>
  </div>
  )
}

export default InterviewData