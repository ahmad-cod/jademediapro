import { tunnelLightImg } from "@/images";
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
        style={{
          objectFit: "cover",
        }}
        width="1099"
      />
    </div>
  );
};
