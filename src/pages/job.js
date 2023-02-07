import Link from "next/link";
import { jobData, categoryjobs } from "../data/jobData";
import CategoryFilter from "../components/CategoryFilter";
import JobCard from "../components/jobComponents/jobCard";
import Image from "next/image";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";
import JobFilters from "../components/jobComponents/jobFilters";
import {
  borderlineimg,
  jobheroimg,
  lemonarrow,
  sendarrow,
  whitearrow,
} from "../images";

export default function Terms() {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data, setData] =
    usePagination(jobData, 4, 8);
  return (
    <div>
      <div className=" bg-[#F6F6F6] px-[20px] py-[31px] md:pt-12 md:pr-[104px] md:pb-[132px] md:pl-[104px] mb-32 ">
        <div className="flex flex-col md:flex-row  md:items-center  md:text-[50px] font-bold md:font-bold text-[#242526] gap-8 md:gap-[123px] w-full">
          <h1 className="w-[60%]">
            Discover your next career <br /> move with our efficiently <br />
            managed job searches
          </h1>
          <div className="w-[40%]">
            <Image src={jobheroimg} className="" alt="jobs image" />
          </div>
        </div>
      </div>

      <div className="flex gap-6 font-normal text-[15px] text-[#57585F] hover:text-[#77459B]  px-[104px] "></div>

      <CategoryFilter
        setCategory={setData}
        filterContent={jobData}
        categories={categoryjobs}
      />

      <div className=" flex gap-[163px] px-[20px] py-[31px] md:pt-12 md:pr-[104px] md:pb-[132px] md:pl-[105px] w-full">
        <div>
          {currentData.map((item, i) => {
            return (
              <JobCard
                category={item.category}
                location={item.location}
                work_type={item.work_type}
                industry={item.industry}
                key={i}
              />
            );
          })}
        </div>
        <div>
          <JobFilters />
          <div className="bg-[#4f2e67] p-[54px] rounded">
            <Image src={sendarrow} alt="" />

            <div className="text-[#f6f6f6]">
              <h2 className="font-semibold text-4xl mt-6">
                Want to <br /> keep up <br /> with the <br /> latest?
              </h2>
              <p className="text-[15px] font-normal mt-4">
                Be the first to know <br /> about new career <br />
                opportunities.
              </p>
            </div>
            <div className="flex m-auto items-center mt-6 gap-4 text-[#46BFB2] font-semibold text-base border border-[#46BFB2] rounded py-3 px-8 w-[169px] hover:bg-[#46BFB2] hover:text-white">
              <button>Sign up</button>
              <Image src={lemonarrow} className="w-4 h-[14px]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        cardsPerPage={dataPerPage}
        currentPage={currentPage}
        totalCards={data.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
