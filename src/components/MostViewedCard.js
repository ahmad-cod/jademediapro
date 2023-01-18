import Image from 'next/image'
import React from 'react'
import { playbutton } from '../images'

const MostViewedCard = ({thumbnail, uploadTime, numbrOfViews, title, description}) => {
  return (
    <div className='flex lg:gap-20  flex-col lg:flex-row items-center lg:items-start mb-24'>
    <div className='max-w-[813px] flex-1'>
        
        <Image className='thumbnail-1' alt="mostviewedthumbnail" width="100%" height="100%" src={thumbnail} />
        <Image className='play-button' alt="playbutton" width="100%" height="100%" src={playbutton} />
        
    </div>
    <div className='flex-1 max-w-[813px]'>
        <div className='text-[15px]  flex items-center  gap-6'>
            <p className='text-[#77459B]'>{uploadTime}</p>
            <div className=' w-[1px] h-6 self-end bg-[#242526] '></div>
            <p>{numbrOfViews}</p>
        </div>
        <h3 className='font-[600] text-[28px]  leading-8'>{title}</h3>
        <p className='leading-6'>{description}</p>
    </div>
</div>
  )
}

export default MostViewedCard