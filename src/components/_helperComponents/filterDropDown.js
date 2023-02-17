import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "../../styles/Contact.module.css";

const FilterDropdown = ({ data, label, filter }) => {
  const [selectedValue, setSelectedValue] = useState();
  const [showService, setShowService] = useState();
  const valueRef = useRef([]);
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(false);
  const selectService = (value) => {
    setSelectedValue(valueRef.current[value].textContent);
    setShowService();
    filter(value);
    console.log(value);
  };
  const handleServiceChange = () => {
    setFocus(true);
    setActive(true);
    setShowService((current) => !current);
  };

  return (
    <div className={styles.dropdownFilter}>
      <div
        className={`${styles.form_input_container} ${
          styles.dropdown_container
        } ${selectedValue ?? styles.active_border_color}`}
      >
        <label className={active || focus ? styles.label_active : ""}>
          {label}
        </label>
        <div className={styles.form_input}>
          <button
            onClick={handleServiceChange}
            className={styles.active_dropdown}
            onBlur={() => setFocus(false)}
          >
            {selectedValue ?? ""}
            <span className={styles.icon_left}>
              {!showService ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
          </button>
        </div>
        <div className={showService ? styles.form_dropdown : ""}>
          {showService &&
            data.map((data, i) => {
              return (
                <div className={styles.dropdown_buttons} key={i}>
                  <button
                    ref={(el) => (valueRef.current[data] = el)}
                    id={i}
                    onClick={() => selectService(data)}
                    className={styles.dropdown_button}
                  >
                    {data}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
