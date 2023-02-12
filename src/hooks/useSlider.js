import { useState, useEffect } from "react";
const useSlider = (sliderData) => {
  const [sliderContent, setSliderContent] = useState(sliderData);
  const [sliderCount, setSliderCount] = useState(1);

  const indexOfLastSlide = sliderCount * 1;
  const indexOfFirstSlide = indexOfLastSlide - 1;
  const currentSlide = sliderContent.slice(indexOfFirstSlide, indexOfLastSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderCount((prev) => (prev === sliderContent.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderContent.length]);
  return [currentSlide, sliderCount];
};

export default useSlider;
