import {
  pairImg,
  pencilImg,
  targetImg,
  topleftarrow,
  videoImg,
} from "@/images";
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
      icon: targetImg,
    },
    {
      text: "Branding",
      icon: pencilImg,
    },
    {
      text: "Digital Marketing",
      icon: pairImg,
    },
    {
      text: "Motion Design",
      icon: videoImg,
    },
  ];
  return (
    <div className="overflow-x-scroll scroll-hidden w-full pl-[var(--side-padding)] h-[65vh] min-h-[300px] max-h-[500px]">
      <div className="flex w-max gap-[4vw] h-full pr-[var(--side-padding)]">
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
const Card = ({ text, icon }) => {
  return (
    <div className="bg-[#1A1A1A] relative flex justify-end flex-col h-full p-[24px_22px] aspect-[0.8] rounded-[4px]">
      <Image
        src={icon}
        alt={text}
        width="auto"
        className="absolute top-[24px]"
      />
      <span className="relative text-[#f6f6f6] text-[19pt]">{text}</span>
      <div className="relative w-[80px] ml-auto ">
        <Image src={topleftarrow} alt="->" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
