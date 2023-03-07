import styles from "../../styles/Contact.module.css";
import FaqContents from "./faqContent";
import { FAQData } from "../../data/contactData";

const FAQ = () => {
  return (
    <div className={styles.faq_container}>
      <div className={styles.contact_heading}>
        <h2>FAQ</h2>
        <p>Frequently asked questions about JadeMediaPro’s services</p>
      </div>

      <FaqContents />
    </div>
  );
};

export default FAQ;
