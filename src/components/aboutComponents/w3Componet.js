import styles from "../../styles/About.module.css";
import { aboutBuild, aboutExpand, aboutGoals } from "../../images";
import Image from "next/image";

const W3 = () => {
  return (
    <div className={styles.w3_container}>
      <div className={styles.w3_content}>
        <div className={styles.what_content}>
          <div className={styles.what_title}>
            <h2>W - W - W - H</h2>
          </div>
          <div className={styles.what_text}>
            <div className={styles.what_body}>
              <h3>What:</h3>
              <p>
                We bring brands to life through creative solutions, strong brand
                identity and help market businesses, products, or services
                achieve their dreams, earn income, and increase their impact.
              </p>
            </div>
            <div className={styles.what_body}>
              <h3>Why:</h3>
              <p>
                We do all the hard work to ensure that we are the preferred
                facilitator of the world’s most successful brands, providing
                people with accessible solutions to their problems.
              </p>
            </div>
            <div className={styles.what_body}>
              <h3>Who:</h3>
              <p>
                We are here to give you the best solution whether you are a
                start-up, small- or medium-sized business, and help you grow and
                achieve your dreams at a very affordable cost and innovative
                way.
              </p>
            </div>
            <div className={styles.what_body}>
              <h3>How</h3>
              <p>
                We create effective strategies, powerful identities, seamless
                interactions, and memorable experiences to connect people to
                brands and organizations.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.goals}>
          <div className={styles.goal}>
            <div className={styles.gif_goal}>
              <Image src={aboutBuild} alt="build" width={100} height={100} />
            </div>
            <div className={styles.goal_content}>
              <h3>Expand your reach</h3>
              <p>
                Implement a mix of strategies to both retain old customers and
                acquire new ones to produce sustainable growth for your
                businesses.
              </p>
            </div>
          </div>
          <div className={styles.goal}>
            <div className={styles.gif_goal}>
              <Image src={aboutExpand} alt="build" width={100} height={100} />
            </div>
            <div className={styles.goal_content}>
              <h3>Build quality relationship</h3>
              <p>
                Remember that your customers are the ones who keep your business
                running, so getting to know them and caring about them is
                crucial.
              </p>
            </div>
          </div>
          <div className={styles.goal}>
            <div className={styles.gif_goal}>
              <Image src={aboutGoals} alt="build" width={100} height={100} />
            </div>
            <div className={styles.goal_content}>
              <h3>Set Goals and track them</h3>
              <p>
                When goals are set, it’s very important to track your progress
                to know if your business grows at all and how quickly it grows.
              </p>
              <div className={styles.goal_button}>
                <button>Become A Partner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default W3;
