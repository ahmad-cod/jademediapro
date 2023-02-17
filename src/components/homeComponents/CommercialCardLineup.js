import { serviceData } from "@/data";
import { topleftarrow } from "@/images";
import Image from "next/image";
import Link from "next/link";

/**
 * Scrollable and draggable list of service cards.
 * @type {React.FC}
 */
export const CommercialCardsLineup = () => {
  return (
    <div className="overflow-x-scroll scroll-hidden w-full pl-[var(--side-padding)] h-[65vh] min-h-[300px] max-h-[500px] max-[1400px]:h-[60vh] max-[1024px]:h-[350px]">
      <div className="flex w-max gap-[4vw] h-full pr-[var(--side-padding)]">
        {serviceData.map((service) => (
          <Card
            key={service.id}
            text={service.serviceTitle}
            icon={service.icon}
            note={service.blurb}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * @typedef {{
 *    text: string,
 *    icon: string,
 *    note: string,
 *    href: string
 * }} CardProps

/* 
 * Service Card on home page. 
 * @type {React.FC<CardProps>}
 */
const Card = ({ text, icon, href, note }) => {
  return (
    <Link
      href={href ?? "/services"}
      className="bg-[#1A1A1A] text-[#f6f6f6] [--note-transform:translateY(100%)] max-[700px]:[--note-transform:none] hover:[--note-transform:none] min-[701px]:hover:[--text-color:#65CABF] relative flex justify-end flex-col overflow-hidden h-full p-[24px_22px] aspect-[0.8] rounded-[4px]"
    >
      <Image
        src={icon}
        alt={text}
        className="absolute top-[24px] w-[97px] max-[1024px]:w-[70px]"
      />
      <div className="relative [transform:var(--note-transform)] duration-300">
        <span className="block [color:var(--text-color)] duration-300 text-[21pt] [transform:translateY(-50%)] font-bold max-[1024px]:text-[14pt]">
          {text}
        </span>
        <div className="[transform:var(--note-transform)] duration-500">
          <p className="clamp clamp-text-6 max-[700px]:[display:-webkit-box] max-[700px]:text-[10pt]">
            {note}
          </p>
        </div>
      </div>
      <div className="relative w-[80px] max-[1024px]:mt-[10px] max-[1024px]:w-[60px] ml-auto ">
        <Image src={topleftarrow} alt="->" style={{ width: "100%" }} />
      </div>
    </Link>
  );
};
