import Head from "next/head";
import { DefaultHeader } from "../headers";
import { Footer } from "../Footer";

/**
 * @typedef {{
 *    backgroundColor: BackgroundColor,
 *    color: Color,
 *    children: React.ReactNode,
 *    headerType: 1 | 2 | 3,
 *    "paint-header-on-scroll"?: boolean,
 *    title?: string
 * }} MainWrapperProps
 */

/**
 * Main Layout wrapper for pages, with the default header (navbar) and footer.
 * @type {React.FC<MainWrapperProps>}
 */
export const MainWrapper = (props) => {
  return (
    <>
      <Head>
        <title>{props.title ?? "Jade Media Pro"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <style>{`body {background-color: ${props.backgroundColor}}`}</style>
      </Head>
      {props.headerType === 1 ? (
        <DefaultHeader
          backgroundColor={props.backgroundColor}
          color={props.color}
          paintOnScroll={props["paint-header-on-scroll"]}
        />
      ) : (
        <></>
      )}
      <div className="bg-white">{props.children}</div>
      <Footer />
    </>
  );
};
