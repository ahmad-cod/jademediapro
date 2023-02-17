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
import { MainWrapper } from "../components/Layout";

export default function Terms() {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data, setData] =
    usePagination(jobData, 4, 8);
  return (
    <MainWrapper
      title="Jobs - Jade Media Pro"
      headerType={1}
      backgroundColor="#f6f6f6"
      color="#242526"
      paint-header-on-scroll
    >
      <div>
        <div className=" bg-[#F6F6F6] px-[20px] py-[31px] lg:pt-12 lg:pr-[104px] lg:pb-[132px] lg:pl-[104px] mb-32 ">
          <div className="flex flex-col md:flex-row lg:flex-row  lg:items-center text-[30px] lg:text-[50px] font-bold text-[#242526] gap-8 lg:gap-[123px] w-full">
            <h1 className="hidden lg:block lg:w-[60%]">
              Discover your next career <br /> move with our efficiently <br />
              managed job searches
            </h1>
            <h1 className=" block lg:hidden lg:w-[60%]">
              Discover your next <br />
              career move with our
              <br /> efficiently managed <br />
              job searches
            </h1>
            <div className="lg:w-[40%]">
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

        <div className=" flex flex-col-reverse lg:flex-row lg:gap-[163px] px-[20px] py-[31px] lg:pt-12 lg:pr-[104px] lg:pb-[132px] lg:pl-[105px] w-full">
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
            <div className="hidden lg:block bg-[#4f2e67] p-[54px] rounded">
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
        <div className="block m-auto my-16 lg:hidden bg-[#4f2e67] p-6 lg:p-[54px] rounded w-[90%]">
          <Image src={sendarrow} alt="" />

          <div className="text-[#f6f6f6]">
            <h2 className="font-semibold text-4xl mt-6">
              Want to keep up <br /> with the latest?
            </h2>
            <p className="text-[15px] font-normal mt-4">
              Be the first to know about new career <br />
              opportunities.
            </p>
          </div>
          <div className="flex items-center mt-6 gap-4 text-[#46BFB2] font-semibold text-base border border-[#46BFB2] rounded py-3 px-8 w-[169px] hover:bg-[#46BFB2] hover:text-white">
            <button>Sign up</button>
            <Image src={lemonarrow} className="w-4 h-[14px]" alt="" />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
