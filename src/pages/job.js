import react, { useState } from "react";
import Link from "next/link";

import {
  borderlineimg,
  jobheroimg,
  lemonarrow,
  sendarrow,
  whitearrow,
} from "../images";
import Image from "next/image";

import { jobData, titlejobs } from "../data/jobData/index";

export default function Terms() {
  const [activeborder, setactiveborder] = useState("All");

  return (
    <div>
      <div className=" bg-[#F6F6F6] px-[20px] py-[31px] md:pt-12 md:pr-[104px] md:pb-[132px] md:pl-[104px] mb-32 ">
        <div className="flex flex-col md:flex-row  md:items-center  md:text-[50px] font-bold md:font-bold text-[#242526] gap-8 md:gap-[123px] w-full">
          <h1 className="w-[80%]">
            Discover your next career <br /> move with our efficiently <br />
            managed job searches
          </h1>
          <div className="w-[20%]">
            <Image src={jobheroimg} className="w-full" alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 border-b-[1px] px-[104px] w-[90%] ">
        {titlejobs.map((item, i) => {
          return (
            <Jobtitle
              title={item}
              activeborder={activeborder}
              setactiveborder={setactiveborder}
              key={i}
            />
          );
        })}
      </div>
      <div className=" flex gap-[163px] px-[20px] py-[31px] md:pt-12 md:pr-[104px] md:pb-[132px] md:pl-[105px] w-full">
        <div>
          {jobData.map((item, i) => {
            return (
              <JobCard
                title={item.title}
                location={item.location}
                work_type={item.work_type}
                industry={item.industry}
                key={i}
              />
            );
          })}
        </div>
        <div>
          <div>
            <h3 className="text-[#242526] font-medium text-lg mb-4">Filters</h3>
          </div>
          <div className="mb-8 w-[277px]">
            <select className="border pl-4 py-[19px] pr-8 w-full text-lg font-normal text-[#74767F] rounded">
              <option> LOCATION</option>
              <option> LAGOS</option>
              <option> LAGOS</option>
              <option> LAGOS</option>
            </select>
          </div>
          <div className="mb-8 w-[277px]">
            <select className="border pl-4 py-[19px] pr-8 w-full text-lg font-normal text-[#74767F] rounded">
              <option> TYPE OF WORK</option>
              <option> LAGOS</option>
              <option> LAGOS</option>
              <option> LAGOS</option>
            </select>
          </div>
          <div className="mb-8 w-[277px]">
            <select className="border pl-4 py-[19px] pr-8 w-full text-lg font-normal text-[#74767F] rounded">
              <option> INDUSTRY</option>
              <option> LAGOS</option>
              <option> LAGOS</option>
              <option> LAGOS</option>
            </select>
          </div>
          <div className="bg-[#4f2e67] p-[54px] rounded">
            <Image src={sendarrow} alt="" />

            <div className="text-[#f6f6f6]">
              <h2 className="font-semibold text-4xl mt-6">
                Want to <br /> keep up <br /> with the <br /> latest?
              </h2>
              <p className="text-[15px] font-normal mt-4">
                Be the first to know <br /> about new career <br />{" "}
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
    </div>
  );
}

//Component for the job data
function JobCard(props) {
  let titlesplit = props.title.split(" ");

  return (
    <div className="flex bg-[#3A9F94] rounded px-6 pt-2 pb-4 items-center gap-28 text-[#f6f6f6] cursor-pointer mb-10 hover:bg-[#156e64] ">
      <div>
        <h2 className="font-normal text-4xl ">
          {titlesplit[0]} <br /> {titlesplit[1]}
        </h2>
      </div>
      <div className="flex gap-28 hover:translate-x-2 hover:duration-0 hover:transition hover:md:duration-700">
        <Image src={borderlineimg} />
        <div className="flex gap-52 items-center font-normal text-[15px]">
          <div>
            <p>{props.location}</p>
            <p>{props.work_type}</p>
            <p>{props.industry}</p>
          </div>
          <div>
            <Image src={whitearrow} alt="white arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

//Component for jobtitles
function Jobtitle(props) {
  //const [activeborder, setactiveborder] = useState(false);

  const makeactive = () => {
    props.setactiveborder(props.title);
  };

  return (
    <div
      onClick={makeactive}
      className={`${
        props.activeborder == props.title
          ? "border-b-[1px] border-[#4F2E67]"
          : "border-b-[0px]"
      } cursor-pointer `}
    >
      <p>{props.title}</p>
    </div>
  );
}
