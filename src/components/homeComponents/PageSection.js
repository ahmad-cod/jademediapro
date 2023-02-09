/**
 * @typedef {{
 *    children: React.ReactNode,
 *    className: string,
 *    style: React.CSSProperties
 * }} PageSectionProps
 */

/**
 * A section, either in the landing page or otherwise.
 * @type {React.FC<PageSectionProps>}
 */
export const PageSection = ({ style, children, className }) => {
  return (
    <section
      style={style}
      className={
        "h-screen px-[var(--side-padding)] min-h-max relative " + className
      }
    >
      {children}
    </section>
  );
};
