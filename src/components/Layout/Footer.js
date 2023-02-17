import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { TbMinus } from "react-icons/tb";
import { footerLinks } from "@/data";
import { footerplaneicon, footerSocials } from "@/images";
import { JadeLogo2 } from "./logos/JadeLogo2";
import { PaperPlane } from "./logos";

/**
 * Default footer for all pages.
 * @type {React.FC}
 */
export const Footer = () => {
  const [togleFooterContent, setTogleFooterContent] = useState([
    {
      id: 0,
      isOpen: false,
    },
    { id: 1, isOpen: false },
    {
      id: 2,
      isOpen: false,
    },
    { id: 3, isOpen: false },
    { id: 4, isOpen: false },
  ]);

  const handleToggle = (id) => {
    console.log(togleFooterContent);
    setTogleFooterContent(
      togleFooterContent.map((val) =>
        val.id === id ? { ...val, isOpen: true } : { ...val, isOpen: false }
      )
    );
  };

  const goBackToTop = useCallback(() => scrollTo({ top: 0 }), []);
  return (
    <footer className="relative bg-black px-[var(--side-padding)] font-pop py-16">
      <button
        onClick={goBackToTop}
        title="Back to Top"
        className="absolute duration-300 hover:[box-shadow:0_0_0_8px_#262626] hover:scale-110 text-[#f6f6f6] right-[var(--side-padding)] top-0 translate-y-[-50%] rounded-[50%] h-[80px] max-[1024px]:h-[50px] aspect-square flex items-center justify-center bg-[#46BFB2]"
      >
        <svg
          className="max-[1024px]:scale-50"
          width="36"
          height="41"
          viewBox="0 0 36 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6084 37.6343V7.92039L31.5273 17.0186C32.5892 17.9052 34.1694 17.7599 35.0534 16.6981C35.94 15.6337 35.7947 14.056 34.7329 13.1695L19.7068 0.647791C19.5891 0.55012 19.4514 0.502539 19.3212 0.429915C19.216 0.369811 19.1258 0.297183 19.0106 0.252104C18.7226 0.13941 18.4196 0.071795 18.1141 0.071795C18.1116 0.071795 18.1066 0.0692887 18.1041 0.0692887C18.1016 0.0692887 18.0966 0.071795 18.0941 0.071795C17.7885 0.071795 17.4855 0.13941 17.1975 0.252104C17.0823 0.297183 16.9921 0.369811 16.887 0.429915C16.7567 0.502539 16.619 0.55012 16.5013 0.647791L1.47528 13.1695C0.881752 13.6678 0.573719 14.3791 0.573719 15.0953C0.573719 15.6613 0.764049 16.2298 1.15473 16.6981C2.03876 17.7599 3.61899 17.9052 4.68083 17.0186L15.5997 7.92039V37.6343C15.5997 39.0167 16.7217 40.1387 18.1041 40.1387C19.4865 40.1387 20.6084 39.0167 20.6084 37.6343Z"
            fill="#F6F6F6"
          />
        </svg>
      </button>
      <div className="relative flex gap-10 md:justify-between flex-col sm:flex-row flex-wrap lg:flex-nowrap flex-1">
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <JadeLogo2 color="#f6f6f6" />
            {togleFooterContent[0].isOpen ? (
              <TbMinus className="block sm:hidden" color="white" />
            ) : (
              <BsPlusLg
                onClick={() => handleToggle(0)}
                className="block sm:hidden"
                color="white"
              />
            )}
          </div>
          <div
            className={`${
              togleFooterContent[0].isOpen ? "flex" : "hidden"
            }  sm:flex flex-col gap-4`}
          >
            {footerLinks.jadeMedia.children.map((child, i) => (
              <Link
                className="text-tag_p text-[15px]"
                key={i}
                href={child.link}
              >
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <FooterHead>Projects</FooterHead>
            {togleFooterContent[1].isOpen ? (
              <TbMinus className="block sm:hidden" color="white" />
            ) : (
              <BsPlusLg
                onClick={() => handleToggle(1)}
                className="block sm:hidden"
                color="white"
              />
            )}
          </div>
          <div
            className={`${
              togleFooterContent[1].isOpen ? "flex" : "hidden"
            }  sm:flex flex-col gap-4`}
          >
            {footerLinks.projects.children.map((child, i) => (
              <Link
                className="text-tag_p text-[15px]"
                key={i}
                href={child.link}
              >
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <FooterHead>Hub</FooterHead>
            {togleFooterContent[2].isOpen ? (
              <TbMinus className="block sm:hidden" color="white" />
            ) : (
              <BsPlusLg
                onClick={() => handleToggle(2)}
                className="block sm:hidden"
                color="white"
              />
            )}
          </div>
          <div
            className={`${
              togleFooterContent[2].isOpen ? "flex" : "hidden"
            }  sm:flex flex-col gap-4`}
          >
            {footerLinks.hub.children.map((child, i) => (
              <Link
                className="text-tag_p text-[15px]"
                key={i}
                href={child.link}
              >
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <FooterHead>Resources</FooterHead>
            {togleFooterContent[3].isOpen ? (
              <TbMinus className="block sm:hidden" color="white" />
            ) : (
              <BsPlusLg
                onClick={() => handleToggle(3)}
                className="block sm:hidden"
                color="white"
              />
            )}
          </div>

          <div
            className={`${
              togleFooterContent[3].isOpen ? "flex" : "hidden"
            }  sm:flex flex-col gap-4`}
          >
            {footerLinks.resources.children.map((child, i) => (
              <Link
                className="text-tag_p text-[15px]"
                key={i}
                href={child.link}
              >
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <FooterHead>Company</FooterHead>
            {togleFooterContent[4].isOpen ? (
              <TbMinus className="block sm:hidden" color="white" />
            ) : (
              <BsPlusLg
                onClick={() => handleToggle(4)}
                className="block sm:hidden"
                color="white"
              />
            )}
          </div>
          <div
            className={`${
              togleFooterContent[4].isOpen ? "flex" : "hidden"
            }  sm:flex flex-col gap-4`}
          >
            {footerLinks.company.children.map((child, i) => (
              <Link
                className="text-tag_p text-[15px]"
                key={i}
                href={child.link}
              >
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="sm:max-w-[227px] w-full  text-tag_p flex order-first lg:order-last flex-col gap-4">
          <h3 className="text-[28px] ">
            Stay <br /> connected to infinite support
          </h3>
          <p>Join our newsletter</p>
          <button className="border-[#46BFB2] [--plane:#46BFB2] duration-300 hover:bg-[#46BFB2] hover:text-[#f6f6f6] hover:[--plane:#f6f6f6] border-[1px] rounded-md py-2 flex items-center justify-center gap-3">
            <PaperPlane className="[color:var(--plane)] duration-300" />
            <p>Sign Up</p>
          </button>
        </div>
      </div>
      <div className="relative my-[75px] flex justify-between items-center gap-5 text-tag_p flex-wrap flex-col lg:flex-row">
        <div className="flex gap-10">
          <a href="tel:+2349027710233" className="text-sm block underline">
            (+234) 902 771 0233
          </a>
          <a
            href="mailto:solution@jademediapro.com"
            className="text-sm block underline"
          >
            solutions@jademediapro.com
          </a>
        </div>
        <div className="flex justify-between w-full max-w-[600px]">
          {footerSocials.map((social, i) => (
            <div key={i} className="w-10 h-10">
              <Image
                alt={social.name}
                width="100%"
                height="100%"
                src={social.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-between items-center gap-5 flex-wrap text-xs text-tag_p">
        <p>
          © 2022 Jademediapro Tech Agency - RC:1987561. All rights reserved.{" "}
        </p>

        <div className="flex gap-3 ">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

/**
 *
 * @type {React.FC<{children: React.ReactNode}>}
 */
const FooterHead = ({ children }) => {
  return (
    <h4 className="text-white text-[20pt] max-[1024px]:text-[14pt]">
      {children}
    </h4>
  );
};
