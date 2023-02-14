import { useEffect, useState } from "react";
import Link from "next/link";
import { cancelIcon, moonsvg, sidebarToggle } from "@/images";
import { mainHeaderLinks } from "@/data";
import Image from "next/image";
import { Sidebar } from "../Sidebar";
import { JadeLogo2 } from "../logos/JadeLogo2";
import { MoonIcon } from "../logos/MoonIcon";

/**
 * @typedef {{
 *  backgroundColor: import("csstype").Property.BackgroundColor,
 *  color: import("csstype").Property.Color,
 *  paintOnScroll?: boolean
 * }} MainHeaderProps
 */

/**
 * Main header for the entire site.
 * @type {React.FC<MainHeaderProps>}
 */
export const DefaultHeader = ({ backgroundColor, paintOnScroll, color }) => {
  if (!color) color = "white";
  const [headerIsFilled, setHeaderIsFilled] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  function switchHeaderColor() {
    setHeaderIsFilled(scrollY > innerHeight / 1.5);
  }
  function openSidebar() {
    setSidebarIsOpen(!sidebarIsOpen);
  }

  useEffect(() => {
    if (paintOnScroll) {
      addEventListener("scroll", switchHeaderColor);
    }
    return () => {
      removeEventListener("scroll", switchHeaderColor);
    };
  }, [paintOnScroll]);

  return (
    <>
      <header
        style={{
          backgroundImage: sidebarIsOpen
            ? undefined
            : `linear-gradient(0deg, transparent, ${backgroundColor})`,
          backgroundColor: sidebarIsOpen
            ? "white"
            : headerIsFilled
            ? backgroundColor
            : undefined,
          color: sidebarIsOpen ? "#242526" : color,
        }}
        className="flex items-center max-[1024px]:text-[11pt] fixed top-0 w-full z-[99] duration-300 justify-between px-[var(--side-padding)] h-[var(--header-height)]"
      >
        <Link href="/" className="flex items-center h-[90%]">
          <JadeLogo2 color={sidebarIsOpen ? "#303030" : "#f6f6f6"} />
        </Link>
        <div className="flex items-center justify-center">
          <button
            title="Change Theme"
            className="max-[700px]:hidden mr-[42px] max-[768px]:mr-[30px]"
          >
            <MoonIcon color={color} />
          </button>
          {/* Navigations */}
          <nav className="flex max-[700px]:hidden gap-[42px] max-[768px]:gap-[30px]">
            {mainHeaderLinks.map((item, index) => (
              <HeaderNavItem key={index} {...item} />
            ))}
          </nav>
          {/* Sidebar Toggle */}
          <button
            onClick={openSidebar}
            className="duration-500 hidden max-[700px]:flex items-center"
            style={{
              transform: sidebarIsOpen ? "rotate(-180deg) scale(0.95)" : "none",
            }}
          >
            <Image
              src={sidebarIsOpen ? cancelIcon : sidebarToggle}
              alt="Open Sidebar"
            />
          </button>
        </div>
      </header>
      {sidebarIsOpen ? <Sidebar /> : <></>}
    </>
  );
};

/**
 * Header Navigation drop down menu.
 * @type {React.FC<HeaderDropDownList>}
 */
export const HeaderNavItem = ({ name, links, href }) => {
  return links ? (
    <li className="relative list-none [--nav-display-toggle:none] hover:[--nav-display-toggle:block]">
      <h1 className="relative cursor-pointer hover:opacity-[0.7]">{name}</h1>
      <menu className="absolute animate-[fade-in_300ms] rounded-[4px] bg-[#f6f6f6e6] text-[#262626] [font-weight:500] [display:var(--nav-display-toggle)]">
        {links.map((item, index) => (
          <li
            className="p-[10px_25px] min-w-[180px] max-[1400px]:text-[11.5pt] duration-300 hover:bg-[#4F2E67] hover:text-white"
            key={index}
          >
            <Link href={item.link}>{item.subtitle}</Link>
          </li>
        ))}
      </menu>
    </li>
  ) : (
    <Link href={href}>{name}</Link>
  );
};
