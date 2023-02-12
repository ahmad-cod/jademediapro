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
 *    href: string
 * }} CardProps

/* 
 * Service Card on home page. 
 * @type {React.FC<CardProps>}
 */
const Card = ({ text, icon, href }) => {
  return (
    <Link
      href={href ?? "/services"}
      className="bg-[#1A1A1A] hover:scale-105 duration-300 relative flex justify-end flex-col h-full p-[24px_22px] aspect-[0.8] rounded-[4px]"
    >
      <Image
        src={icon}
        alt={text}
        className="absolute top-[24px] w-[97px] max-[1024px]:w-[70px]"
      />
      <span className="relative text-[#f6f6f6] text-[19pt] max-[1024px]:text-[14pt]">
        {text}
      </span>
      <div className="relative w-[80px] max-[1024px]:mt-[10px] max-[1024px]:w-[60px] ml-auto ">
        <Image src={topleftarrow} alt="->" style={{ width: "100%" }} />
      </div>
    </Link>
  );
};
