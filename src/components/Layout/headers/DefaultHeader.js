import { useEffect, useState } from "react";
import Link from "next/link";
import { jadelogo, moonsvg } from "@/images";
import { footerLinks } from "@/data";
import Image from "next/image";

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
 *  links?: Sublink[];
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
      links: [
        {
          subtitle: "Business Strategy",
          link: "/services",
        },
        {
          subtitle: "Branding",
          link: "/services",
        },
        {
          subtitle: "Graphic Design",
          link: "/services",
        },
        {
          subtitle: "Digital Marketing",
          link: "/services",
        },
        {
          subtitle: "Motion Design",
          link: "/services",
        },
        {
          subtitle: "Art/Photography",
          link: "/services",
        },
        {
          subtitle: "Web and App dev.",
          link: "/services",
        },
      ],
    },
    {
      name: "Projects",
      links: footerLinks.projects.children,
    },
    {
      name: "Hub",
      links: footerLinks.hub.children,
    },
    {
      name: "Resources",
      links: footerLinks.resources.children,
    },
    {
      name: "Contact",
      href: "/contacts",
      links: undefined,
    },
  ];

  useEffect(() => {
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
      className="flex items-center max-[1024px]:text-[11pt] fixed top-0 w-full z-[99] duration-300 justify-between px-[var(--side-padding)] h-[var(--header-height)]"
    >
      <Link href="/" className="flex items-center h-[90%]">
        <Image
          src={jadelogo}
          alt="Jade Media Pro"
          width="fit-content"
          height="100%"
        />
      </Link>
      <div className="flex items-center justify-center">
        <button title="Change Theme">
          <Image
            src={moonsvg}
            alt="Dark Mode Toggle"
            style={{
              marginRight: "2vw",
            }}
            width={25}
            height={25}
          ></Image>
        </button>
        <nav className="flex gap-[42px] max-[768px]:gap-[30px]">
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
    <li className="relative list-none [--nav-display-toggle:none] hover:[--nav-display-toggle:block] text-white">
      <h1 className="relative cursor-pointer hover:text-gray-200">{name}</h1>
      <menu className="absolute animate-[fade-in_300ms] rounded-[4px] bg-[#f6f6f6e6] text-[#262626] [font-weight:500] [display:var(--nav-display-toggle)]">
        {links?.map((item, index) => (
          <li
            className="p-[10px_25px] min-w-[180px] max-[1400px]:text-[11.5pt] duration-300 hover:bg-[#4F2E67] hover:text-white"
            key={index}
          >
            <Link href={item.link}>{item.subtitle}</Link>
          </li>
        ))}
      </menu>
    </li>
  );
};
