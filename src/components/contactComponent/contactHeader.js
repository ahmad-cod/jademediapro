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
{/* <select
                  value={tel.telCountry}
                  name="telCountry"
                  onChange={handleChangeTel}
                  className={styles.tel_number}
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      telFocus: true,
                    })
                  }
                  onBlur={() =>
                    setFocus({
                      ...focus,
                      telFocus: false,
                    })
                  }
                >
                  <option className={styles.tel_number}>US</option>
                  {countries?.sort().map((item, i) => {
                    return (
                      <option
                        key={i}
                        value={item.cca2}
                        className={styles.tel_number}
                      >
                        {item.cca2}
                      </option>
                    );
                  })}
                </select> */}