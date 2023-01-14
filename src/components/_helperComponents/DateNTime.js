import React from "react";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";

const DateNTime = ({
  schedule,
  handleChangeSchedule,
  handleScheduleBlur,
  focus,
  setFocus,

}) => {
  return (
    <DateTimePicker
      className="border-none"
      value={schedule}
      onChange={handleChangeSchedule}
      onFocus={() =>
        setFocus({
          ...focus,
          scheduleFocus: true,
        })
      }
      onBlur={handleScheduleBlur}
      renderInput={(params) => <TextField {...params} error={invalid} />}
    />
  );
};

export default DateNTime;
