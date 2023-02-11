import { BsArrowRight } from "react-icons/bs";

/**
 * Job component on the landing page.
 * @type {React.FC<Job>}
 */
export const JobCard = (props) => {
  return (
    <li className="bg-[#3A9F94] flex p-[8px_24px] text-[#f6f6f6] h-full rounded-[4px]">
      <h3 className="border-r-2 text-[28pt] w-[40%] border-[#F6F6F6]">
        <div className="w-[70%]">{props.category}</div>
      </h3>
      <div className="flex pl-[var(--grid-margin)] pr-[calc(var(--grid-margin)*1.5)] w-[60%] items-center justify-between">
        <div className="text-[14pt]">
          <div>{props.location}</div>
          <div>{props.work_type}</div>
          <div>{props.industry}</div>
        </div>
        <div className="scale-[2]">
          <BsArrowRight />
        </div>
      </div>
    </li>
  );
};
