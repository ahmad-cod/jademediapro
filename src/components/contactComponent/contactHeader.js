import Image from "next/image";
import { contactHeaderImage } from "../../images";
import styles from "../../styles/Contact.module.css"

const ContactHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contact_header_container}>
        <div className={styles.contact_header_text}>
          <h1>Ready to START your journey and GROW your Business?</h1>
        </div>
        <div className={styles.contact_header_image}>
          <Image src={contactHeaderImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
