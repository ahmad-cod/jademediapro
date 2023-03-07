import Image from "next/image";
import { testimonials } from "../../data/aboutData";
import useSlider from "../../hooks/useSlider";
import styles from "../../styles/About.module.css";

const Testimonials = () => {
  const [currentSlide] = useSlider(testimonials);
  return (
    <div className={styles.testimonials_container} id="testimonials">
      <div className={styles.client_heading}>
        <h2>Testimonials</h2>
      </div>
      <div className={styles.testimonial_content}>
        <div className={styles.testimonal_statement}>
          <h2>
            Many people have already seen how working with JadeMediaPro has
            enabled them to rebrand and grow their businesses.
          </h2>
        </div>
        <div className={styles.testimonial}>
          {currentSlide.map((review) => (
            <div className={styles.testimonial_body} key={review.id}>
              <div className={styles.testimonial_text}>
                <div className={styles.testimonal_name}>
                  <h3>{review.fullname}</h3>
                  <p>{review.position}</p>
                </div>
                <div className={styles.testimonial_review}>
                  <p>{review.testimony}</p>
                </div>
              </div>
              <div className={styles.testimonial_image}>
                <Image
                  src={review.picture}
                  alt={review.fullname}
                  width={300}
                  height={300}
                />
                <p>&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
