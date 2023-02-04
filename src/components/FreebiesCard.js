import Image from 'next/image'
import React from 'react'
import { pdf } from '../images'

const FreebiesCard = ({title, format}) => {
  return (
    <div className='freebies-card'>
         <Image src={format} alt="" width="100%" height="100%"/>
         <p className='pdf-text'>{title}</p>
        </div>
  )
}

export default FreebiesCard