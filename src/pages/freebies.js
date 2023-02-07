import React from 'react'
import Image from 'next/image'
import { pdf } from '../images'
import { freebiesHeader } from '../images'
import { ImageWithHeader } from '../components'
import FreebiesCard from '../components/FreebiesCard'
import { freebiesData } from '../data/freebies-card/freebies-data'
import styles from '../styles/freebies.module.css'

const freebies = () => {
  return (
    <div  >
        <ImageWithHeader title="Everything you need for growth and development" 
        subtitle="Free daily high-quality design resources hand-picked for creatives, designers and developers, ranging from fonts, mockups, graphics, templates & more from amazing artists." 
        headerImage={freebiesHeader}/>

        

<div className={styles.main_container}>
      {/* <div className=''>
          <ul className='flex'>
              <li>All</li>
              <li>Illustration</li>
              <li>Books</li>
              <li>Mockup</li>
              <li>Templates</li>
              <li>Software</li>
              <li>Tutorial</li>
          </ul>
      </div> */}
    <hr />

    <div className={styles.freebies_container}>
    {
              freebiesData.map(data => (

                <FreebiesCard format={data.format} title={data.title}/>
              ))
            }
      
    </div>
</div>
    </div>
  )
}

export default freebies