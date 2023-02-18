import { sliderImages } from "../../data/storeData";
import styles from "../../styles/Store.module.css";
import Image from "next/image";
import useSlider from "../../hooks/useSlider";

const StoreHeader = () => {
  const [currentSlide, sliderCount] = useSlider(sliderImages);
  const dots = [];
  for (let i = 1; i <= sliderImages.length; i++) {
    dots.push(i);
  }
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
          {dots?.map((dot) => (
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
