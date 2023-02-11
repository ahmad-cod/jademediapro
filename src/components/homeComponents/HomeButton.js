import Link from "next/link";
import Image from "next/image";

/**
 * @typedef {{
 *    children: React.ReactNode
 *    href: string,
 * }} HomeButtonProps
 *
 * A purple button on the home page.
 * @type {React.FC<HomeButtonProps>}
 */
export const HomeButton = (props) => {
  return (
    <Link
      className="bg-[#4F2E67] w-fit p-[12px_27px] max-h-[60px] flex justify-center items-center gap-[5%] whitespace-nowrap text-white rounded-[4px]"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};
