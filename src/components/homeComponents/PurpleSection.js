import { methodologyData } from "@/data";
import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenMethodology(openMethodology < 4 ? openMethodology + 1 : 0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  function adjustImage() {
    if (innerHeight > 700) {
      secondImageResize.forEach((cl) => {
        secondImage.current.classList.toggle(cl);
      });
      block.current?.style.setProperty("margin-top", "50px");
    }
  }
  function resetImage() {
    if (innerHeight > 700) {
      secondImageResize.forEach((cl) => {
        secondImage.current.classList.toggle(cl);
      });
      block.current?.style.removeProperty("margin-top");
    }
  }
  return (
    <PageSection className="bg-[#4F2E67] h-max max-2xl:py-[100px] text-[#f6f6f6] grid [grid:auto/40%_60%] max-[1152px]:[grid:auto/43%_auto] max-[700px]:[grid:auto/auto] py-[40px] place-content-center">
      <h2 className="hidden max-[700px]:block text-[25pt] mb-[40px] font-bold">
        Our five foundational processes to create your strategic brand&apos;s
        success
      </h2>
      <ul className="flex flex-col max-[700px]:h-[120px] max-[700px]:flex-row max-[700px]:w-full max-[700px]:overflow-x-scroll justify-center max-[700px]:justify-start max-[700px]:gap-[5vw]">
        {methodologyData.map((methodology, index) => {
          const isopen = index === openMethodology;
          return (
            <li
              onClick={() => setOpenMethodology(index)}
              className="flex max-[700px]:flex-col-reverse cursor-pointer gap-[3vw] max-[700px]:gap-0 mb-[50px] items-center"
              key={index}
            >
              <div
                className={`aspect-square max-[700px]:aspect-auto max-[700px]:animate-[line_500ms] duration-500 border-2 max-[700px]:border-0 border-[#f6f6f6] rounded-[50%] max-[700px]:rounded-[0] flex items-center justify-center ${
                  isopen
                    ? 'h-9 max-[700px]:h-1 max-[700px]:w-full max-[700px]:bg-[#f6f6f6] before:block before:[content:""] before:h-[80%] before:aspect-square before:rounded-[50%] before:bg-[#f6f6f6] max-[700px]:before:hidden'
                    : "h-3 max-[700px]:hidden bg-[#f6f6f6]"
                }`}
              ></div>
              <span
                className={`${
                  isopen
                    ? "text-[45pt] max-[1152px]:text-[25pt] font-bold max-[700px]:text-[30pt]"
                    : "text-[16pt] max-[1152px]:text-[14pt] max-[700px]:text-[13pt]"
                } duration-500`}
              >
                {methodology.name}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="w-full flex flex-col">
        <h2 className="home-heading text-[34pt] max-[1400px]:text-[32pt] max-[1024px]:text-[26pt] max-[768px]:text-[23pt] max-[700px]:hidden mb-[24px]">
          Our five foundational processes to create your strategic brand&apos;s
          success
        </h2>
        <div className="grid [grid:auto/auto_auto] gap-[16px] mb-[40px] h-[250px] max-[768px]:h-[100px] max-[1024px]:mb-[20px] max-[700px]:h-fit max-[700px]:flex max-[700px]:flex-col">
          <div
            style={{
              backgroundImage: `url('${methodologyData[openMethodology].chart.src}')`,
            }}
            onMouseOver={adjustImage}
            onMouseLeave={resetImage}
            className="h-full max-[700px]:aspect-[2] max-[700px]:w-full bg-[#f7f9f9] rounded-[4px] min-[701px]:hover:scale-[1.15] min-[701px]:hover:translate-x-[7%] min-[701px]:hover:translate-y-[10%] duration-500 bg-center bg-no-repeat"
          ></div>
          <div
            style={{
              backgroundImage: `url('${methodologyData[openMethodology].image.src}')`,
            }}
            ref={secondImage}
            className="h-full max-[700px]:hidden bg-white rounded-[4px] duration-500 bg-center bg-cover bg-no-repeat"
          ></div>
        </div>
        <p
          ref={block}
          className="[line-height:140%] duration-500 text-[14pt] max-[1400px]:text-[12pt] max-[1024px]:text-[10pt] max-[768px]:text-[9.5pt] mb-[20px]"
        >
          {methodologyData[openMethodology].text}
        </p>
        <div
          style={{
            backgroundImage: `url('${methodologyData[openMethodology].image.src}')`,
          }}
          className="hidden max-[700px]:block aspect-[2] w-full bg-cover rounded-[4px] bg-center bg-no-repeat"
        ></div>
      </div>
    </PageSection>
  );
};
