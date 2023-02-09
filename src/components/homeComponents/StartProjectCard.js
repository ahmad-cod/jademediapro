import Link from "next/link";
import { HomeButton } from "./HomeButton";

/**
 * Link to Call.
 * @type {React.FC}
 */
export const StartProjectCard = () => {
  return (
    <div className="bg-white flex flex-col justify-center [box-shadow:3px_3px_16px_rgba(0,0,0,0.1)] p-[30px] rounded-[4px] min-w-[41.5%]">
      <h3 className="[font-weight:500] mb-[8px] text-[#2F7F77] text-[40pt]">
        Start Your Project
      </h3>
      <p className="mb-[32px]">
        Let&apos;s have a chat about your amazing ideas.
      </p>
      <HomeButton href="/call">Book a Free Call</HomeButton>
    </div>
  );
};
