import Image from "next/image";

/**
 * A redesigned product card.
 * @type {React.FC<Product>}
 */
export const ProductCard = (props) => {
  return (
    <div className="bg-[#F6F6F6] rounded-[4px] overflow-hidden w-[20vw] aspect-[0.6] max-[1280px]:h-fit max-[1280px]:aspect-auto">
      <div
        style={{ backgroundImage: `url(${props.productImage.src})` }}
        className="relative h-[70%] max-[1280px]:h-[300px] max-[912px]:h-[230px] max-[768px]:h-[160px] w-full bg-center bg-cover"
      >
        {(props.isNewProduct || props.discount) && (
          <div
            style={{
              backgroundColor: props.isNewProduct ? "#34D399" : "#F87171",
            }}
            className="absolute top-[16px] right-[16px] rounded-[50%] h-[50px] max-[768px]:text-[9pt] max-[768px]:h-[35px] aspect-square flex justify-center items-center text-white"
          >
            {props.isNewProduct ? "New" : props.discount}
          </div>
        )}
      </div>
      <div className="h-[30%] pl-[16px] pt-[16px] max-[1280px]:h-fit">
        <h4 className="text-[20pt] max-[1024px]:text-[14pt] max-[768px]:text-[12pt] font-bold mb-[6px]">
          {props.name}
        </h4>
        <h5 className="text-[#57585F] text-[11pt] max-[1024px]:text-[9.8pt] max-[768px]:text-[9pt] mb-[5px]">
          {props.subtitle}
        </h5>
        <div className="[font-weight:500] text-[#77459B] max-[1280px]:mb-[30px] text-[16pt] max-[1024px]:text-[13pt] max-[768px]:text-[11pt]">
          {props.price}
        </div>
      </div>
    </div>
  );
};
