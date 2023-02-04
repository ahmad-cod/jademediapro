import styles from "../../styles/Contact.module.css";
import InputField from "./inputField";

const ContactForm = () => {
  return (
    <div className={styles.form_container}>
      <div className={styles.contact_heading}>
        <h2>Need more help?</h2>
        <p>
          Have further questions about our products or services? Get in touch
          with us.
        </p>
      </div>
      <InputField />
    </div>
  );
};

export default ContactForm;
