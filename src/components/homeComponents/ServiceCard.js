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
      className={
        "bg-white flex [box-shadow:3px_3px_16px_rgba(0,0,0,0.1)] py-[30px] rounded-[4px] " +
        (props.vertical
          ? "max-h-[calc(700px + var(--grid-margin))] max-[912px]:max-h-[calc(500px + var(--grid-margin))]"
          : "h-[40vh] max-[912px]:h-[250px] max-[700px]:h-[250px]")
      }
      style={
        props.vertical
          ? {
              minWidth: "30%",
              flexDirection: "column",
              paddingInline: "30px",
              justifyContent: "center",
            }
          : {
              maxHeight: "350px",
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
        <div className="flex items-center pb-[20px] max-[1024px]:pb-[10px] max-[700px]:pb-0">
          <h3
            className={`[line-height:117%] [font-weight:600] text-[#242526] ${
              props.vertical
                ? "text-[39pt] max-[1400px]:text-[34pt] max-[1024px]:text-[26pt] max-[700px]:text-[20pt] "
                : "text-[40pt] max-[1400px]:text-[30pt] max-[1024px]:text-[23pt] max-[700px]:text-[19pt]"
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
              className="h-[120px] max-[1024px]:h-[60px] max-[700px]:h-[120px]"
              width="auto"
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
      className={`flex justify-center items-center [font-weight:500] max-[1024px]:text-[10pt] hover:[--shift:50%] gap-[5%] ${className}`}
    >
      <span className="whitespace-nowrap">View CaseStudy</span>
      <BsArrowRight />
    </Link>
  );
};
