import { topleftarrow } from "@/images";
import Image from "next/image";

/**
 * Scrollable and draggable list of service cards.
 * @type {React.FC}
 */
export const CommercialCardsLineup = () => {
  /**@type {CardProps[]} */
  const cards = [
    {
      text: "Business Strategy",
    },
    {
      text: "Branding",
    },
    {
      text: "Digital Marketing",
    },
    {
      text: "Motion Design",
    },
  ];
  return (
    <div className="overflow-hidden w-full pl-[var(--side-padding)] h-[64%]">
      <div className="flex w-max gap-[4vw] h-full">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
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
 * @type {React.FC<CardProps>}
 */
const Card = ({ text }) => {
  return (
    <div className="bg-[#1A1A1A] flex justify-end flex-col h-full p-[24px_22px] w-[20vw] rounded-[4px]">
      <span className="text-[#f6f6f6] text-[19pt]">{text}</span>
      <div className="w-[80px] ml-auto ">
        <Image src={topleftarrow} alt="->" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
