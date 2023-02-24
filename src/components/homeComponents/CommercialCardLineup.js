import { serviceData } from "@/data";
import { topleftarrow } from "@/images";
import Draggable from "react-draggable";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCursor } from "@/hooks/useCursor";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

/**
 * Scrollable and draggable list of service cards.
 * @type {React.FC}
 */
export const CommercialCardsLineup = () => {
  const { Cursor, hide: hideCursor, trigger: triggerCursor } = useCursor();

  return (
    <div className="relative overflow-x-scroll scroll-hidden w-full pl-[var(--side-padding)] 
      h-[65vh] min-h-[300px] max-h-[500px] max-[1400px]:h-[60vh] max-[1024px]:h-[350px]">
      <Draggable axis="x" bounds>
        <div
          onMouseOver={triggerCursor}
          onMouseLeave={hideCursor}
          className="absolute cursor-move flex w-max gap-[4vw] h-full pr-[var(--side-padding)]"
        >
          {serviceData.map((service) => (
            <Card
              key={service.id}
              text={service.serviceTitle}
              icon={service.icon}
              note={service.blurb}
            />
          ))}
        </div>
      </Draggable>
      <Cursor
        className={
          "bg-gray-700 text-white flex max-[912px]:hidden h-[170px] max-[1024px]:h-[120px] aspect-square rounded-[50%] items-center gap-[3.5%] justify-center text-[19pt] max-[1024px]:text-[13pt] " +
          "before:block before:[content:''] before:absolute before:h-[90%] before:aspect-square before:rounded-[50%] before:border-2 before:border-dashed "
        }
      >
        <BsArrowLeft />
        DRAG <BsArrowRight />
      </Cursor>
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
 */

/**
 * Service Card on home page.
 * @type {React.FC<CardProps>}
 */
const Card = ({ text, icon, href, note }) => {
  return (
    <Link
      href={href ?? "/services"}
      className="bg-[#1A1A1A] text-[#f6f6f6] [--note-transform:translateY(100%)] 
      max-[700px]:[--note-transform:none] hover:[--note-transform:none] min-[701px]:hover:[--text-color:#65CABF] 
      relative flex justify-end flex-col overflow-hidden h-full p-[24px_22px] aspect-[0.8] rounded-[4px]"
    >
      <Image
        src={icon}
        alt={text}
        className="absolute top-[24px] w-[97px] max-[1024px]:w-[70px]"
      />
      <div className="relative [transform:var(--note-transform)] duration-300">
        <span className="block [color:var(--text-color)] duration-300 text-[21pt] [transform:translateY(-2vh)] font-bold max-[1280px]:text-[14pt]">
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
