import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

/**
 * @typedef ServiceCardProps
 * @type {object}
 * @property {string} title The heading of the Service Card.
 * @property {React.ReactNode} children Inner text in the service card.
 * @property {boolean=} vertical Whether the service card should go from top to bottom.
 * @property {boolean=} horizontal Whether the service card should stretch from left to right.
 * @property {string=} caseStudyHref Link to example case study.
 * @property {string} mainImage
 * @property {string} linkImage
 */

/**
 * A card on the home page with info on services provided.
 * @type {React.FC<ServiceCardProps>}
 */
export const ServiceCard = (props) => {
  return (
    <div
      className={
        "bg-white flex [box-shadow:3px_3px_16px_rgba(0,0,0,0.1)] rounded-[4px] " +
        (props.vertical
          ? "max-h-[calc(700px + var(--grid-margin))] max-[912px]:max-h-[calc(500px + var(--grid-margin))] max-[1280px]:pt-[30px]"
          : "max-h-max max-[912px]:h-[250px] max-[700px]:h-[250px] py-[30px]")
      }
      style={
        props.vertical
          ? {
              minWidth: "30%",
              flexDirection: "column",
              paddingInline: "30px",
            }
          : {
              minHeight: "max-content",
              justifyContent: "space-between",
              alignItems: "center",
            }
      }
    >
      <div
        className={
          props.horizontal ? "w-[50%] max-[820px]:w-[70%] pl-[30px]" : ""
        }
      >
        <div
          className={
            "flex items-center pb-[20px] max-[1024px]:pb-[10px] max-[700px]:pb-0 " +
            (props.vertical && "justify-between")
          }
        >
          <h3
            className={`[line-height:117%] [font-weight:500] text-[#242526] ${
              props.vertical
                ? "text-[39pt] max-[1400px]:text-[34pt] max-[1024px]:text-[26pt] max-[700px]:text-[20pt] [font-weight:600]"
                : "text-[40pt] max-[1400px]:text-[31px] max-[1024px]:text-[21px] max-[700px]:text-[19pt]"
            }`}
          >
            {props.title}
          </h3>
          {props.vertical && (
            <Image
              src={props.linkImage}
              alt={props.title}
              className="h-[193px] w-auto aspect-auto max-[1280px]:h-[100px]"
            />
          )}
        </div>
        <p
          className={
            "max-[1024px]:text-[10.5pt] max-[912px]:text-[9.5pt] max-[700px]:text-[8pt] " +
            (props.horizontal && "max-[700px]:hidden")
          }
        >
          {props.children}
        </p>
        {props.horizontal && (
          <div className="flex items-center justify-between max-[700px]:flex-col max-[700px]:items-start">
            <Image
              src={props.linkImage}
              alt={props.title}
              className="h-[120px] w-auto aspect-auto max-[1024px]:h-[60px] max-[700px]:h-[120px]"
            />
            <CaseStudyLink href={props.caseStudyHref} />
          </div>
        )}
      </div>
      <div
        className={`py-[32px] ${
          props.vertical
            ? "flex justify-center w-full"
            : "h-full max-h-[400px] max-[820px]:h-[150px] max-[700px]:h-[150px]"
        }`}
      >
        <Image
          src={props.mainImage}
          alt={props.title}
          className={
            "rounded-[4px] aspect-auto " +
            (props.vertical ? "w-full h-auto" : "w-auto")
          }
        />
      </div>

      {props.caseStudyHref && props.vertical ? (
        <CaseStudyLink href={props.caseStudyHref} className="pb-[20px]" />
      ) : (
        <></>
      )}
    </div>
  );
};

/**
 * @typedef {{
 *    href: string,
 *    className: string,
 * }} CaseStudyLinkProps
 */

/**
 * @type {React.FC<CaseStudyLinkProps>}
 */
const CaseStudyLink = ({ href, className }) => {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center [font-weight:500] max-[1024px]:text-[10pt] hover:[--shift:50%] gap-[5%] ${className}`}
    >
      <span className="whitespace-nowrap">View CaseStudy</span>
      <BsArrowRight />
    </Link>
  );
};
