import { getMonthAbbr } from "@/utils";
import Link from "next/link";

/**
 * An event card component on the home page.
 * @type {React.FC<SocialEvent>}
 */
export const EventCard = (props) => {
  return (
    <Link
      href="#"
      title={props.title}
      className="border-[#BBBECA] duration-300 hover:[box-shadow:0_0_5px_0_#151515] flex flex-col p-[16px] rounded-[4px] border-[1px] min-h-[350px] max-[1024px]:min-h-fit w-full"
    >
      <h5 className="max-[1400px]:text-[11.5pt] max-[1024px]:text-[9pt]">
        {getMonthAbbr(props.date.month)}
      </h5>
      <div className="flex items-end gap-[3%]">
        <h4 className="[font-weight:400] text-[60pt] max-[1400px]:text-[45pt] max-[1024px]:text-[28pt] [line-height:120%] text-[#242526]">
          {props.date.day}
        </h4>
        <div className="pb-[3%] max-[1400px]:text-[11.5pt] max-[1024px]:text-[9pt] max-[820px]:text-[7.5pt]">
          <div>{props.address ?? "Virtual Session"}</div>
          <div>
            {props.registrationRequired
              ? "Registration Required"
              : "Free Admission"}
          </div>
        </div>
      </div>
      <div className="h-full flex items-center">
        <h3 className="[font-weight:400] clamp clamp-text-5 text-[#2F7F77] text-[36pt] max-[1400px]:text-[25pt] max-[1024px]:text-[19pt] max-[820px]:text-[17pt] max-[1400px]:w-[90%] max-[1024px]:w-[95%] [line-height:117%]">
          {props.title}
        </h3>
      </div>
    </Link>
  );
};
