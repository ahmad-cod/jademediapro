import { tunnelLightImg, tunnelLightImgV2 } from "@/images";
import Image from "next/image";

/**
 * Hero section overlay image of man walking out of tunnel.
 * @type {React.FC}
 */
export const TunnelManOverlay = () => {
  return (
    <div className="absolute flex flex-row-reverse w-full h-full bg-black overflow-hidden">
      <Image
        src={tunnelLightImg}
        alt="Man walking out of tunnel"
        className="w-[1099px] max-[700px]:hidden"
        style={{
          objectFit: "cover",
        }}
      />
      <div
        className="hidden max-[700px]:block w-full h-full bg-no-repeat [background-position-x:center] [background-position-y:-10vh] bg-cover"
        style={{ backgroundImage: `url(${tunnelLightImgV2.src})` }}
      >
        <div className="w-full h-full [background-image:linear-gradient(0deg,#000,#000,#000,transparent)]"></div>
      </div>
    </div>
  );
};
