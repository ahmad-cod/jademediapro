import { clientLogos } from "@/images";
import Image from "next/image";
import styles from '../../styles/logoLineup.module.css'

/**
 * Grid of Client logos on Hero Section of Landing Page.
 * @type {React.FC}
 */
export const LogoLineup = () => {
  return (
    <div className="logo-lineup overflow-hidden max-[700px]:mt-[50px] ml-[var(--side-padding)]">
      <div className="flex w-max animate-[logo-scroll_infinite_linear] 
        [animation-duration:40000ms] gap-[10vw] py-[28px]">
        {clientLogos.map((logo, index) => (
          <Image
            src={logo.src}
            key={index}
            alt={logo.name}
            className="h-[45px] w-auto max-[700px]:h-[30px]"
          />
        ))}
      </div>
    </div>
  );
};
