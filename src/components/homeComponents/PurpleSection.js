import { methodologyData } from "@/data";
import { ideateImage, project2Img } from "@/images";
import { useRef, useState } from "react";
import { PageSection } from "./PageSection";

/**
 * Purple section in Home Page.
 */
export const PurpleSection = () => {
  const [openMethodology, setOpenMethodology] = useState(0);
  /**@type {React.MutableRefObject<HTMLElement|null>[]} */
  const [block, secondImage] = [useRef(null), useRef(null)];

  /** @type {string[]} */
  const secondImageResize = ["scale-[0.75]", "translate-y-[-10%]"];

  function adjustImage() {
    secondImageResize.forEach((cl) => {
      secondImage.current.classList.toggle(cl);
    });
    block.current?.style.setProperty("margin-top", "50px");
  }
  function resetImage() {
    secondImageResize.forEach((cl) => {
      secondImage.current.classList.toggle(cl);
    });
    block.current?.style.removeProperty("margin-top");
  }
  return (
    <PageSection
      height="120vh"
      className="bg-[#4F2E67] max-2xl:max-h-[1450px] max-2xl:py-[100px] max-2xl:h-fit text-[#f6f6f6] grid [grid:auto/40%_60%] max-[1024px]:[grid:auto/34%_auto] max-[700px]:[grid:auto/0%_auto] place-content-center"
    >
      <ul className="flex flex-col justify-center">
        {methodologyData.map((methodology, index) => {
          const isopen = index === openMethodology;
          return (
            <li
              onClick={() => setOpenMethodology(index)}
              className="flex cursor-pointer gap-[3vw] mb-[50px] items-center"
              key={index}
            >
              <div
                className={`aspect-square duration-300 border-2 border-[#f6f6f6] rounded-[50%] flex items-center justify-center ${
                  isopen
                    ? 'h-9 before:block before:[content:""] before:h-[80%] before:aspect-square before:rounded-[50%] before:bg-[#f6f6f6]'
                    : "h-3 bg-[#f6f6f6]"
                }`}
              ></div>
              <span
                className={`${
                  isopen ? "text-[45pt] font-bold" : "text-[16pt]"
                } duration-300`}
              >
                {methodology.name}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="w-full flex flex-col">
        <h2 className="home-heading text-[34pt] max-[1400px]:text-[32pt] max-[1024px]:text-[26pt] max-[768px]:text-[23pt] mb-[24px]">
          Our five foundational processes to create your strategic brand&apos;s
          success
        </h2>
        <div className="grid grid-cols-2 gap-[16px] mb-[40px] h-[250px] max-[768px]:h-[100px] max-[1024px]:mb-[20px]">
          <div
            style={{
              backgroundImage: `url('${ideateImage.src}')`,
            }}
            onMouseOver={adjustImage}
            onMouseLeave={resetImage}
            className="h-full bg-[#f7f9f9] rounded-[4px] hover:scale-[1.15] hover:translate-x-[7%] hover:translate-y-[10%] duration-500 bg-center bg-no-repeat"
          ></div>
          <div
            style={{
              backgroundImage: `url('${project2Img.src}')`,
            }}
            ref={secondImage}
            className="h-full bg-white rounded-[4px] duration-500 bg-center bg-cover bg-no-repeat"
          ></div>
        </div>
        <p
          ref={block}
          className="[line-height:140%] duration-500 text-[14pt] max-[1400px]:text-[12pt] max-[1024px]:text-[10pt] max-[768px]:text-[9.5pt] mb-[20px]"
        >
          {methodologyData[openMethodology].text}
        </p>
      </div>
    </PageSection>
  );
};
