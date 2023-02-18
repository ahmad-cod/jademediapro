import styles from "../../styles/About.module.css";
import { FiSend } from "react-icons/fi";

const Volunteering = () => {
  return (
    <div className={styles.voluntering_container}>
      <div className={styles.client_heading}>
        <h2>Volunteering</h2>
      </div>
      <div className={styles.volunteer_statement}>
        <h2>
          Bridging Africa’s transition from the analog age to the Digital age by
          Training young Professionals and solving Digital challenges at
          individual and corporate levels
        </h2>
      </div>
      <div className={styles.voluntering_content}>
        <div className={styles.volunteer_video}>
          <iframe
            src="https://player.vimeo.com/video/691920808?h=dd0cae7148"
            width="500px"
            height="300px"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className={styles.voluntering_content_body}>
          <div className={styles.body_text}>
            <p>
              Individuals being raised without access to the fundamental
              conditions of living essential for normal development is not a
              far-fetched scenario in a world of uncontrolled population, social
              unrest, and widespread poverty. This is why, as ardent believers
              in each individual as the building block of any society, we have
              chosen to take it upon ourselves to ensure that everyone has
              unhindered access to high-quality living and enhance the overall
              quality of global development.
            </p>
          </div>
          <div className={styles.body_count}>
            <div className={styles.body_number}>
              <h3>$ 1.2M</h3>
              <p>funded</p>
            </div>
            <div className={styles.body_number}>
              <h3>1.6K</h3>
              <p>volunteers</p>
            </div>
            <div className={styles.body_number}>
              <h3>5.3K</h3>
              <p>lives changed</p>
            </div>
          </div>
          <div className={styles.volunteer_button}>
            <div className={styles.donate}>
              <button>Donate Now</button>
            </div>
            <div className={styles.share}>
              <button>
                <FiSend />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
