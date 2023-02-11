import { getMonthAbbr } from "@/utils";

/**
 * An event card component on the home page.
 * @type {React.FC<SocialEvent>}
 */
export const EventCard = (props) => {
  return (
    <div className="border-[#BBBECA] flex flex-col p-[16px] rounded-[4px] border-[1px] min-h-[350px] w-full">
      <h5>{getMonthAbbr(props.date.month)}</h5>
      <div className="flex items-end gap-[3%]">
        <h4 className="[font-weight:400] text-[60pt] [line-height:120%] text-[#242526]">
          {props.date.day}
        </h4>
        <div className="pb-[3%]">
          <div>{props.address ?? "Virtual Session"}</div>
          <div>
            {props.registrationRequired
              ? "Registration Required"
              : "Free Admission"}
          </div>
        </div>
      </div>
      <div className="h-full flex items-center">
        <h3 className="[font-weight:400] clamp clamp-text-5 text-[#2F7F77] text-[36pt] [line-height:117%]">
          {props.title}
        </h3>
      </div>
    </div>
  );
};
