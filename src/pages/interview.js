import { female, handphone, interviewHeader } from "../images";

import Pagination from "../components/Pagination";
import { ImageWithHeader, InterviewData } from "../components";
import { interviewData } from "../data/interview-data/interviewData";
import styles from "../styles/interview.module.css";
import usePagination from "../hooks/usePagination";
import { MainWrapper } from "@/components/Layout";

const Interview = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data] =
    usePagination(interviewData, 4, 9);
  return (
    <MainWrapper
      title="Interview - Jade Media Pro"
      headerType={1}
      backgroundColor="#633981"
      paint-header-on-scroll
    >
      <ImageWithHeader
        title="Engaging One-on-One discussing with big guns"
        subtitle="We have awesome chat with industry leading professionals from
      various fields discussing exverything about their experience, 
      business oreintation, and actionable insights  on how to grow."
        headerImage={interviewHeader}
      />

      <div className={styles.card_section}>
        <div className={styles.min}>
          <h2 className={styles.minutes}>60 Minutes:</h2>
        </div>
        <div className={styles.interview_section}>
          {currentData.map((data, i) => (
            <InterviewData
              cardImage={data.cardImage}
              cardDescription={data.description}
              key={i}
            />
          ))}
        </div>
        <Pagination
          cardsPerPage={dataPerPage}
          totalCards={data.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </MainWrapper>
  );
};

export default Interview;
