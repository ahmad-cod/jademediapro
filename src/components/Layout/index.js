import Head from "next/head";
import { DefaultNavbar } from "./navbars";
import { Footer } from "./Footer";

/**
 * @typedef {{
 *    backgroundColor: BackgroundColor,
 *    color: Color,
 *    children: React.ReactNode,
 *    headerType: 1 | 2 | 3,
 *    "paint-header-on-scroll"?: boolean,
 *    "mobile-pad"?: boolean,
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
        <meta name="description" content={props.meta} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <style>{`body {background-color: ${props.backgroundColor}}`}</style>
      </Head>
      {props.headerType === 1 ? (
        <DefaultNavbar
          backgroundColor={props.backgroundColor}
          color={props.color}
          paintOnScroll={props["paint-header-on-scroll"]}
        />
      ) : (
        <></>
      )}
      <div style={{ backgroundColor: "white" }}>
        {props["mobile-pad"] ? (
          <div
            style={{ backgroundColor: props.backgroundColor ?? "white" }}
            className="max-[700px]:pt-[var(--header-height)]"
          ></div>
        ) : (
          <></>
        )}
        {props.children}
      </div>
      <Footer />
    </>
  );
};
