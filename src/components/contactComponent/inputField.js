import Image from "next/image";
import { contactGif } from "../../images";
import { RxText } from "react-icons/rx";
import { FiSend } from "react-icons/fi";
import styles from "../../styles/Contact.module.css";
import { use, useState } from "react";

const InputField = () => {
  const [active, setActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState("");
  const [service, setService] = useState();
  const [schedule, setSchedule] = useState();
  const [activeInput, setActiveInput] = useState();
  const handleActiveInput = (value) => {
    setActiveInput(value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    setActive(true);
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
    setActive(true);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setActive(true);
  };
  const handleChangeSchedule = (e) => {
    setSchedule(e.target.value);
    setActive(true);
  };
  const handleChangeService = (e) => {
    setService(e.target.value);
    setActive(true);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    setActive(true);
  };
  const handleChangeTel = (e) => {
    setTel(e.target.value);
    setActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.form_inputs_container}>
      <div className={styles.input_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <div className={styles.form_input_container}>
              <label
                className={
                  active || activeInput === firstName ? styles.label_active : ""
                }
              >
                Last name
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={activeInput === firstName ? "example: John" : ""}
                  onFocus={() => handleActiveInput(firstName)}
                  onBlur={() => handleActiveInput()}
                  value={firstName}
                  onChange={handleChangeFirstName}
                />
                <span>
                  <RxText />
                </span>
              </div>
            </div>
            <div className={styles.form_input_container}>
              <label
                className={
                  active || activeInput === lastName ? styles.label_active : ""
                }
              >
                Last name
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={activeInput === lastName ? "example: Doe" : ""}
                  onFocus={() => handleActiveInput(lastName)}
                  onBlur={() => handleActiveInput()}
                  value={lastName}
                  onChange={handleChangeLastName}
                />
                <span>
                  <RxText />
                </span>
              </div>
            </div>
            <div className={styles.form_input_container}>
              <label
                className={
                  active || activeInput === email ? styles.label_active : ""
                }
              >
                Email
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={
                    activeInput === email ? "example: johnDoe@example.com" : ""
                  }
                  onFocus={() => handleActiveInput(email)}
                  onBlur={() => handleActiveInput()}
                  value={email}
                  onChange={handleChangeEmail}
                />
                <span>
                  <RxText />
                </span>
              </div>
            </div>

            <div className={styles.form_input_container}>
              <label
                className={
                  active  || activeInput === tel ? styles.label_active : ""
                }
              >
                Mobile
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={activeInput === tel ? "example: Doe" : ""}
                  onFocus={() => handleActiveInput(tel)}
                  onBlur={() => handleActiveInput()}
                  value={tel}
                  onChange={handleChangeTel}
                />
                <span>
                  <RxText />
                </span>
              </div>
            </div>
            <div className={styles.form_input_container}>
              <label
                className={
                  active || activeInput === schedule ? styles.label_active : ""
                }
              >
                Select Avaliablity
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={activeInput === schedule ? "example: Doe" : ""}
                  onFocus={() => handleActiveInput(schedule)}
                  onBlur={() => handleActiveInput()}
                  value={schedule}
                  onChange={handleChangeSchedule}
                />
                <span>
                  <RxText />
                </span>
              </div>
            </div>
            <div className={styles.form_input_container}>
              <label
                className={
                 active || activeInput === service ? styles.label_active : ""
                }
              >
                Select Service of Interest
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={activeInput === service ? "example: Doe" : ""}
                  onFocus={() => handleActiveInput(service)}
                  onBlur={() => handleActiveInput()}
                  value={service}
                  onChange={handleChangeService}
                />
                <span>
                  <RxText />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.form_input_container}>
            <label
              className={
                message || activeInput === message ? styles.label_active : ""
              }
            >
              {message || activeInput === message ? "What is your issue" : ""}
            </label>
            <div className={styles.form_input_text_area}>
              <textarea
                type="text"
                placeholder="Message"
                onFocus={() => handleActiveInput(message)}
                onBlur={() => handleActiveInput()}
                value={message}
                onChange={handleChangeMessage}
              />
              <span>
                <RxText />
              </span>
            </div>
          </div>
          <div className={styles.radio_button}>
            <input type="checkbox" value={check} />
            <p>
              I agree to the Jademediapros Terms of Service and Privacy Policy.
            </p>
          </div>
          <div className={styles.form_button}>
            <button type="submit">
              <FiSend />
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={styles.form_image}>
        <Image src={contactGif} alt="" />
      </div>
    </div>
  );
};

export default InputField;
