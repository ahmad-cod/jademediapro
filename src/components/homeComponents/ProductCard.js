import { eyeicon, hearticon, shareicon } from "@/images";
import Image from "next/image";

/**
 * A redesigned product card.
 * @type {React.FC<Product>}
 */
export const ProductCard = (props) => {
  return (
    <div className="bg-[#F6F6F6] relative rounded-[4px] cursor-pointer w-[20vw] max-[700px]:w-full aspect-[0.6] hover:[--hover-opacity:1] [--hover-opacity:0] max-[700px]:aspect-auto max-[1280px]:h-[500px] max-[1280px]:aspect-auto">
      <div className="absolute max-[700px]:relative w-full h-full">
        <div
          style={{ backgroundImage: `url(${props.productImage.src})` }}
          className="relative h-[70%] max-[1280px]:h-[300px] max-[912px]:h-[230px] max-[768px]:h-[160px] max-[700px]:h-[260px] w-full bg-center bg-cover"
        >
          {(props.isNewProduct || props.discount) && (
            <div
              style={{
                backgroundColor: props.isNewProduct ? "#34D399" : "#F87171",
              }}
              className="absolute top-[16px] right-[16px] rounded-[50%] h-[50px] max-[768px]:text-[9pt] max-[768px]:h-[35px] max-[700px]:h-[40px] aspect-square flex justify-center items-center text-white"
            >
              {props.isNewProduct ? "New" : props.discount}
            </div>
          )}
        </div>
        <div className="h-[30%] pl-[16px] pt-[16px] max-[1280px]:h-fit max-[700px]:h-fit">
          <h4 className="text-[20pt] max-[1024px]:text-[14pt] max-[768px]:text-[12pt] max-[700px]:text-[15pt] font-bold mb-[6px]">
            {props.name}
          </h4>
          <h5 className="text-[#57585F] text-[11pt] max-[1024px]:text-[9.8pt] max-[768px]:text-[9pt] max-[700px]:text-[10pt] mb-[5px]">
            {props.subtitle}
          </h5>
          <div className="[font-weight:500] text-[#77459B] max-[1280px]:mb-[30px] text-[16pt] max-[1024px]:text-[13pt] max-[768px]:text-[11pt] max-[700px]:text-[14pt]">
            {props.price}
            {props.cancelledPrice && (
              <div className="hidden text-[#57585F] text-[11pt] max-[700px]:block [text-decoration:strikethrough]">
                {props.cancelledPrice}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="[opacity:var(--hover-opacity)] absolute duration-300 bg-[#00000084] text-[#f6f6f6] h-full w-full flex max-[1024px]:hidden flex-col items-center justify-center">
        <button className="bg-[#46BFB2] py-[20px] max-w-[80%] hover:bg-[#37a095] rounded-[4px] gap-[10%] px-[36.5px] flex">
          Preview
          <Image src={eyeicon} alt="view" height={25} />
        </button>
        <div className="flex gap-[20px] mt-[30px]">
          <div className="flex gap-[10px] items-center">
            <Image src={shareicon} alt="share"></Image>
            Share
          </div>
          <div className="flex gap-[10px] items-center">
            <Image src={hearticon} alt="heart" />
            Like
          </div>
        </div>
      </div>
    </div>
  );
};
