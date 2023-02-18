import Link from "next/link";
import Image from "next/image";

/**
 * @typedef {{
 *    children: React.ReactNode
 *    href: string,
 *    className: string
 * }} HomeButtonProps
 */

/**
 * A purple button on the home page.
 * @type {React.FC<HomeButtonProps>}
 */
export const HomeButton = (props) => {
  return (
    <Link
      className={
        "bg-[#4F2E67] w-fit p-[12px_27px] max-h-[60px] max-[1024px]:text-[11pt] flex justify-center items-center gap-[5%] whitespace-nowrap text-white rounded-[4px] " +
        (props.className ?? "")
      }
      href={props.href}
    >
      {props.children}
    </Link>
  );
};
