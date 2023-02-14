import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Services.module.css";

const Navigation = ({ navigation }) => {
  return (
    <div className={styles.service_navigation}>
      <div className={styles.navigation_buttons}>
        {navigation.map((nav) => (
          <Link href={`/services/${nav.link}`} key={nav.id}>
            <div className={styles.navigation_button}>
              <div className={styles.nav_image}>
                <Image src={nav.image} alt="" />
              </div>
              <div className={styles.nav_title}>
                <h3>{nav.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
