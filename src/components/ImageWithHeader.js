import Image from 'next/image'
import React from 'react'

const ImageWithHeader = ({title, subtitle, headerImage}) => {
  return (
    <div className='header2 flex-col lg:flex-row'>
    <div className='max-w-[718px]'>
        <h1 className='text-[35px] text-[#fff]'>{title}</h1>
        <p className='text-[#fff]'>{subtitle}</p>
    </div>
    <div className='header__image'>

    <Image src={headerImage} alt="" width="100%" height="100%"/>
    </div>
   
</div>

  )
}

export default ImageWithHeader