import { culture } from "../../data/aboutData";
import styles from "../../styles/About.module.css";
const CultureAndValues = () => {
  return (
    <div className={styles.culture_container}>
      <div className={styles.client_heading}>
        <h2>Our Culture & Values</h2>
      </div>
      <div className={styles.culture_content}>
        {culture.map((value) => (
          <div className={styles.culture_item} key={value.id}>
            <div className={styles.culture_item_heading}>
              <h3>{value.title}</h3>
              <div className={styles.line}></div>
            </div>
            <div className={styles.item_note}>
              <p>{value.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureAndValues;
