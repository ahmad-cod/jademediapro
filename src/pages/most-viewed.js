import Image from 'next/image'
import React from 'react'
import { MostViewedCard } from '../components'
import { mostViewedData } from '../data/most-viewed/mostViewedData'
import { mostviewedthumbnail } from '../images'
import styles from '../styles/most_viewed.module.css'
const mostViewed = () => {
  return (
    <div className={styles.mostviewed_maincontainer}>
      <div className={styles.mostviewed_contentbox}>

      <div>
            <h3 className={styles.mostrecent_header}>Most Recent</h3>
        </div>

{
    mostViewedData.map(data => (
      

        <MostViewedCard thumbnail={data.thumbnail} title={data.title} numbrOfViews={data.numbrOfViews} uploadTime={data.uploadTime} description={data.description} />
    ))
}


      </div>
        
        
       
    </div>
  )
}

export default mostViewed