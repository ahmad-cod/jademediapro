import { useEffect, useState } from "react";
import Link from "next/link";
import { jadelogo, moonsvg } from "@/images";
import Image from "next/image";
import Head from "next/head";

/**
 * @typedef {{
 *  backgroundColor: import("csstype").Property.BackgroundColor,
 *  paintOnScroll?: boolean
 * }} MainHeaderProps
 */

/**
 *  An item in a 'tab' menu of a header link.
 * @typedef {{
 *  name: string;
 *  href?: string;
 *  links?: Array<{
 *    name: string;
 *    href: string;
 *  }>
 * }} HeaderDropDownList
 */

/**
 * Main header for the entire site.
 * @type {React.FC<MainHeaderProps>}
 */
export const DefaultHeader = ({ backgroundColor, paintOnScroll }) => {
  const [headerIsFilled, setHeaderIsFilled] = useState(false);
  function switchHeaderColor() {
    setHeaderIsFilled(scrollY > innerHeight / 1.5);
  }
  /**@type {HeaderDropDownList[]} */
  const mainHeaderLinks = [
    {
      name: "Services",
      links: [],
    },
    {
      name: "Projects",
      links: [],
    },
    {
      name: "Hub",
      links: [],
    },
    {
      name: "Resources",
      links: [],
    },
    {
      name: "Contact",
      href: "/contacts",
      links: undefined,
    },
  ];

  useEffect(() => {
    console.log(paintOnScroll);
    if (paintOnScroll) {
      addEventListener("scroll", switchHeaderColor);
    }
    return () => {
      removeEventListener("scroll", switchHeaderColor);
    };
  }, [paintOnScroll]);

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(0deg, transparent, ${backgroundColor})`,
        backgroundColor: headerIsFilled ? backgroundColor : undefined,
      }}
      className="flex items-center fixed top-0 w-full z-[99] duration-300 justify-between px-[var(--side-padding)] h-[var(--header-height)]"
    >
      <Head>
        <style>{`body {background-color: ${backgroundColor}}`}</style>
      </Head>
      <div className="flex justify-center items-center h-[90%]">
        <Image
          className="scale-[1.2]"
          src={jadelogo}
          alt="Jade Media Pro"
          width="fit-content"
          height="100%"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={moonsvg}
          alt="Dark Mode Toggle"
          style={{
            marginRight: "2vw",
          }}
          width={25}
          height={25}
        ></Image>
        <nav className="flex gap-[42px]">
          {mainHeaderLinks.map((item, index) => (
            <HeaderNavItem key={index} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
};

/**
 * Header Navigation drop down menu.
 * @type {React.FC<HeaderDropDownList>}
 */
export const HeaderNavItem = ({ name, links }) => {
  return (
    <li className="list-none text-white">
      <h1 className="cursor-pointer hover:text-gray-200">{name}</h1>
      <menu>
        {links?.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </menu>
    </li>
  );
};
