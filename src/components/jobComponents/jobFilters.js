import { jobIndustry, jobLocations, jobtype } from "../../data/jobData";
import FilterDropdown from "../_helperComponents/filterDropDown";
import { jobData } from "../../data/jobData";

import { useState } from "react";

function JobFilters({ setData }) {
  const [check, setCheck] = useState();
  const filterByLocation = (category) => {
    const result = jobData?.filter((content) => {
      return content.location === category;
    });
    setData(result);
  };
  const filterByIndustry = (category) => {
    const result = jobData?.filter((content) => {
      return content.industry === category;
    });
    setData(result);
  };
  const filterByWorkType = (category) => {
    const result = jobData?.filter((content) => {
      return content.work_type === category;
    });
    setData(result);
  };
  const filterByFeature = (category) => {
    const result = jobData?.filter((content) => {
      return content.feature === category;
    });
    setData(result);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <h3 className="text-[#242526] font-medium text-lg mb-4">Filters</h3>
      </div>
      <div className="hidden lg:block">
        <div className="flex gap-2 text-[#3A3B40] font-normal text-[15px] items-center mb-4">
          <input
            id="most relevant"
            type="checkbox"
            className=" w-4 h-4 rounded text-[#4F2E67] bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
          />
          <label
            htmlFor="most relevant"
            onClick={() => filterByFeature("Most Relevant")}
          >
            Most Relevant
          </label>
        </div>
        <div className="flex gap-2 text-[#3A3B40] font-normal text-[15px] items-center mb-4">
          <input
            id="recommended"
            value={check}
            checked={check === "Recommended"}
            type="checkbox"
            className=" w-4 h-4 rounded text-[#4F2E67] bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
          />
          <label
            htmlFor="recommended"
            onClick={() => filterByFeature("Recommended")}
          >
            Recommended
          </label>
        </div>
        <div className="flex gap-2 text-[#3A3B40] font-normal text-[15px] items-center mb-4">
          <input
            id="most-recent"
            type="checkbox"
            checked={check === "Recent"}
            className=" w-4 h-4 rounded text-[#4F2E67] bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
          />
          <label
            htmlFor="most-recent"
            onClick={() => filterByFeature("Most Recent")}
          >
            Most Recent
          </label>
        </div>
      </div>
      <div className="mb-8 w-[277px]">
        <FilterDropdown
          data={jobLocations}
          label="LOCATION"
          filter={filterByLocation}
        />
      </div>
      <div className="mb-8 w-[277px]">
        <FilterDropdown
          data={jobtype}
          label="JOB TYPE"
          filter={filterByWorkType}
        />
      </div>
      <div className="mb-8 w-[277px]">
        <FilterDropdown
          data={jobIndustry}
          label="INDUSTRY"
          filter={filterByIndustry}
        />
      </div>
      <label className="relative inline-flex items-center cursor-pointer mb-10 lg:mb-24">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked
        ></input>
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-[#4F2E67] dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-[#4F2E67] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F2E67]"></div>
        <span className="ml-4 font-normal text-[15px] text-[#3A3B40]">
          Remote only
        </span>
      </label>
    </div>
  );
}

export default JobFilters;
