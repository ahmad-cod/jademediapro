import Image from "next/image";

/**
 * A redesigned product card.
 * @type {React.FC<Product>}
 */
export const ProductCard = (props) => {
  return (
    <div className="bg-[#F6F6F6] rounded-[4px] overflow-hidden w-[20vw] aspect-[0.6]">
      <div
        style={{ backgroundImage: `url(${props.productImage.src})` }}
        className="relative h-[70%] w-full bg-center bg-cover"
      >
        {(props.isNewProduct || props.discount) && (
          <div
            style={{
              backgroundColor: props.isNewProduct ? "#34D399" : "#F87171",
            }}
            className="absolute top-[16px] right-[16px] rounded-[50%] h-[50px] aspect-square flex justify-center items-center text-white"
          >
            {props.isNewProduct ? "New" : props.discount}
          </div>
        )}
      </div>
      <div className="h-[30%] pl-[16px] pt-[16px]">
        <h4 className="text-[20pt] font-bold mb-[6px]">{props.name}</h4>
        <h5 className="text-[#57585F] text-[11pt] mb-[5px]">
          {props.subtitle}
        </h5>
        <span className="[font-weight:500] text-[#77459B] text-[16pt]">
          {props.price}
        </span>
      </div>
    </div>
  );
};
