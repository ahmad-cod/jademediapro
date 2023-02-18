import Image from "next/image";
import { careerDevelopement } from "../../images";
import { MdEast } from "react-icons/md";
import styles from "../../styles/About.module.css";

const Career = () => {
  return (
    <div className={styles.career_container}>
      <div className={styles.client_heading}>
        <h2>Career Development</h2>
      </div>
      <div className={styles.career_statement}>
        <h2>
          We exist for your Growth and Success.<br></br> Got what it takes?
          <strong>Join our Team today</strong>
        </h2>
      </div>
      <div className={styles.career_contents}>
        <div className={styles.career_text}>
          <p>
            Professional opportunities for career growth and improvement in
            personal skills and knowledge with great expectations are available
            at Jade Media Pro.
          </p>
          <p>
            Our training and job/internship programs offer a well-structured
            path to all-around professional development and career advancement.
            We are dedicated to creating and sustaining an environment that
            fosters creativity which is excellent for young professionals.
          </p>
          <p>Great opportunities await you in Jade Media Pro if you are:</p>
          <ul>
            <li>Creative and possess excellent communication skills.</li>
            <li>A team player with the ability to work methodically.</li>
            <li>Self-motivated and result-oriented (and meet deadlines).</li>
            <li>
              A problem solver with a keen eye for aesthetics and details.
            </li>
            <li>
              A problem solver with a keen eye for aesthetics and details.
            </li>
            <li>
              Excellent analytical abilities and up to date with current digital
              trends.
            </li>
          </ul>
          <p>
            We seek these qualities and more in young professionals. We&apos;re
            looking for creative people that share our company&apos;s basic
            values of excellence.
          </p>
          <div className={styles.career_button}>
            <button>
              Apply Now <MdEast />
            </button>
          </div>
        </div>
        <div className={styles.career_image}>
          <Image src={careerDevelopement} alt={careerDevelopement} />
        </div>
      </div>
    </div>
  );
};

export default Career;
