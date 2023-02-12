import { navigationData } from "../../data/serviceData";
import styles from "../../styles/About.module.css";
import Navigation from "../servicesComponent/serviceNavigation";
import style from "../../styles/Services.module.css";
const AboutServices = () => {
  const navigation = navigationData.slice(0, 4);
  return (
    <div className={style.about_services}>
      <div className={styles.client_heading}>
        <h2>Our Services</h2>
      </div>
      <Navigation navigation={navigation} />
    </div>
  );
};

export default AboutServices;
