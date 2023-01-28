import Image from "next/image";
import { storeServices } from "../../data/storeData";
import styles from "../../styles/Store.module.css";

const StoreServices = () => {
  return (
    <div className={styles.store_service_container}>
      {storeServices.map((service) => (
        <>
          <div className={styles.store_service}>
            <div className={styles.store_gif}>
              <Image src={service.gif} alt={service.title} />
            </div>
            <div className={styles.service_info}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default StoreServices;
