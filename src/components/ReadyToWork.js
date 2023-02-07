import React from "react";
import { FiSend } from "react-icons/fi";
import styles from "../styles/Project.module.css"

const ReadyToWork = () => {
  return (
    <div className={styles.ready_to_work}>
      <div className={styles.ready_container}>
        <h2>Ready To Work Together?</h2>
        <p>Let’s have a chat about your amazing ideas</p>
        <button>
          <FiSend /> Book A Free Call
        </button>
      </div>
    </div>
  );
};

export default ReadyToWork;
