import React from "react";

import { DatePicker, Space } from "antd";
import moment from "moment";

const DateNTime = ({
  schedule,
  handleChangeSchedule,
  handleScheduleBlur,
  focus,
  setFocus,
  setSchedule,

  scheduleFocus,
}) => {
  const onOk = (e) => {
    console.log(schedule);
  };
  const onChange = (e) => {
    console.log("Selected Time: ", value);
    setSchedule(e.target);
    console.log(schedule);
  };
  return (
    <Space direction="vertical" size={20}>
      <DatePicker
        showTime
        onChange={handleChangeSchedule}
        onBlur={handleScheduleBlur}
        value={schedule || ""}
        onFocus={() => {
          setFocus({
            ...focus,
            scheduleFocus: true,
          });
        }}
        placeholder=""
        style={{
          width: "330px",
          position: "static",
          boxShadow: "none",
          border: "none",
          cursor: "pointer",
          gap: "10px",
          background: "transparent",
          padding: "0",
          transition: "none",
        }}
      />
    </Space>
  );
};

export default DateNTime;
