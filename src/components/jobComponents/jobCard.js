import { borderlineimg, whitearrow } from "../../images";
import Image from "next/image";

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

export default JobCard;
