import Image from 'next/image'
import React from 'react'
import { interviewHeader } from '../images'
import styles from '../styles/header.module.css'


const ImageWithHeader = ({title, subtitle, headerImage}) => {
  return (
    <div className={styles.header2}>
      <div className={styles.header_container}>
        <h1 className={styles.title_text}>{title}</h1>
        <p className={styles.sub_headertext}>{subtitle}</p>
      </div>
    <div className='header_image'>

    <Image className={styles.image_header} src={headerImage} alt="" height={473}/>
    </div>
   
</div>

  )
}

export default ImageWithHeader