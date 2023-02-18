import Image from 'next/image'
import React from 'react'
import { pdf } from '../images'
import styles from '../styles/freebies.module.css'

const FreebiesCard = ({title, format}) => {
  return (
    <div className={styles.freebies_card}>
         <Image className={styles.icon_1} src={format} alt="" width="100%" height="100%"/>
         <p className={styles.pdf_text}>{title}</p>
        </div>
  )
}

export default FreebiesCard