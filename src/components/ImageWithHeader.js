import Image from 'next/image'
import React from 'react'
import { interviewHeader } from '../images'

const ImageWithHeader = ({title, subtitle, headerImage}) => {
  return (
    <div className='header2 flex-col lg:flex-row'>
    <div className='max-w-[718px]'>
        <h1 className='text-[50px] text-[#fff]'>{title}</h1>
        <p className=' text-[18px] text-[#fff]'>{subtitle}</p>
    </div>
    <div className='header_image'>

    <Image src={headerImage} alt="" height={473}/>
    </div>
   
</div>

  )
}

export default ImageWithHeader