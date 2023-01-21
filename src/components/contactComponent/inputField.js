import Image from "next/image";
import { contactGif } from "../../images";
import { RxText } from "react-icons/rx";
import { FiSend } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import DateNTime from "../_helperComponents/DateNTime";
import { servicesData } from "../../data/contactData";
import styles from "../../styles/Contact.module.css";
import { useState, useEffect, useRef } from "react";

const InputField = () => {
  const serviceRefs = useRef([]);
  const countryRefs = useRef([]);

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
  const [err, setErr] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    messageError: false,
    serviceError: false,
    scheduleError: false,
    telError: false,
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
  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(true);
  const [schedule, setSchedule] = useState("");
  const [showService, setShowService] = useState();
  const [showCountry, setShowCountry] = useState();

  const handleCheckChange = () => {
    setCheck((current) => !current);
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
    setErr({
      ...err,
      firstNameError: false,
    });
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setActive({
      ...active,
      emailActive: true,
    });
    setErr({
      ...err,
      emailError: false,
    });
  };
  // const onChange = (value, dateString) => {
  //   console.log("Selected Time: ", value);
  //   console.log("Formatted Selected Time: ", dateString);
  // };
  const handleChangeSchedule = (e) => {
    const num = e.target.valueAsNumber;
    console.log(num);

    setSchedule(num);
    setActive({
      ...active,
      scheduleActive: true,
    });
    setErr({
      ...err,
      scheduleError: false,
    });
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    setActive({
      ...active,
      messageActive: true,
    });
    setErr({
      ...err,
      messageError: false,
    });
  };
  const handleChangeTel = (e) => {
    setTel(e.target.value);

    setActive({
      ...active,
      telActive: true,
    });
    setErr({
      ...err,
      telError: false,
    });
  };
  const handleServiceChange = () => {
    setFocus({
      ...focus,
      serviceFocus: true,
    });
    setActive({
      ...active,
      serviceActive: true,
    });
    setShowService((current) => !current);
  };
  const handleCountryChange = () => {
    setFocus({
      ...focus,
      telFocus: true,
    });
    setActive({
      ...active,
      telActive: true,
    });
    setShowCountry((current) => !current);
  };
  const handleFirstNameBlur = () => {
    setFocus({
      ...focus,
      firstNameFocus: false,
    });
    setErr({
      ...err,
      firstNameError: true,
    });
  };
  const handleLastNameBlur = () => {
    setFocus({
      ...focus,
      lastNameFocus: false,
    });
    setErr({
      ...err,
      lastNameError: true,
    });
  };
  const handleEmailBlur = () => {
    setFocus({
      ...focus,
      emailFocus: false,
    });
    setErr({
      ...err,
      emailError: true,
    });
  };
  const handleMessageBlur = () => {
    setFocus({
      ...focus,
      messageFocus: false,
    });
    setErr({
      ...err,
      messageError: true,
    });
  };
  const handleTelBlur = () => {
    setFocus({
      ...focus,
      telFocus: false,
    });
    setErr({
      ...err,
      telError: true,
    });
  };
  const handleScheduleBlur = () => {
    setFocus({
      ...focus,
      scheduleFocus: false,
    });
    setErr({
      ...err,
      scheduleError: true,
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
    if (obj.cca2 === selectedCountry) {
      return true;
    }
    return false;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const selectService = (value) => {
    setSelectedService(serviceRefs.current[value].innerHTML);
    setShowService();
  };
  const selectCountry = (value) => {
    setSelectedCountry(countryRefs.current[value].innerHTML);
    setShowCountry();
  };

  return (
    <div className={styles.form_inputs_container}>
      <div className={styles.input_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <div
              className={`${styles.form_input_container} ${
                active.firstNameActive ? styles.active_border_color : ""
              } ${
                err.firstNameError &&
                !focus.firstNameFocus &&
                !active.firstNameActive
                  ? styles.error_border_color
                  : ""
              }`}
            >
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
                  placeholder={focus.firstNameFocus ? "John" : ""}
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      firstNameFocus: true,
                    })
                  }
                  onBlur={handleFirstNameBlur}
                  value={firstName}
                  onChange={handleChangeFirstName}
                />
                <span>
                  <RxText />
                </span>
              </div>
              <div
                className={`${styles.error} ${
                  err.firstNameError &&
                  !focus.firstNameFocus &&
                  !active.firstNameActive
                    ? styles.errmsg
                    : ""
                }`}
              >
                <p>Required Field </p>
              </div>
            </div>
            <div
              className={`${styles.form_input_container} ${
                active.lastNameActive ? styles.active_border_color : ""
              } ${
                err.lastNameError &&
                !focus.lastNameFocus &&
                !active.lastNameActive
                  ? styles.error_border_color
                  : ""
              }`}
            >
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
                  placeholder={focus.lastNameFocus ? "Doe" : ""}
                  onFocus={() =>
                    setFocus({
                      ...focus,
                      lastNameFocus: true,
                    })
                  }
                  onBlur={handleLastNameBlur}
                  value={lastName}
                  onChange={handleChangeLastName}
                />
                <span>
                  <RxText />
                </span>
              </div>
              <div
                className={`${styles.error} ${
                  err.lastNameError &&
                  !focus.lastNameFocus &&
                  !active.lastNameActive
                    ? styles.errmsg
                    : ""
                }`}
              >
                <p>Required Field </p>
              </div>
            </div>

            <div
              className={`${styles.form_input_container} ${
                active.emailActive ? styles.active_border_color : ""
              } ${
                err.emailError && !focus.emailFocus && !active.emailActive
                  ? styles.error_border_color
                  : ""
              }`}
            >
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
                  onBlur={handleEmailBlur}
                  value={email}
                  onChange={handleChangeEmail}
                />
                <span>
                  <AiOutlineMail />
                </span>
              </div>
              <div
                className={`${styles.error} ${
                  err.emailError && !focus.emailFocus && !active.emailActive
                    ? styles.errmsg
                    : ""
                }`}
              >
                <p>Required Field </p>
              </div>
            </div>

            <div
              className={`${styles.form_input_container} ${
                active.telActive ? styles.active_border_color : ""
              } ${styles.country_picker} ${
                err.telError && !focus.telFocus && !active.telActive
                  ? styles.error_border_color
                  : ""
              }`}
            >
              <label
                className={
                  active.telActive || focus.telFocus ? styles.label_active : ""
                }
              >
                {active.telActive || focus.telFocus ? "Mobile" : ""}
              </label>

              <div className={styles.form_input}>
                <button
                  onClick={handleCountryChange}
                  className={styles.active_country_dropdown}
                >
                  {!selectedCountry ? "US" : selectedCountry}
                  <span className={styles.icon_left}>
                    {!showCountry ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </button>

                <div
                  className={showCountry ? styles.form_country_dropdown : ""}
                >
                  {showCountry &&
                    countries.map((country, i) => {
                      return (
                        <div className={styles.dropdown_country} key={i}>
                          <button
                            ref={(el) =>
                              (countryRefs.current[country.cca2] = el)
                            }
                            id={i}
                            onClick={() => selectCountry(country.cca2)}
                          >
                            {country.cca2}
                          </button>
                        </div>
                      );
                    })}
                </div>

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
                  onBlur={handleTelBlur}
                  value={tel}
                  onChange={handleChangeTel}
                />

                <span>
                  <HiOutlinePhone />
                </span>
              </div>
              <div
                className={`${styles.error} ${
                  err.telError && !focus.telFocus && !active.telActive
                    ? styles.errmsg
                    : ""
                } `}
              >
                <p>Required Field </p>
              </div>
            </div>
            <div
              className={`${styles.form_input_container} ${
                active.scheduleActive ? styles.active_border_color : ""
              } ${
                err.scheduleError &&
                !focus.scheduleFocus &&
                !active.scheduleActive
                  ? styles.error_border_color
                  : ""
              }`}
            >
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
                  onBlur={handleScheduleBlur}
                  value={schedule}
                  onChange={handleChangeSchedule}
                  className={styles.schedule_input}
                />
              </div>
              <div
                className={`${styles.error} ${
                  err.scheduleError &&
                  !focus.scheduleFocus &&
                  !active.scheduleActive
                    ? styles.errmsg
                    : ""
                }`}
              >
                <p>Required Field </p>
              </div>
            </div>

            <div
              className={`${styles.form_input_container} ${
                styles.dropdown_container
              } ${selectedService ?? styles.active_border_color}`}
            >
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
                <button
                  onClick={handleServiceChange}
                  className={styles.active_dropdown}
                >
                  {selectedService ?? ""}
                  <span className={styles.icon_left}>
                    {!showService ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </span>
                </button>
              </div>
              <div className={showService ? styles.form_dropdown : ""}>
                {showService &&
                  servicesData.map((service, i) => {
                    return (
                      <div className={styles.dropdown_buttons} key={i}>
                        <button
                          ref={(el) => (serviceRefs.current[service] = el)}
                          id={i}
                          onClick={() => selectService(service)}
                          className={styles.dropdown_button}
                        >
                          {service}
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div
            className={`${styles.form_input_container} ${
              active.messageActive ? styles.active_border_color : ""
            } ${
              err.messageError && !focus.messageFocus && !active.messageActive
                ? styles.error_border_color
                : ""
            }`}
          >
            <label
              className={
                active.messageActive || focus.messageFocus
                  ? styles.label_active
                  : ""
              }
            >
              {active.messageActive || focus.messageFocus
                ? "Please describe your issue"
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
                onBlur={handleMessageBlur}
                value={message}
                onChange={handleChangeMessage}
              />
              <span>
                <RxText />
              </span>
              <div
                className={`${styles.error} ${
                  err.messageError &&
                  !focus.messageFocus &&
                  !active.messageActive
                    ? styles.errmsg
                    : ""
                }`}
              >
                <p>Required Field </p>
              </div>
            </div>
          </div>
          <div className={styles.check_button}>
            <input
              type="checkbox"
              value={check}
              onChange={handleCheckChange}
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
