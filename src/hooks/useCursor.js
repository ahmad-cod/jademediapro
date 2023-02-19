import { useEffect, useRef, useState } from "react";

/**
 * @typedef {{
 *    className: string;
 *    style: React.CSSProperties;
 *    size: Height | Width;
 *    children: React.ReactNode;
 * }} CursorProps
 */

/**
 * @typedef CursorHandle
 * @property {()=>void} trigger A function that starts the cursor up.
 * @property {()=>void} hide A function that closes the cursor.
 * @property {React.FC<CursorProps>} Cursor The cursor element.
 */

/**
 * React hook that implements a custom cursor.
 * @returns {CursorHandle}
 */
export function useCursor() {
  const [isShown, setIsShown] = useState(false);
  /** @type {React.MutableRefObject<HTMLDivElement|null>} */
  const cursorRef = useRef(null);

  /**
   * Cursor tracking handle.
   * @param {MouseEvent} event
   */
  function followCursor(event) {
    cursorRef.current?.style.setProperty("top", event.clientY + "px");
    cursorRef.current?.style.setProperty("left", event.clientX + "px");
  }

  function trigger() {
    setIsShown(true);
  }

  function hide() {
    cursorRef.current
      ?.animate([{ transform: "scale(0)" }], {
        duration: 500,
        direction: "normal",
        fill: "both",
      })
      .addEventListener("finish", () => {
        setIsShown(false);
      });
  }

  /**
   * Cursor element.
   *
   * `NOTE`: The parent element of the cursor must have a relative position property.
   * @type {CursorHandle['Cursor']}
   */
  const Cursor = (props) => {
    useEffect(() => {
      addEventListener("mousemove", followCursor);
      return () => {
        removeEventListener("mousemove", followCursor);
      };
    }, []);

    return isShown ? (
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          height: props.size,
          width: props.size,
          transitionDuration: "150ms",
          transitionTimingFunction: "linear",
          animation: "cursor_expand 500ms",
          ...(props.style ?? {}),
        }}
        className={"" + props.className}
      >
        {props.children}
      </div>
    ) : (
      <></>
    );
  };

  return {
    trigger,
    Cursor,
    hide,
  };
}
