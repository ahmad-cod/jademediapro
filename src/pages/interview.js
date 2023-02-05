import React from "react";
import { female, handphone } from "../images";
import Image from "next/image";
import { ImageWithHeader, InterviewData } from "../components";
import { interviewData } from "../data/interview-data/interviewData";
import { Pagination } from "../components";
import useWidth from "../hooks/UseWidth";

const Interview = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data] =
    useWidth(interviewData, 4, 9);
  return (
    <div>
      <ImageWithHeader
        title="Engaging One-on-One discussing with big guns"
        subtitle="We have awesome chat with industry leading professionals from<br/> 
      various fields discussing exverything about their experience, 
      business oreintation, and actionable insights  on how to grow"
        headerImage={handphone}
      />
      {/* <div className='header2'>
            <div>
                <h1 className='text-[35px] text-[#fff]'></h1>
                <p className='text-[#fff]'></p>
            </div>
            <div className='header__    image'>

            <Image src={} alt="" width="100%" height="100%"/>
            </div>
           
        </div> */}

      <div className="card-section">
        <div className="min">
          <h2>60 Minutes</h2>
        </div>
        <div className="interview-section">
          {currentData.map((data) => (
            <InterviewData
              cardImage={data.cardImage}
              cardDescription={data.description}
            />
          ))}
        </div>
      </div>
      <Pagination
        cardsPerPage={dataPerPage}
        totalCards={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Interview;
