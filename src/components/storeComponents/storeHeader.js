import { useState, useEffect } from "react";
import { sliderImages } from "../../data/storeData";
import styles from "../../styles/Store.module.css";
import Image from "next/image";

const StoreHeader = () => {
  const [sliderContent, setSliderContent] = useState(sliderImages);
  const [sliderCount, setSliderCount] = useState(1);

  const indexOfLastSlide = sliderCount * 1;
  const indexOfFirstSlide = indexOfLastSlide - 1;
  const currentSlide = sliderContent.slice(indexOfFirstSlide, indexOfLastSlide);

  const dots = [];
  for (let i = 1; i <= sliderContent.length; i++) {
    dots.push(i);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderCount((prev) => (prev === sliderContent.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderContent.length]);

  return (
    <div className={styles.slider_container}>
      {currentSlide.map((slides) => (
        <Image src={slides} alt={slides} key={slides} />
      ))}
      <div className={styles.header_content}>
        <div className={styles.header_text}>
          <h1>High-Quality Artistry Framed Just For You </h1>
          <p>
            Our gallery is made from selected and best quality designs that are
            suitable for your creative space
          </p>
        </div>
        <div className={styles.dot_container}>
          {dots.map((dot) => (
            <div
              key={dot}
              className={`${sliderCount === dot ? styles.dot_active : ""} ${
                styles.dot
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
