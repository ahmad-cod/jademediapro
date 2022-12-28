import React from 'react'
import { female, handphone } from '../images'
import Image from 'next/image'
import { InterviewData } from '../components'
import { interviewData } from '../data/interview-data/interviewData'


const interview = () => {
  return (
    <div>
        <div className='header2'>
            <div>
                <h1 className='text-[35px] text-[#fff]'>Engaging One-on-One<br/> discussing with big guns</h1>
                <p className='text-[#fff]'>We have awesome chat with industry leading professionals from<br/> 
                    various fields discussing exverything about their experience, <br/>
                    business oreintation, and actionable insights  on how to grow.</p>
            </div>
            <div className='header__    image'>

            <Image src={handphone} alt="" width="100%" height="100%"/>
            </div>
           
        </div>
        
        <div className='card-section'>
          <div className='min'>
            <h2>60 Minutes</h2>
          </div>
          <div className='interview-section'>
            {
              interviewData.map(data => (

                <InterviewData cardImage={data.cardImage} cardDescription={data.description}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default interview