import Image from "next/image";
import { logos } from "../../data/aboutData";
import styles from "../../styles/About.module.css";

const TechnologyLogos = () => {
  const firstLogos = logos.slice(0, 10);
  const lastLogos = logos.slice(10);
  return (
    <div className={styles.logos_container}>
      <div className={styles.client_heading}>
        <h2>Technology Agents</h2>
      </div>
      <div className={styles.logos}>
        <div className={styles.first_logos}>
          {firstLogos.map((logo) => (
            <Image src={logo} alt={logo} width={60} height={60} key={logo} />
          ))}
        </div>
        <div className={styles.last_logos}>
          {lastLogos.map((logo) => (
            <Image src={logo} alt={logo} width={60} height={60} key={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyLogos;
