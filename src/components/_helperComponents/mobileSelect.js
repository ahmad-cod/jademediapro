import { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "../../styles/MobileSelect.module.css";
import PropType from "prop-types";
const SelectField = ({ data, filter }) => {
  const [fields, setFields] = useState(data[0]);
  const [showFields, setShowFields] = useState(false);
  const selectRef = useRef([]);
  const selectField = (value) => {
    setFields(selectRef.current[value].textContent);
    setShowFields();
    filter(value);
  };
  return (
    <div className={styles.select_container}>
      <div className={styles.select}>
        <button
          onClick={() => setShowFields((current) => !current)}
          className={styles.select_button}
        >
          {fields ?? ""}
          <span className={styles.icon_left}>
            {!showFields ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </button>
      </div>
      <div className={showFields ? styles.select_dropdown : ""}>
        {showFields &&
          data?.map((data, i) => {
            return (
              <div className={styles.select_options} key={i}>
                <button
                  ref={(el) => (selectRef.current[data] = el)}
                  id={i}
                  onClick={() => selectField(data)}
                  className={styles.select_option}
                >
                  {data}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SelectField;
SelectField.propType = {
  filter: PropType.func.isRequired,
  data: PropType.array.isRequired,
};
