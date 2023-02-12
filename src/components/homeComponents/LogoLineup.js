import { clientLogos } from "@/images";
import Image from "next/image";

/**
 * Grid of Client logos on Hero Section of Landing Page.
 * @type {React.FC}
 */
export const LogoLineup = () => {
  return (
    <div className="overflow-hidden ml-[var(--side-padding)]">
      <div className="flex w-max gap-[10vw] py-[28px]">
        {clientLogos.map((logo, index) => (
          <Image src={logo.src} key={index} alt={logo.name} height={45} />
        ))}
      </div>
    </div>
  );
};
