



import ContactForm from "../../components/contactComponent/contactForm";
import ContactHeader from "../../components/contactComponent/contactHeader";
import FAQ from "../../components/contactComponent/faq";
import styles from "../../styles/Contact.module.css"
const Contact = () => {
    return ( 
        <>
        <ContactHeader />
        <div className={styles.contact_container}>
            <FAQ />
            <ContactForm />
        </div>
        </>
     );
}
 
export default Contact;