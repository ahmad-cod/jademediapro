import Image from 'next/image'
import React from 'react'
import { MostViewedCard } from '../components'
import { mostViewedData } from '../data/most-viewed/mostViewedData'
import { mostviewedthumbnail } from '../images'
const mostViewed = () => {
  return (
    <div className='px-10 md:px-20'>
        <div>
            <h3 className='text-[50px] text-[#242526]'>Most Recent</h3>
        </div>

{
    mostViewedData.map(data => (

        <MostViewedCard thumbnail={data.thumbnail} title={data.title} numbrOfViews={data.numbrOfViews} uploadTime={data.uploadTime} description={data.description} />
    ))
}

        
       
    </div>
  )
}

export default mostViewed