import { MainWrapper } from "@/components/Layout";
import ContactForm from "../../components/contactComponent/contactForm";
import ContactHeader from "../../components/contactComponent/contactHeader";
import FAQ from "../../components/contactComponent/faq";
import styles from "../../styles/Contact.module.css";
const Contact = () => {
  return (
    <MainWrapper
      title="Contact Us - Jade Media Pro"
      headerType={1}
      backgroundColor="#1a1a1a"
      paint-header-on-scroll
      meta="Send Us A Complaint or Suggestion Message and You'll Get a Prompt Feedback"
    >
      <ContactHeader />
      <div className={styles.contact_container}>
        <FAQ />
        <ContactForm />
      </div>
    </MainWrapper>
  );
};

export default Contact;
