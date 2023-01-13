import Image from "next/image";
import react from "react";


import React from 'react'

const InterviewData = ({cardImage, cardDescription}) => {
  return (
    <div className='card-container'>
    <div className='card'>
      <Image src={cardImage} alt="" width="100%" height="100%" />
      <div className='h-[112px]'>
        <p className="paragraph">{cardDescription}</p>
      </div>
    </div>
  </div>
  )
}

export default InterviewData