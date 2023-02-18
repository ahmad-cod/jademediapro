import Image from 'next/image'
import React from 'react'
import { playbutton } from '../images'
import styles from '../styles/most_viewed.module.css'

const MostViewedCard = ({thumbnail, uploadTime, numbrOfViews, title, description}) => {
  return (
    <div className={styles.template}>
      <div className={styles.template02}>
        
        <Image className={styles.thumbnail_1} alt="mostviewedthumbnail" width="100%" height="100%" src={thumbnail} />
        {/* <Image className='play-button' alt="playbutton" width="100%" height="100%" src={playbutton} /> */}
        
      </div>
    <div className={styles.template03}>
        <div className=' pb-10 text-[15px]  flex items-center  gap-6'>
            <p className='text-[#77459B]'>{uploadTime}</p>
            <div className=' w-[1px] h-6 self-end bg-[#242526] '></div>
            <p>{numbrOfViews}</p>
        </div>
        <h3 className='pb-12 font-[600] text-[28px]  leading-8'>{title}</h3>
        <p className='leading-6'>{description}</p>
    </div>
</div>
  )
}

export default MostViewedCard