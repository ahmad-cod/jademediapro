import Link from "next/link";

/**
 * @typedef {{
 *    children: React.ReactNode
 *    href: string,
 *    icon: string,
 *    alignIcon?: "left"|"right"
 * }} HomeButtonProps
 *
 * A purple button on the home page.
 * @type {React.FC<HomeButtonProps>}
 */
export const HomeButton = (props) => {
  return (
    <Link
      className="bg-[#4F2E67] w-fit p-[12px_32px] text-white rounded-[4px]"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};
