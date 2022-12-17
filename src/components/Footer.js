import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { TbMinus } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io";
import {
  company,
  hub,
  jadeMedia,
  projects,
  resources,
} from "../data/footer/footerData";
import {
  footerplaneicon,
  facebookgif,
  twittergif,
  linkedingif,
  instagramgif,
  whatsappgif,
  youtubegif,
  vimeogif,
  pinterestgif,
} from "../images";

const Footer = () => {
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
  return (
    <div className="bg-black px-5 lg:px-[104px] font-pop pb-16 pt-16">
      <div className="flex gap-10 md:justify-between flex-col sm:flex-row flex-wrap lg:flex-nowrap flex-1">
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <Image
              width="100%"
              height="100%"
              alt="footer logo"
              src={jadeMedia.title}
              className="text-white text-lg "
            />
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
            {jadeMedia.children.map((child) => (
              <Link className="text-tag_p text-[15px]" href={child.link}>
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <h4 className="text-white text-lg ">{projects.title}</h4>
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
            {projects.children.map((child) => (
              <Link className="text-tag_p text-[15px]" href={child.link}>
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <h4 className="text-white text-lg">{hub.title}</h4>
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
            {hub.children.map((child) => (
              <Link className="text-tag_p text-[15px]" href={child.link}>
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <h4 className="text-white text-lg">{resources.title}</h4>
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
            {resources.children.map((child) => (
              <Link className="text-tag_p text-[15px]" href={child.link}>
                {child.subtitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex items-center justify-between max-w-[280px]">
            <h4 className="text-white text-lg ">{company.title}</h4>
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
            {company.children.map((child) => (
              <Link className="text-tag_p text-[15px]" href={child.link}>
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
          <button className="border-[#46BFB2] border-[1px] rounded-md py-2 flex items-center justify-center gap-3">
            <Image width="100%" height="100%" src={footerplaneicon} />{" "}
            <p>Sign Up</p>
          </button>
        </div>
      </div>
      <div className="my-[75px] flex justify-between items-center gap-5 text-tag_p flex-wrap flex-col lg:flex-row">
        <div className="flex gap-10">
          <p className="text-sm">(+234) 902 771 0233</p>
          <p className="text-sm">solutions@jademediapro.com</p>
        </div>
        <div className="flex justify-between w-full max-w-[600px]">
          <div className="w-10 h-10">
            <Image width="100%" height="100%" src={facebookgif} />
          </div>
          <div className="w-10">
            <Image width="100%" height="100%" src={twittergif} />
          </div>
          <div className="w-10">
            <Image width="100%" height="100%" src={linkedingif} />
          </div>
          <div className="w-10">
            <Image width="100%" height="100%" src={instagramgif} />
          </div>
          <div className="w-10">
            <Image width="100%" height="100%" src={whatsappgif} />
          </div>
          <div className="w-10">
            <Image width="100%" height="100%" src={youtubegif} />
          </div>
          <div className="w-10">
            <Image width="100%" height="100%" src={vimeogif} />
          </div>
          <div className="w-10">
            <Image width="100%" height="100%" src={pinterestgif} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-5 flex-wrap text-xs text-tag_p">
        <p>
          © 2022 Jademediapro Tech Agency - RC:1987561. All rights reserved.{" "}
        </p>

        <div className="flex gap-3 ">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
