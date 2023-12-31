/**
 * Moon Icon
 * @type {React.FC<{
 *  color: import("csstype").Property.Color,
 *  className: string
 * }>}
 */
export const MoonIcon = ({ color, className }) => {
  return (
    <svg
      style={{ color }}
      className={className}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9781 13.3943C16.0953 14.9134 14.7693 16.1333 13.1713 16.8861C11.3987 17.7211 9.39569 17.9323 7.48783 17.4852C5.57998 17.0382 3.87948 15.9593 2.66271 14.4238C1.44595 12.8884 0.784461 10.9867 0.785734 9.02795L0.785734 9.02762C0.785319 7.4105 1.23674 5.82539 2.08913 4.45095C2.83984 3.24046 3.87529 2.23575 5.10158 1.52223C5.19624 5.33558 6.21534 8.27108 8.22073 10.2759C10.2262 12.2808 13.1628 13.2998 16.9781 13.3943Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.714286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
