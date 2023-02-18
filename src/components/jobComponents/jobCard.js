import { borderlineimg, whitearrow } from "../../images";
import Image from "next/image";

//Component for the job data
function JobCard(props) {
  return (
    <div className="flex bg-[#3A9F94] rounded p-4 lg:px-6 lg:pt-2 lg:pb-4 items-center gap-4 md:gap-10 lg:gap-28 text-[#f6f6f6] cursor-pointer mb-6 lg:mb-10 hover:bg-[#156e64] w-full ">
      <div>
        <h2 className="font-normal text-[30px] leading-9 lg:text-4xl ">
          {props.category}
        </h2>
      </div>
      <div className="flex gap-4 md:gap-10 lg:gap-28 hover:translate-x-2 hover:duration-0 hover:transition hover:lg:duration-700">
        <Image src={borderlineimg} alt="-------" />
        <div className="flex gap-1 md:gap-48 lg:gap-52 items-center font-normal text-[13px] lg:text-[15px]">
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

export default JobCard;
