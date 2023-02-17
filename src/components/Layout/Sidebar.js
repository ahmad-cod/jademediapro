import { mainHeaderLinks } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { MoonIcon } from "./logos/MoonIcon";

/**
 * @typedef SidebarProps
 * @type {object}
 */

/**
 * @type {React.FC<SidebarProps>}
 */
export const Sidebar = () => {
  const [openDropdown, setOpenDropDown] = useState(-1);

  return (
    <aside className="fixed animate-[sidebar-enter_500ms] mt-[var(--header-height)] h-full overflow-y-scroll w-full bg-white z-[98]">
      <nav className="px-[var(--side-padding)] mt-[3.7vh]">
        {mainHeaderLinks.map((link, i) => {
          const isOpen = openDropdown === i;
          return (
            link.links && (
              <li
                onClick={() =>
                  isOpen ? setOpenDropDown(-1) : setOpenDropDown(i)
                }
                className="[font-weight:700] text-[#242526] list-none mb-[3vh] text-[37pt]"
                key={i}
              >
                <div className="flex items-center gap-[4vw]">
                  <span
                    style={{
                      color: isOpen ? "#4F2E67" : "inherit",
                    }}
                  >
                    {link.name}
                  </span>
                  <IoIosArrowUp
                    className="h-[30px] duration-500"
                    style={{
                      transform: isOpen && "rotate(180deg)",
                    }}
                  />
                </div>
                <menu
                  style={{
                    maxHeight: isOpen ? "800px" : 0,
                  }}
                  className="overflow-hidden duration-500"
                >
                  {link.links.map((sublink, j) => (
                    <li
                      className="text-[20pt] text-[#91939F] font-thin"
                      key={j}
                    >
                      {sublink.subtitle}
                    </li>
                  ))}
                </menu>
              </li>
            )
          );
        })}
        <Link
          href="/contact"
          className="bg-[#4F2E67] w-fit text-[#f6f6f6] [font-weight:600] text-[13pt] p-[16px_32px] rounded-[4px] flex items-center gap-[28px]"
        >
          Contact Us
          <BsArrowRight />
        </Link>
        <Link
          href="mailto:solution@jademediapro.com"
          className="block mt-[4vh] mb-[2.5vh] text-[13pt] [font-weight:600]"
        >
          solution@jademediapro.com
        </Link>

        <div className="mb-[3vh] flex items-center gap-[18px] text-[14pt] text-[#91939F]">
          <div className="scale-150">
            <MoonIcon />
          </div>
          Dark
        </div>

        <span className="text-[#91939F] block mb-[2vh] text-[10pt]">
          ©{new Date().getFullYear()} Jademediapro Tech Agency. All rights
          reserved
        </span>

        <div className="text-[#91939F] grid place-content-center text-center h-[40px] [grid:auto/33%_34%_33%]">
          <div className="border-r-2">Privacy</div>
          <div className="border-r-2">Terms</div>
          <div>Sitemap</div>
        </div>
      </nav>
    </aside>
  );
};
