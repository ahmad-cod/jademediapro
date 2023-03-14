import { clientLogos } from "@/images";
import Image from "next/image";
import styles from '../../styles/logoLineup.module.css'

/**
 * Grid of Client logos on Hero Section of Landing Page.
 * @type {React.FC}
 */
export const LogoLineup = () => {
  return (
    <div className="container lg:p-20 mt-6 relative overflow-hidden">
      <div className={`flex absolute left-0 gap-16 ${styles.animate}`}>
        <div className="flex w-50 items-center gap-16">
          {clientLogos.map((logo, index) => (
            <Image
              src={logo.src}
              key={index}
              alt={logo.name}
              className="h-[45px] w-auto max-[700px]:h-[30px]"
            />
          ))}
        </div>
        <div className="flex w-50 gap-16 items-center logo">
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
    </div>
  );
};