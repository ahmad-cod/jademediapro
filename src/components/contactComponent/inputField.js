import Image from "next/image";
import { contactGif } from "../../images";
import { RxText } from "react-icons/rx";
import { FiSend } from "react-icons/fi";
import styles from "../../styles/Contact.module.css";
import { useState } from "react";

const InputField = () => {
  const [active, setActive] = useState({
    firstNameActive: false,
    lastNameActive: false,
    emailActive: false,
    messageActive: false,
    serviceActive: false,
    scheduleActive: false,
    telActive: false,
  });
  const [focus, setFocus] = useState({
    firstNameFocus: false,
    lastNameFocus: false,
    emailFocus: false,
    messageFocus: false,
    scheduleFocus: false,
    serviceFocus: false,
    telFocus: false,
  });
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState("");
  const [service, setService] = useState();
  const [schedule, setSchedule] = useState();

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    setActive({
      ...active,
      lastNameActive: true,
    });
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
    setActive({
      ...active,
      firstNameActive: true,
    });
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setActive({
      ...active,
      emailActive: true,
    });
  };
  const handleChangeSchedule = (e) => {
    setSchedule(e.target.value);
    setActive({
      ...active,
      scheduleActive: true,
    });
  };
  const handleChangeService = (e) => {
    setService(e.target.value);
    setActive({
      ...active,
      serviceActive: true,
    });
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    setActive({
      ...active,
      messageActive: true,
    });
  };
  const handleChangeTel = (e) => {
    setTel(e.target.value);
    setActive({
      ...active,
      telActive: true,
    });
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
                  active.firstNameActive || focus.firstNameFocus
                    ? styles.label_active
                    : ""
                }
              >
                Last name
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={focus.firstNameFocus ? "example: John" : ""}
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      firstNameFocus: true,
                    })
                  }
                  onBlur={() =>
                    setFocus({
                      ...focus,
                      firstNameFocus: false,
                    })
                  }
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
                  active.lastNameActive || focus.lastNameFocus
                    ? styles.label_active
                    : ""
                }
              >
                Last name
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={focus.lastNameFocus ? "example: Doe" : ""}
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      lastNameFocus: true,
                    })
                  }
                  onBlur={() =>
                    setFocus({
                      ...focus,
                      lastNameFocus: false,
                    })
                  }
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
                  active.emailActive || focus.emailFocus
                    ? styles.label_active
                    : ""
                }
              >
                Email
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={
                    focus.emailFocus ? "example: johnDoe@example.com" : ""
                  }
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      emailFocus: true,
                    })
                  }
                  onBlur={() =>
                    setFocus({
                      ...focus,
                      emailFocus: false,
                    })
                  }
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
                  active.telActive || focus.telFocus ? styles.label_active : ""
                }
              >
                Mobile
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={focus.telFocus ? "example: Doe" : ""}
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
                  active.scheduleActive || focus.scheduleFocus
                    ? styles.label_active
                    : ""
                }
              >
                Select Avaliablity
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={focus.scheduleFocus ? "example: Doe" : ""}
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      scheduleFocus: true,
                    })
                  }
                  onBlur={() =>
                    setFocus({
                      ...focus,
                      scheduleFocus: false,
                    })
                  }
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
                  active.serviceActive || focus.serviceFocus
                    ? styles.label_active
                    : ""
                }
              >
                Select Service of Interest
              </label>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder={focus.serviceFocus ? "example: Doe" : ""}
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      serviceFocus: true,
                    })
                  }
                  onBlur={() =>
                    setFocus({
                      serviceFocus: false,
                    })
                  }
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
                active.messageActive || focus.messageFocus
                  ? styles.label_active
                  : ""
              }
            >
              {active.messageActive || focus.messageFocus
                ? "What is your issue"
                : ""}
            </label>
            <div className={styles.form_input_text_area}>
              <textarea
                type="text"
                placeholder="Message"
                onFocus={() =>
                  setFocus({
                    ...focus,
                    messageFocus: true,
                  })
                }
                onBlur={() =>
                  setFocus({
                    ...focus,
                    messageFocus: false,
                  })
                }
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
