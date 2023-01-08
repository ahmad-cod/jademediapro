import Image from "next/image";
import { contactGif } from "../../images";
import { RxText } from "react-icons/rx";
import { FiSend } from "react-icons/fi";
import styles from "../../styles/Contact.module.css";

import { useState, useEffect } from "react";
import { HiOutlinePhone } from "react-icons/hi";

import { inputData } from "../../data/contactData";

const InputField = () => {
  const [countries, setCountries] = useState([]);

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

  const [tel, setTel] = useState({
    telNumber: "",
    telCode: "",
    telCountry: "",
  });

  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(true);
  const [service, setService] = useState();
  const [schedule, setSchedule] = useState();

  const handleCheck = () => {
    setCheck(false);
  };
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
    setTel({
      ...tel,
      [e.target.name]: e.target.value,
    });

    setActive({
      ...active,
      telActive: true,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await fetch(dataUrl);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const searchSelectedCountry = countries?.find((obj) => {
    if (obj.cca2 === tel.telCountry) {
      return true;
    }
    return false;
  });

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
                First name
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
                  placeholder={focus.emailFocus ? "johnDoe@example.com" : ""}
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
                {active.telActive || focus.telFocus ? "Mobile" : ""}
              </label>

              <div className={styles.form_input}>
                <select
                  value={tel.telCountry}
                  name="telCountry"
                  onChange={handleChangeTel}
                  className={styles.tel_number}
                >
                  <option className={styles.tel_number}>US</option>
                  {countries?.map((item, i) => {
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
                </select>
                <span>
                  <p>
                    {active.telActive
                      ? searchSelectedCountry && searchSelectedCountry.idd.root
                      : "+1"}
                    (
                    {active.telActive
                      ? searchSelectedCountry &&
                        searchSelectedCountry.idd.suffixes
                      : "500"}
                    )
                  </p>
                </span>
                <input
                  type="text"
                  placeholder="000-0000"
                  name="telNumber"
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
                  value={tel.telNumber}
                  onChange={handleChangeTel}
                />

                <span>
                  <HiOutlinePhone />
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
                  type={focus.scheduleFocus ? "datetime-local" : ""}
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
                  className={styles.schedule_input}
                />
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
                <select
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
                  className={styles.select_input}
                >
                  <option></option>
                  {inputData.map((option, i) => (
                    <option value={option} key={i}>
                      {option}
                    </option>
                  ))}
                </select>
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
            <input
              type="checkbox"
              value={check}
              onChange={handleCheck}
              checked={check === true}
            />
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
