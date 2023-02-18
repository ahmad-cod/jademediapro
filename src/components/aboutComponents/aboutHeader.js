import styles from "../../styles/Project.module.css";
import { aboutHeaderImg } from "@/images";
import Image from "next/image";
const AboutHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.project_header}>
        <div className={styles.header_text}>
          <div className={styles.header_heading}>
            <h2>The leading branding and digital marketing company</h2>
          </div>
          <div className={styles.header_note}>
            <p>
              We implement the most effective design and digital marketing
              strategies that drive more traffic to your website by offering a
              broad spectrum of advantages to grow your business.
            </p>
          </div>
        </div>
        <div className={styles.header_image}>
          <Image src={aboutHeaderImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
