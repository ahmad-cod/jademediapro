import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

/**
 * Job component on the landing page.
 * @type {React.FC<Job>}
 */
export const JobCard = (props) => {
  return (
    <Link
      href="/job"
      className="bg-[#3A9F94] hover:bg-[#2d867b] [--category-width:40%] hover:[--category-width:50%] duration-300 flex p-[8px_24px] max-[700px]:py-[15px] text-[#f6f6f6] h-full rounded-[4px]"
    >
      <h3 className="flex items-center border-r-2 text-[28pt] max-[1400px]:text-[24pt] max-[1024px]:text-[18pt] max-[912px]:text-[16pt] duration-300 w-[var(--category-width)] border-[#F6F6F6]">
        <div className="w-[70%]">{props.category}</div>
      </h3>
      <div className="flex pl-[var(--grid-margin)] pr-[calc(var(--grid-margin)*1.5)] max-[768px]:pr-0 w-[60%] items-center justify-between">
        <div className="text-[14pt] max-[1024px]:text-[11pt] max-[912px]:text-[10pt]">
          <div>{props.location}</div>
          <div>{props.work_type}</div>
          <div>{props.industry}</div>
        </div>
        <div className="scale-[2] max-[768px]:scale-100">
          <BsArrowRight />
        </div>
      </div>
    </Link>
  );
};
