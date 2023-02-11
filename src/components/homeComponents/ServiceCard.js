import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

/**
 * @typedef {{
 *    title: string,
 *    children: React.ReactNode,
 *    vertical?: boolean,
 *    horizontal?: boolean,
 *    caseStudyHref?: string,
 *    mainImage: string,
 *    linkImage: string
 * }} ServiceCardProps
 *
 * A card on the home page with info on services provided.
 * @type {React.FC<ServiceCardProps>}
 */
export const ServiceCard = (props) => {
  return (
    <div
      className="bg-white flex [box-shadow:3px_3px_16px_rgba(0,0,0,0.1)] py-[30px] rounded-[4px]"
      style={
        props.vertical
          ? {
              minWidth: "30%",
              maxHeight: "calc(700px + var(--grid-margin))",
              flexDirection: "column",
              paddingInline: "30px",
              justifyContent: "center",
            }
          : {
              maxHeight: "350px",
              height: "40vh",
              minHeight: "max-content",
              justifyContent: "space-between",
              alignItems: "center",
            }
      }
    >
      <div className={props.horizontal ? "w-[50%] pl-[30px]" : ""}>
        <div className="flex items-center pb-[20px]">
          <h3
            className={`[line-height:48pt] [font-weight:600] text-[#242526] ${
              props.vertical ? "text-[39pt] " : "text-[40pt]"
            }`}
          >
            {props.title}
          </h3>
          {props.vertical && (
            <Image
              src={props.linkImage}
              alt={props.title}
              height={193}
              width="auto"
            />
          )}
        </div>
        <p>{props.children}</p>
        {props.horizontal && (
          <div className="flex items-center justify-between">
            <Image
              src={props.linkImage}
              alt={props.title}
              height={120}
              width="auto"
            />
            <CaseStudyLink href={props.caseStudyHref} />
          </div>
        )}
      </div>
      <div
        className={`py-[32px] ${
          props.vertical ? "flex justify-center w-full" : "h-full max-h-[200px]"
        }`}
      >
        <Image
          src={props.mainImage}
          alt={props.title}
          style={{
            width: props.vertical ? "100%" : "auto",
            height: props.horizontal ? "100%" : "auto",
          }}
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
 * @type {React.FC<CaseStudyLinkProps>}
 */
const CaseStudyLink = ({ href, className }) => {
  return (
    <Link
      href={href}
      className={`flex justify-center [font-weight:500] hover:[--shift:50%] gap-[5%] ${className}`}
    >
      <span className="whitespace-nowrap">View CaseStudy</span>
      <BsArrowRight />
    </Link>
  );
};
