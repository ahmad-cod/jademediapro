/**
 * @typedef {{
 *    children: React.ReactNode,
 *    className: string,
 *    height?: Height,
 *    style: React.CSSProperties
 * }} PageSectionProps
 */

/**
 * A section, either in the landing page or otherwise.
 * @type {React.FC<PageSectionProps>}
 */
export const PageSection = ({ style, children, className, height }) => {
  return (
    <section
      style={style}
      className={
        "h-screen " +
        (height ? `h-[${height}]` : "") +
        " px-[var(--side-padding)] min-h-max relative " +
        className
      }
    >
      {children}
    </section>
  );
};
