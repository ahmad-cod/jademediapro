import { useEffect, useState } from "react";

const Something = () => {
  const [left, setLeft] = useState();
  const [up, setUp] = useState();
  const control = (e) => {
    setLeft(e.clientX);
    setUp(e.clientY);
  };
  //   useEffect(() => {
  //     window.addEventListener("mouseover", control);
  //     return () => window.removeEventListener("mouseover", control);
  //   }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      onMouseOver={control}
    >
      <div
        style={{
          width: "400px",
          margin: "auto",
          height: "400px",
          position: "relative",
          background: "green",
        }}
      >
        <div style={{ position: "fixed" }}>
          <button
            style={{
              backgroundColor: "red",
              padding: "20px",
              left: left,
              top: up,
              position: "relative",
            }}
          >
            {left}
          </button>
        </div>
        <div style={{ position: "fixed" }}>
          <button
            style={{
              backgroundColor: "blue",
              padding: "20px",
              top: up,
              right: left,
              position: "relative",
            }}
          >
            {up}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Something;
